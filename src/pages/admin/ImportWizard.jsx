import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useBlog } from '../../contexts/BlogContext';

const { FiUpload, FiFileText, FiCheckCircle, FiXCircle, FiLoader, FiEye, FiAlertTriangle } = FiIcons;

const ImportWizard = () => {
  const { posts, addPost } = useBlog();
  const [importFile, setImportFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [importResults, setImportResults] = useState(null);
  const [previewPosts, setPreviewPosts] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/xml' || file.name.endsWith('.xml')) {
      setImportFile(file);
      setImportResults(null);
      setPreviewPosts([]);
      setErrors([]);
    } else {
      alert('Please select a valid WordPress XML export file (.xml)');
    }
  };

  const parseWordPressXML = (xmlText) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

    if (xmlDoc.getElementsByTagName('parsererror').length > 0) {
      throw new Error('Invalid XML file. Please ensure this is a valid WordPress export.');
    }

    const items = xmlDoc.getElementsByTagName('item');
    const posts = [];

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      // Only process posts (not pages or other content types)
      const postTypeNode = item.getElementsByTagName('wp:post_type')[0];
      if (!postTypeNode || postTypeNode.textContent !== 'post') {
        continue;
      }

      // Skip draft posts
      const statusNode = item.getElementsByTagName('wp:status')[0];
      if (statusNode && statusNode.textContent !== 'publish') {
        continue;
      }

      try {
        const post = {
          title: item.getElementsByTagName('title')[0]?.textContent || 'Untitled',
          content: item.getElementsByTagName('content:encoded')[0]?.textContent || '',
          excerpt: item.getElementsByTagName('excerpt:encoded')[0]?.textContent || '',
          publishDate: item.getElementsByTagName('wp:post_date')[0]?.textContent || new Date().toISOString(),
          author: 'Silahub Team', // Default author
          status: 'published',
          category: 'General', // Default category
          tags: [],
          image: '',
          imageAlt: ''
        };

        // Extract categories
        const categories = item.getElementsByTagName('category');
        for (let j = 0; j < categories.length; j++) {
          const category = categories[j];
          const domain = category.getAttribute('domain');
          const categoryName = category.textContent;

          if (domain === 'category' && categoryName && categoryName !== 'Uncategorized') {
            post.category = categoryName;
            break; // Use first non-uncategorized category
          }
        }

        // Extract tags
        const tags = [];
        for (let j = 0; j < categories.length; j++) {
          const category = categories[j];
          const domain = category.getAttribute('domain');
          const tagName = category.textContent;

          if (domain === 'post_tag' && tagName) {
            tags.push(tagName);
          }
        }
        post.tags = tags;

        // Extract featured image URL from postmeta
        const postmetas = item.getElementsByTagName('wp:postmeta');
        for (let j = 0; j < postmetas.length; j++) {
          const metaKey = postmetas[j].getElementsByTagName('wp:meta_key')[0];
          const metaValue = postmetas[j].getElementsByTagName('wp:meta_value')[0];

          if (metaKey && metaKey.textContent === '_thumbnail_id') {
            // This is the attachment ID, but we need the URL
            // WordPress exports don't include full URLs, so we'll handle this separately
            post.featuredImageId = metaValue ? metaValue.textContent : null;
          }
        }

        // Clean up content (remove WordPress shortcodes, etc.)
        post.content = cleanWordPressContent(post.content);
        post.excerpt = cleanWordPressContent(post.excerpt);

        // Generate slug from title
        post.slug = post.title.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');

        posts.push(post);
      } catch (error) {
        console.error('Error parsing post:', error);
        // Continue with other posts
      }
    }

    return posts;
  };

  const cleanWordPressContent = (content) => {
    if (!content) return '';

    // Remove WordPress shortcodes
    content = content.replace(/\[.*?\]/g, '');

    // Remove extra whitespace
    content = content.replace(/\s+/g, ' ').trim();

    // Remove HTML comments
    content = content.replace(/<!--.*?-->/g, '');

    return content;
  };

  const handleProcessImport = async () => {
    if (!importFile) return;

    setIsProcessing(true);
    setErrors([]);

    try {
      const xmlText = await readFileAsText(importFile);
      const parsedPosts = parseWordPressXML(xmlText);

      if (parsedPosts.length === 0) {
        setErrors(['No valid posts found in the export file. Please ensure this is a WordPress post export.']);
        return;
      }

      setPreviewPosts(parsedPosts);
      setShowPreview(true);
      setImportResults(null);
    } catch (error) {
      setErrors([error.message || 'Failed to process the import file.']);
    } finally {
      setIsProcessing(false);
    }
  };

  const readFileAsText = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.onerror = (e) => reject(new Error('Failed to read file'));
      reader.readAsText(file);
    });
  };

  const handleConfirmImport = async () => {
    setIsProcessing(true);

    try {
      let successCount = 0;
      let errorCount = 0;
      const errors = [];

      for (const postData of previewPosts) {
        try {
          // Check for duplicate slugs
          const isDuplicate = posts.some(existingPost =>
            existingPost.slug === postData.slug && existingPost.publishDate
          );

          if (isDuplicate) {
            // Generate unique slug
            let uniqueSlug = postData.slug;
            let counter = 1;
            while (posts.some(p => p.slug === uniqueSlug)) {
              uniqueSlug = `${postData.slug}-${counter}`;
              counter++;
            }
            postData.slug = uniqueSlug;
          }

          const newPost = {
            ...postData,
            id: Date.now().toString() + Math.random(), // More unique ID
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          };

          addPost(newPost);
          successCount++;
        } catch (error) {
          errorCount++;
          errors.push(`Failed to import "${postData.title}": ${error.message}`);
        }
      }

      setImportResults({ successCount, errorCount, errors });
      setShowPreview(false);
      setPreviewPosts([]);
      setImportFile(null);
    } catch (error) {
      setErrors(['Import process failed: ' + error.message]);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleReset = () => {
    setImportFile(null);
    setPreviewPosts([]);
    setImportResults(null);
    setShowPreview(false);
    setErrors([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">WordPress Blog Import Wizard</h1>
          <p className="text-gray-600 mt-2">
            Import your existing WordPress blog posts into the Silahub CMS.
            This wizard will guide you through the migration process.
          </p>
        </div>

        {/* Success/Error Messages */}
        {importResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-6 mb-8"
          >
            <div className="flex items-center space-x-3 mb-4">
              <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-green-500" />
              <h3 className="text-xl font-semibold text-gray-900">Import Complete</h3>
            </div>
            <div className="space-y-2">
              <p className="text-green-600">✅ Successfully imported: {importResults.successCount} posts</p>
              {importResults.errorCount > 0 && (
                <p className="text-red-600">❌ Failed to import: {importResults.errorCount} posts</p>
              )}
              {importResults.errors.length > 0 && (
                <div className="mt-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Errors:</h4>
                  {importResults.errors.map((error, index) => (
                    <p key={index} className="text-sm text-red-600 bg-red-50 p-2 rounded">{error}</p>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={handleReset}
              className="mt-4 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Import Another File
            </button>
          </motion.div>
        )}

        {errors.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8"
          >
            <div className="flex items-center space-x-3 mb-4">
              <SafeIcon icon={FiXCircle} className="w-6 h-6 text-red-500" />
              <h3 className="text-xl font-semibold text-red-900">Import Errors</h3>
            </div>
            {errors.map((error, index) => (
              <p key={index} className="text-red-800">{error}</p>
            ))}
          </motion.div>
        )}

        {/* Step 1: Export Instructions */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
              <span className="text-blue-600 font-bold text-lg">1</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Export Your WordPress Content</h3>
              <p className="text-gray-600 mb-4">
                Before importing, you need to export your blog posts from WordPress.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                <h4 className="font-semibold text-blue-900 mb-2">How to Export:</h4>
                <ol className="list-decimal list-inside text-blue-800 space-y-1">
                  <li>Go to your WordPress Dashboard</li>
                  <li>Navigate to Tools → Export</li>
                  <li>Select "Posts" from the export options</li>
                  <li>Click "Download Export File" - this will give you an XML file</li>
                </ol>
              </div>
              <p className="text-sm text-gray-500">
                Note: This export includes all published posts. Drafts and pages are not included.
              </p>
            </div>
          </div>
        </div>

        {/* Step 2: File Upload */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
              <span className="text-blue-600 font-bold text-lg">2</span>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Upload Your Export File</h3>
              <p className="text-gray-600 mb-4">
                Select the XML file you exported from WordPress.
              </p>

              {!importFile ? (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary-500 transition-colors">
                  <SafeIcon icon={FiUpload} className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <label className="cursor-pointer">
                    <span className="text-primary-600 hover:text-primary-700 font-medium">Choose XML file</span>
                    <span className="text-gray-600"> or drag and drop</span>
                    <input
                      type="file"
                      accept=".xml"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                  </label>
                  <p className="text-sm text-gray-500 mt-2">WordPress export file (.xml) up to 10MB</p>
                </div>
              ) : (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiFileText} className="w-8 h-8 text-green-600" />
                    <div>
                      <p className="font-medium text-green-900">{importFile.name}</p>
                      <p className="text-sm text-green-700">{(importFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={handleProcessImport}
                      disabled={isProcessing}
                      className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                    >
                      {isProcessing ? (
                        <>
                          <SafeIcon icon={FiLoader} className="w-4 h-4 animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <SafeIcon icon={FiEye} className="w-4 h-4" />
                          <span>Preview Import</span>
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => setImportFile(null)}
                      className="text-gray-500 hover:text-gray-700 p-2"
                    >
                      <SafeIcon icon={FiXCircle} className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Preview Modal */}
        {showPreview && previewPosts.length > 0 && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  Preview Import ({previewPosts.length} posts)
                </h3>
                <button
                  onClick={() => setShowPreview(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <SafeIcon icon={FiXCircle} className="w-6 h-6" />
                </button>
              </div>

              <div className="p-6">
                <div className="mb-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiAlertTriangle} className="w-5 h-5 text-yellow-600" />
                    <div>
                      <p className="text-yellow-800 font-medium">Review Before Importing</p>
                      <p className="text-yellow-700 text-sm">
                        Check the posts below. Images and some formatting may need manual adjustment after import.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                  {previewPosts.map((post, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{post.title}</h4>
                      <div className="text-sm text-gray-600 space-y-1">
                        <p>Category: {post.category}</p>
                        <p>Tags: {post.tags.join(', ') || 'None'}</p>
                        <p>Publish Date: {new Date(post.publishDate).toLocaleDateString()}</p>
                        <p>Slug: {post.slug}</p>
                        <div className="mt-2 p-2 bg-gray-50 rounded text-xs line-clamp-3">
                          {post.excerpt || 'No excerpt'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => setShowPreview(false)}
                    className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleConfirmImport}
                    disabled={isProcessing}
                    className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                  >
                    {isProcessing ? (
                      <>
                        <SafeIcon icon={FiLoader} className="w-4 h-4 animate-spin" />
                        <span>Importing...</span>
                      </>
                    ) : (
                      <>
                        <span>Import {previewPosts.length} Posts</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImportWizard;