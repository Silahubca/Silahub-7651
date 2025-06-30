import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useBlog } from '../contexts/BlogContext';

const { FiCalendar, FiUser, FiArrowRight, FiTag } = FiIcons;

const Blog = () => {
  // Set page title and meta description
  React.useEffect(() => {
    document.title = 'Digital Marketing Blog - Tips & Strategies for Home Service Businesses | Silahub';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get expert digital marketing tips, SEO strategies, and growth advice for home service businesses. Latest insights from Calgary\'s top marketing agency.');
    }
  }, []);

  const { posts } = useBlog();

  // Sample blog posts for demo
  const samplePosts = [
    {
      id: 1,
      title: '10 Local SEO Tips for Home Service Businesses in Calgary',
      excerpt: 'Discover the essential local SEO strategies that will help your home service business dominate Calgary search results and attract more qualified leads.',
      content: '',
      author: 'Silahub Team',
      publishDate: '2024-01-15',
      category: 'SEO',
      tags: ['Local SEO', 'Calgary', 'Home Services'],
      slug: 'local-seo-tips-calgary-home-services',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=300&fit=crop',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'How to Create High-Converting Google Ads for Contractors',
      excerpt: 'Learn the secrets to writing Google Ads that convert browsers into customers. Get insider tips on keywords, ad copy, and landing pages.',
      content: '',
      author: 'Silahub Team',
      publishDate: '2024-01-10',
      category: 'Google Ads',
      tags: ['Google Ads', 'PPC', 'Contractors'],
      slug: 'high-converting-google-ads-contractors',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'The Ultimate Guide to Facebook Ads for Home Service Businesses',
      excerpt: 'Facebook advertising can be a goldmine for home service businesses. Learn how to target the right audience and create ads that generate quality leads.',
      content: '',
      author: 'Silahub Team',
      publishDate: '2024-01-05',
      category: 'Social Media',
      tags: ['Facebook Ads', 'Social Media', 'Lead Generation'],
      slug: 'facebook-ads-guide-home-services',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop',
      readTime: '10 min read'
    }
  ];

  const displayPosts = posts.length > 0 ? posts : samplePosts;
  const categories = ['All', 'SEO', 'Google Ads', 'Social Media', 'Web Design', 'Marketing Tips'];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Digital Marketing Insights
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Expert tips, strategies, and insights to help your home service business grow online. 
            Stay updated with the latest digital marketing trends and tactics that work.
          </motion.p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-primary-100 hover:text-primary-700 text-gray-600"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {displayPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-2" />
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <SafeIcon icon={FiUser} className="w-4 h-4 mr-2" />
                      <span>{post.author}</span>
                    </div>

                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center space-x-1 transition-colors"
                    >
                      <span>Read More</span>
                      <SafeIcon icon={FiArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Tags */}
                  {post.tags && (
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                      {post.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                        >
                          <SafeIcon icon={FiTag} className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Stay Updated with Marketing Tips
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get the latest digital marketing strategies and tips delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-primary-100 text-sm mt-4">
              No spam. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Blog;