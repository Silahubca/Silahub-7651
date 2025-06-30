import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import ImageUpload from '../../components/admin/ImageUpload';
import { useBlog } from '../../contexts/BlogContext';

const { FiPlus, FiEdit, FiTrash2, FiEye, FiCalendar, FiTag, FiFileText } = FiIcons;

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
    author: 'Silahub Team'
  });

  const handleImageSelect = (imageData) => {
    if (imageData) {
      setFormData({
        ...formData,
        image: imageData.url,
        imageAlt: imageData.alt || ''
      });
    } else {
      setFormData({
        ...formData,
        image: '',
        imageAlt: ''
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const postData = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
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
      author: 'Silahub Team'
    });
    setShowForm(false);
    setEditingPost(null);
  };

  const handleEdit = (post) => {
    setFormData({
      ...post,
      tags: post.tags ? post.tags.join(', ') : ''
    });
    setEditingPost(post);
    setShowForm(true);
  };

  const handleDelete = (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
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
      author: 'Silahub Team'
    });
    setShowForm(false);
    setEditingPost(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Blog Manager</h1>
            <p className="text-gray-600">Create and manage blog posts</p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-flex items-center space-x-2"
          >
            <SafeIcon icon={FiPlus} className="w-5 h-5" />
            <span>New Post</span>
          </button>
        </div>

        {/* Blog Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">
                  {editingPost ? 'Edit Post' : 'Create New Post'}
                </h2>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Featured Image</label>
                  <ImageUpload
                    onImageSelect={handleImageSelect}
                    currentImage={formData.image}
                  />
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
                  <textarea
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Tags (comma separated)</label>
                    <input
                      type="text"
                      value={formData.tags}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="SEO, Calgary, Tips"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
                  <textarea
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    rows={12}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Write your blog post content here..."
                    required
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    You can use HTML tags for formatting (h2, h3, p, strong, em, ul, li, etc.)
                  </p>
                </div>

                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    {editingPost ? 'Update Post' : 'Publish Post'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Posts List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">All Posts ({posts.length})</h2>
          </div>
          
          {posts.length === 0 ? (
            <div className="p-12 text-center">
              <SafeIcon icon={FiFileText} className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No blog posts yet. Create your first post!</p>
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-start space-x-4">
                        {post.image && (
                          <img
                            src={post.image}
                            alt={post.imageAlt || post.title}
                            className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                          />
                        )}
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-3 line-clamp-2">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1" />
                              {new Date(post.publishDate || post.createdAt).toLocaleDateString()}
                            </div>
                            <div className="flex items-center">
                              <SafeIcon icon={FiTag} className="w-4 h-4 mr-1" />
                              {post.category}
                            </div>
                            {post.tags && (
                              <div className="flex space-x-1">
                                {post.tags.slice(0, 2).map((tag, tagIndex) => (
                                  <span
                                    key={tagIndex}
                                    className="bg-gray-100 px-2 py-1 rounded text-xs"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={() => handleEdit(post)}
                        className="p-2 text-gray-400 hover:text-primary-600 transition-colors"
                      >
                        <SafeIcon icon={FiEdit} className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="p-2 text-gray-400 hover:text-red-600 transition-colors"
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
    </div>
  );
};

export default BlogManager;