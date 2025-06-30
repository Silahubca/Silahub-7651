import React, { createContext, useContext, useState, useEffect } from 'react';

const BlogContext = createContext();

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) {
    throw new Error('useBlog must be used within a BlogProvider');
  }
  return context;
};

export const BlogProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState(['SEO', 'Google Ads', 'Social Media', 'Web Design', 'Marketing Tips']);
  const [isLoading, setIsLoading] = useState(false);

  // Load posts from localStorage on mount
  useEffect(() => {
    const savedPosts = localStorage.getItem('silahub_blog_posts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  // Save posts to localStorage whenever posts change
  useEffect(() => {
    localStorage.setItem('silahub_blog_posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (postData) => {
    const newPost = {
      id: Date.now().toString(),
      ...postData,
      publishDate: postData.publishDate || new Date().toISOString(),
      slug: postData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
      createdAt: new Date().toISOString()
    };
    
    setPosts(prev => [newPost, ...prev]);
    return newPost;
  };

  const updatePost = (postId, updates) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { ...post, ...updates, updatedAt: new Date().toISOString() }
        : post
    ));
  };

  const deletePost = (postId) => {
    setPosts(prev => prev.filter(post => post.id !== postId));
  };

  const getPostBySlug = (slug) => {
    return posts.find(post => post.slug === slug);
  };

  const getPostsByCategory = (category) => {
    return posts.filter(post => post.category === category);
  };

  const value = {
    posts,
    categories,
    isLoading,
    addPost,
    updatePost,
    deletePost,
    getPostBySlug,
    getPostsByCategory
  };

  return (
    <BlogContext.Provider value={value}>
      {children}
    </BlogContext.Provider>
  );
};