import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import { useBlog } from '../contexts/BlogContext';

const { FiCalendar, FiUser, FiArrowLeft, FiShare2, FiFacebook, FiTwitter, FiLinkedin, FiTag } = FiIcons;

const BlogPost = () => {
  const { slug } = useParams();
  const { getPostBySlug, posts } = useBlog();

  // Set page title and meta description
  React.useEffect(() => {
    document.title = 'Blog Post | Silahub Technologies Blog';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Read our latest blog post about digital marketing strategies for home service businesses.');
    }
  }, []);

  // Try to get post from context first, then fallback to sample data
  let post = getPostBySlug(slug);

  // Sample blog post data if not found in context
  if (!post) {
    const samplePosts = {
      'local-seo-tips-calgary-home-services': {
        title: '10 Local SEO Tips for Home Service Businesses in Calgary',
        excerpt: 'Discover the essential local SEO strategies that will help your home service business dominate Calgary search results and attract more qualified leads.',
        content: `
          <p>Local SEO is crucial for home service businesses in Calgary. When potential customers search for services like "plumber near me" or "HVAC repair Calgary," you want your business to appear at the top of search results.</p>
          
          <h2>1. Optimize Your Google My Business Profile</h2>
          <p>Your Google My Business (GMB) profile is the foundation of local SEO. Ensure all information is accurate, complete, and regularly updated.</p>
          
          <h2>2. Collect and Manage Customer Reviews</h2>
          <p>Reviews are a major ranking factor for local search. Actively encourage satisfied customers to leave reviews and respond professionally to all feedback.</p>
          
          <h2>3. Use Location-Specific Keywords</h2>
          <p>Include Calgary and surrounding area names in your website content, meta descriptions, and title tags.</p>
          
          <h2>4. Create Location-Specific Landing Pages</h2>
          <p>If you serve multiple areas, create dedicated landing pages for each location you serve.</p>
          
          <h2>5. Build Local Citations</h2>
          <p>Ensure your business information is consistent across all local directories and citation sources.</p>
          
          <h2>6. Target Calgary-Specific Keywords</h2>
          <p>Focus on keywords that include "Calgary" and specific neighborhoods you serve.</p>
          
          <h2>7. Create Local Content</h2>
          <p>Write blog posts about local events, Calgary weather impacts on your services, and community involvement.</p>
          
          <h2>8. Optimize for Mobile</h2>
          <p>Most local searches happen on mobile devices. Ensure your website is mobile-friendly and loads quickly.</p>
          
          <h2>9. Use Schema Markup</h2>
          <p>Implement local business schema markup to help search engines understand your business information.</p>
          
          <h2>10. Monitor and Track Results</h2>
          <p>Use Google Analytics and Google Search Console to track your local SEO performance and make improvements.</p>
        `,
        author: 'Silahub Team',
        publishDate: '2024-01-15',
        category: 'SEO',
        tags: ['Local SEO', 'Calgary', 'Home Services'],
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop',
        readTime: '8 min read'
      },
      'high-converting-google-ads-contractors': {
        title: 'How to Create High-Converting Google Ads for Contractors',
        excerpt: 'Learn the secrets to writing Google Ads that convert browsers into customers. Get insider tips on keywords, ad copy, and landing pages.',
        content: `
          <p>Creating high-converting Google Ads for contractors requires understanding your audience, crafting compelling ad copy, and optimizing your campaigns for maximum ROI.</p>
          
          <h2>Understanding Your Target Audience</h2>
          <p>Before creating any ads, you need to understand who your ideal customers are and what problems they're trying to solve.</p>
          
          <h2>Keyword Research for Contractors</h2>
          <p>Focus on high-intent keywords that indicate someone is ready to hire a contractor.</p>
          
          <h2>Writing Compelling Ad Copy</h2>
          <p>Your ad copy should be clear, benefit-focused, and include a strong call-to-action.</p>
          
          <h2>Landing Page Optimization</h2>
          <p>Ensure your landing pages match your ad copy and are optimized for conversions.</p>
        `,
        author: 'Silahub Team',
        publishDate: '2024-01-10',
        category: 'Google Ads',
        tags: ['Google Ads', 'PPC', 'Contractors'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
        readTime: '6 min read'
      },
      'facebook-ads-guide-home-services': {
        title: 'The Ultimate Guide to Facebook Ads for Home Service Businesses',
        excerpt: 'Facebook advertising can be a goldmine for home service businesses. Learn how to target the right audience and create ads that generate quality leads.',
        content: `
          <p>Facebook advertising offers home service businesses unique opportunities to reach local customers with targeted messaging.</p>
          
          <h2>Setting Up Your Facebook Business Manager</h2>
          <p>Start with a proper foundation by setting up your Facebook Business Manager account correctly.</p>
          
          <h2>Audience Targeting Strategies</h2>
          <p>Learn how to target homeowners in your service area who are most likely to need your services.</p>
          
          <h2>Creating Compelling Ad Creative</h2>
          <p>Visual content is key on Facebook. Learn how to create ads that stop the scroll.</p>
          
          <h2>Campaign Types and Objectives</h2>
          <p>Understand which campaign objectives work best for home service businesses.</p>
        `,
        author: 'Silahub Team',
        publishDate: '2024-01-05',
        category: 'Social Media',
        tags: ['Facebook Ads', 'Social Media', 'Lead Generation'],
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop',
        readTime: '10 min read'
      }
    };

    post = samplePosts[slug];
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-primary-600 hover:text-primary-700">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts
  const getRelatedPosts = () => {
    const allPosts = posts.length > 0 ? posts : [
      {
        id: 1,
        title: 'How to Create High-Converting Google Ads for Contractors',
        slug: 'high-converting-google-ads-contractors',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop',
        category: 'Google Ads'
      },
      {
        id: 2,
        title: 'The Ultimate Guide to Facebook Ads for Home Services',
        slug: 'facebook-ads-guide-home-services',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop',
        category: 'Social Media'
      },
      {
        id: 3,
        title: '10 Local SEO Tips for Home Service Businesses in Calgary',
        slug: 'local-seo-tips-calgary-home-services',
        image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop',
        category: 'SEO'
      }
    ];

    // Filter out current post and return 2 related posts
    return allPosts
      .filter(p => p.slug !== slug)
      .slice(0, 2);
  };

  const relatedPosts = getRelatedPosts();

  return (
    <>
      <article className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Blog */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              <SafeIcon icon={FiArrowLeft} className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="mb-4">
              <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            <div className="flex items-center justify-between border-b border-gray-200 pb-6">
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center">
                  <SafeIcon icon={FiUser} className="w-4 h-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-2" />
                  <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                </div>
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gray-600 text-sm">Share:</span>
                <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                  <SafeIcon icon={FiFacebook} className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                  <SafeIcon icon={FiTwitter} className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary-600 transition-colors">
                  <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.header>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 lg:h-96 object-cover rounded-xl"
            />
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          {post.tags && (
            <div className="flex flex-wrap gap-2 mb-12 pb-8 border-b border-gray-200">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  <SafeIcon icon={FiTag} className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/blog/${relatedPost.slug}`}
                    className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                  >
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      {relatedPost.category && (
                        <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded-full text-xs font-medium mb-3 inline-block">
                          {relatedPost.category}
                        </span>
                      )}
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Implement These Strategies?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let our experts help you dominate local search results and grow your business.
          </p>
          <Link
            to="/contact"
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Your Free Audit
          </Link>
        </div>
      </section>
    </>
  );
};

export default BlogPost;