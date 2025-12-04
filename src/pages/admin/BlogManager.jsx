import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import ImageUpload from '../../components/admin/ImageUpload';
import { useBlog } from '../../contexts/BlogContext';

const { FiPlus, FiEdit, FiTrash2, FiEye, FiCalendar, FiTag, FiFileText, FiSave, FiUpload, FiX } = FiIcons;

const BlogManager = () => {
  const { posts, addPost, updatePost, deletePost, categories } = useBlog();
  const [showForm, setShowForm] = useState(false);
  const [editingPost, setEditingPost] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    tags: '',
    image: '',
    imageAlt: '',
    author: 'Silahub Team',
    status: 'draft',
    publishDate: '',
    slug: '' // Add slug field
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleImageSelect = (imageData) => {
    if (imageData) {
      setFormData({ ...formData, image: imageData.url, imageAlt: imageData.alt || '' });
    } else {
      setFormData({ ...formData, image: '', imageAlt: '' });
    }
  };

  // Function to generate a slug from title
  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
      .substring(0, 100); // Limit length
  };

  // Auto-generate slug when title changes (optional)
  const handleTitleChange = (e) => {
    const title = e.target.value;
    setFormData(prev => ({
      ...prev,
      title,
      slug: prev.slug || generateSlug(title) // Only auto-generate if slug is empty
    }));
  };

  const handleSlugChange = (e) => {
    const slug = e.target.value
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '-') // Only allow alphanumeric and hyphens
      .replace(/--+/g, '-') // Replace multiple hyphens with single
      .replace(/(^-|-$)/g, ''); // Remove leading/trailing hyphens

    setFormData(prev => ({ ...prev, slug }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate slug
    if (!formData.slug) {
      alert('Please enter a URL slug for the blog post.');
      return;
    }

    // Check for duplicate slugs (excluding current post when editing)
    const isDuplicate = posts.some(post =>
      post.slug === formData.slug &&
      (!editingPost || post.id !== editingPost.id)
    );

    if (isDuplicate) {
      alert('This URL slug is already in use. Please choose a different slug.');
      return;
    }

    setIsSubmitting(true);

    try {
      const postData = {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        publishDate: formData.status === 'published' ? (formData.publishDate || new Date().toISOString()) : null
      };

      if (editingPost) {
        updatePost(editingPost.id, postData);
      } else {
        addPost(postData);
      }

      // Reset form
      setFormData({
        title: '',
        excerpt: '',
        content: '',
        category: '',
        tags: '',
        image: '',
        imageAlt: '',
        author: 'Silahub Team',
        status: 'draft',
        publishDate: '',
        slug: ''
      });
      setShowForm(false);
      setEditingPost(null);
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Error saving post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (post) => {
    setFormData({
      ...post,
      tags: post.tags ? post.tags.join(', ') : '',
      publishDate: post.publishDate || '',
      status: post.publishDate ? 'published' : 'draft'
    });
    setEditingPost(post);
    setShowForm(true);
  };

  const handleDelete = (postId) => {
    if (window.confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      deletePost(postId);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: '',
      tags: '',
      image: '',
      imageAlt: '',
      author: 'Silahub Team',
      status: 'draft',
      publishDate: '',
      slug: ''
    });
    setShowForm(false);
    setEditingPost(null);
  };

  const quillModules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'align': [] }],
      ['clean']
    ],
  };

  const quillFormats = [
    'header', 'bold', 'italic', 'underline', 'strike',
    'list', 'bullet', 'indent', 'link', 'image', 'video',
    'color', 'background', 'align'
  ];

  const publishedPosts = posts.filter(post => post.publishDate);
  const draftPosts = posts.filter(post => !post.publishDate);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Blog Content Management</h1>
            <p className="text-gray-600">Create, edit, and manage your blog posts</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-flex items-center space-x-2"
          >
            <SafeIcon icon={FiPlus} className="w-5 h-5" />
            <span>New Post</span>
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Posts</p>
                <p className="text-2xl font-bold text-gray-900">{posts.length}</p>
              </div>
              <SafeIcon icon={FiFileText} className="w-8 h-8 text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Published</p>
                <p className="text-2xl font-bold text-green-600">{publishedPosts.length}</p>
              </div>
              <SafeIcon icon={FiEye} className="w-8 h-8 text-green-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Drafts</p>
                <p className="text-2xl font-bold text-yellow-600">{draftPosts.length}</p>
              </div>
              <SafeIcon icon={FiEdit} className="w-8 h-8 text-yellow-500" />
            </div>
          </div>
        </div>

        {/* Blog Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-900">
                    {editingPost ? 'Edit Post' : 'Create New Post'}
                  </h2>
                  <button
                    onClick={resetForm}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <SafeIcon icon={FiX} className="w-6 h-6" />
                  </button>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={handleTitleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      required
                      placeholder="Enter post title"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">URL Slug *</label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.slug}
                        onChange={handleSlugChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent pr-20"
                        required
                        placeholder="my-blog-post-url"
                      />
                      <div className="absolute right-3 top-2 text-gray-400 text-sm">
                        /blog/
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      This will be the URL for your blog post. Use lowercase, hyphens only. Example: my-awesome-post
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Category</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category}>{category}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt *</label>
                  <textarea
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                    placeholder="Brief summary of the post (appears in previews)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tags (comma separated)</label>
                  <input
                    type="text"
                    value={formData.tags}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="SEO, Local Marketing, Calgary (optional)"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image</label>
                  <ImageUpload onImageSelect={handleImageSelect} currentImage={formData.image} />
                  {formData.image && (
                    <div className="mt-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Image Alt Text</label>
                      <input
                        type="text"
                        value={formData.imageAlt}
                        onChange={(e) => setFormData({ ...formData, imageAlt: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Describe the image for accessibility"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Content *</label>
                  <div className="border border-gray-300 rounded-lg overflow-hidden">
                    <ReactQuill
                      value={formData.content}
                      onChange={(content) => setFormData({ ...formData, content })}
                      modules={quillModules}
                      formats={quillFormats}
                      placeholder="Write your blog post content here..."
                      style={{ minHeight: '300px' }}
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">
                    Use the rich text editor above to format your content. You can add headings, lists, links, and images.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="draft">Draft (Save but don't publish)</option>
                      <option value="published">Published (Live on website)</option>
                    </select>
                  </div>

                  {formData.status === 'published' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Publish Date</label>
                      <input
                        type="datetime-local"
                        value={formData.publishDate}
                        onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <p className="text-xs text-gray-500 mt-1">Leave empty to publish immediately</p>
                    </div>
                  )}
                </div>

                <div className="flex justify-end space-x-4 pt-6 border-t">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.title || !formData.content || !formData.category || !formData.slug}
                    className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors inline-flex items-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Saving...</span>
                      </>
                    ) : (
                      <>
                        <SafeIcon icon={FiSave} className="w-4 h-4" />
                        <span>{editingPost ? 'Update Post' : 'Publish Post'}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Posts List */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Published Posts */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Published Posts ({publishedPosts.length})</h2>
              </div>

              {publishedPosts.length === 0 ? (
                <div className="p-12 text-center">
                  <SafeIcon icon={FiFileText} className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-4">No published posts yet.</p>
                  <button
                    onClick={() => setShowForm(true)}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Create your first post →
                  </button>
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {publishedPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="p-6 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-start space-x-4">
                            {post.image && (
                              <img src={post.image} alt={post.title} className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
                            )}
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                {post.title}
                              </h3>
                              <p className="text-gray-600 mb-3 line-clamp-2">
                                {post.excerpt}
                              </p>
                              <div className="flex items-center space-x-4 text-sm text-gray-500">
                                <div className="flex items-center">
                                  <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1" />
                                  {new Date(post.publishDate).toLocaleDateString()}
                                </div>
                                <div className="flex items-center">
                                  <SafeIcon icon={FiTag} className="w-4 h-4 mr-1" />
                                  {post.category}
                                </div>
                                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                                  Published
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <button
                            onClick={() => handleEdit(post)}
                            className="p-2 text-gray-400 hover:text-primary-600 transition-colors"
                            title="Edit post"
                          >
                            <SafeIcon icon={FiEdit} className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(post.id)}
                            className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                            title="Delete post"
                          >
                            <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Drafts Sidebar */}
          <div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Drafts ({draftPosts.length})</h2>
              </div>

              {draftPosts.length === 0 ? (
                <div className="p-6 text-center">
                  <SafeIcon icon={FiEdit} className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">No drafts</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {draftPosts.map((post) => (
                    <div key={post.id} className="p-4">
                      <h4 className="font-medium text-gray-900 mb-1 line-clamp-2">{post.title}</h4>
                      <p className="text-gray-600 text-sm mb-2 line-clamp-1">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-yellow-600 bg-yellow-100 px-2 py-1 rounded-full">
                          Draft
                        </span>
                        <div className="flex space-x-1">
                          <button
                            onClick={() => handleEdit(post)}
                            className="p-1 text-gray-400 hover:text-primary-600 transition-colors"
                          >
                            <SafeIcon icon={FiEdit} className="w-3 h-3" />
                          </button>
                          <button
                            onClick={() => handleDelete(post.id)}
                            className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                          >
                            <SafeIcon icon={FiTrash2} className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 mt-6 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button
                  onClick={() => setShowForm(true)}
                  className="w-full text-left p-3 bg-primary-50 text-primary-700 rounded-lg hover:bg-primary-100 transition-colors flex items-center space-x-2"
                >
                  <SafeIcon icon={FiPlus} className="w-4 h-4" />
                  <span>New Post</span>
                </button>
                <a
                  href="/blog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-left p-3 bg-gray-50 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <SafeIcon icon={FiEye} className="w-4 h-4" />
                  <span>View Blog</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogManager;