import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiSearch, FiTarget, FiFacebook, FiUsers, FiMonitor, FiStar, FiEdit3, FiArrowRight } = FiIcons;

const ServicesOverview = () => {
  const services = [
    {
      icon: FiSearch,
      title: 'Search Engine Optimization',
      description: 'Dominate local search results and get found by customers actively looking for your services.',
      features: ['Local SEO', 'Keyword Research', 'Technical SEO', 'Content Optimization'],
      color: 'from-green-500 to-emerald-600',
      slug: 'seo-calgary'
    },
    {
      icon: FiTarget,
      title: 'Google Ads Management',
      description: 'Get instant visibility and qualified leads with professionally managed Google Ads campaigns.',
      features: ['Campaign Setup', 'Keyword Bidding', 'Ad Optimization', 'Conversion Tracking'],
      color: 'from-blue-500 to-primary-600',
      slug: 'google-ads-calgary'
    },
    {
      icon: FiFacebook,
      title: 'Facebook & Social Ads',
      description: 'Reach your ideal customers on Facebook, Instagram, and other social platforms.',
      features: ['Audience Targeting', 'Creative Design', 'Campaign Management', 'Performance Tracking'],
      color: 'from-purple-500 to-pink-600',
      slug: 'facebook-ads-calgary'
    },
    {
      icon: FiUsers,
      title: 'Social Media Management',
      description: 'Build your brand and engage with customers across all social media platforms.',
      features: ['Content Creation', 'Community Management', 'Brand Monitoring', 'Engagement Strategy'],
      color: 'from-orange-500 to-red-600',
      slug: 'social-media-management-calgary'
    },
    {
      icon: FiMonitor,
      title: 'Website Design & Development',
      description: 'Convert more visitors with high-performing, mobile-optimized websites.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Lead Generation Focus'],
      color: 'from-teal-500 to-cyan-600',
      slug: 'web-design-calgary'
    },
    {
      icon: FiStar,
      title: 'Reputation Management',
      description: 'Build trust and credibility with professional online reputation management.',
      features: ['Review Monitoring', 'Response Management', 'Rating Improvement', 'Brand Protection'],
      color: 'from-yellow-500 to-orange-600',
      slug: 'reputation-management-calgary'
    },
    {
      icon: FiEdit3,
      title: 'Content Marketing',
      description: 'Attract and engage customers with valuable content that drives leads and builds authority.',
      features: ['Blog Writing', 'Video Content', 'Email Marketing', 'Content Strategy'],
      color: 'from-indigo-500 to-purple-600',
      slug: 'content-marketing-calgary'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Complete Digital Marketing Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital marketing services designed specifically for home service 
            businesses and contractors to help you grow your business online.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <Link
                  to={`/services/${service.slug}`}
                  className="text-primary-600 font-medium hover:text-primary-700 transition-colors inline-flex items-center space-x-2"
                >
                  <span>Learn More</span>
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Grow Your Business?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get a free marketing audit and discover how we can help you dominate your local market.
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Get Your Free Audit</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;