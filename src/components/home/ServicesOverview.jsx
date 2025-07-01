import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiSearch, FiTarget, FiFacebook, FiUsers, FiMonitor, FiStar, FiEdit3, FiArrowRight, FiHeart, FiMapPin, FiShield } = FiIcons;

const ServicesOverview = () => {
  const services = [
    {
      icon: FiSearch,
      title: 'Search Engine Optimization',
      description: 'Dominate local search results and get found by customers actively looking for your services.',
      features: [
        'Local SEO',
        'Keyword Research',
        'Technical SEO',
        'Content Optimization'
      ],
      color: 'bg-silahub-primary',
      slug: 'seo-calgary'
    },
    {
      icon: FiTarget,
      title: 'Google Ads Management',
      description: 'Get instant visibility and qualified leads with professionally managed Google Ads campaigns.',
      features: [
        'Campaign Setup',
        'Keyword Bidding',
        'Ad Optimization',
        'Conversion Tracking'
      ],
      color: 'bg-silahub-primary',
      slug: 'google-ads-calgary'
    },
    {
      icon: FiFacebook,
      title: 'Facebook & Social Ads',
      description: 'Reach your ideal customers on Facebook, Instagram, and other social platforms.',
      features: [
        'Audience Targeting',
        'Creative Design',
        'Campaign Management',
        'Performance Tracking'
      ],
      color: 'bg-silahub-primary',
      slug: 'facebook-ads-calgary'
    },
    {
      icon: FiUsers,
      title: 'Social Media Management',
      description: 'Build your brand and engage with customers across all social media platforms.',
      features: [
        'Content Creation',
        'Community Management',
        'Brand Monitoring',
        'Engagement Strategy'
      ],
      color: 'bg-silahub-primary',
      slug: 'social-media-management-calgary'
    },
    {
      icon: FiMonitor,
      title: 'Website Design & Development',
      description: 'Convert more visitors with high-performing, mobile-optimized websites.',
      features: [
        'Responsive Design',
        'SEO Optimized',
        'Fast Loading',
        'Lead Generation Focus'
      ],
      color: 'bg-silahub-primary',
      slug: 'web-design-calgary'
    },
    {
      icon: FiStar,
      title: 'Reputation Management',
      description: 'Build trust and credibility with professional online reputation management.',
      features: [
        'Review Monitoring',
        'Response Management',
        'Rating Improvement',
        'Brand Protection'
      ],
      color: 'bg-silahub-primary',
      slug: 'reputation-management-calgary'
    },
    {
      icon: FiEdit3,
      title: 'Content Marketing',
      description: 'Attract and engage customers with valuable content that drives leads and builds authority.',
      features: [
        'Blog Writing',
        'Video Content',
        'Email Marketing',
        'Content Strategy'
      ],
      color: 'bg-silahub-primary',
      slug: 'content-marketing-calgary'
    },
    {
      icon: FiHeart,
      title: 'Branding Services',
      description: 'Create a memorable brand identity that sets your business apart from competitors.',
      features: [
        'Logo Design',
        'Brand Guidelines',
        'Marketing Materials',
        'Brand Strategy'
      ],
      color: 'bg-silahub-primary',
      slug: 'branding-service'
    },
    {
      icon: FiMapPin,
      title: 'Google Maps SEO',
      description: 'Dominate Google Maps and local search with Google My Business optimization.',
      features: [
        'GMB Optimization',
        'Local Citations',
        'Review Management',
        'Map Rankings'
      ],
      color: 'bg-silahub-primary',
      slug: 'google-maps-seo'
    },
    {
      icon: FiShield,
      title: 'Google Local Service Ads',
      description: 'Get Google Screened and appear at the top of search results with Local Service Ads.',
      features: [
        'Google Screened',
        'Top Placement',
        'Pay Per Lead',
        'Lead Management'
      ],
      color: 'bg-silahub-primary',
      slug: 'google-local-service-ads'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Complete Digital Marketing Solutions
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital marketing services designed specifically for home service businesses and contractors to help you grow your business online.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6 lg:p-8">
                {/* Icon */}
                <div className={`w-12 lg:w-16 h-12 lg:h-16 ${service.color} rounded-lg flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <SafeIcon icon={service.icon} className="w-6 lg:w-8 h-6 lg:h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 lg:mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 lg:mb-6 text-sm lg:text-base">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-4 lg:mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-1.5 h-1.5 bg-silahub-primary rounded-full mr-2 lg:mr-3 flex-shrink-0"></div>
                      <span className="text-xs lg:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <Link
                  to={`/services/${service.slug}`}
                  className="text-silahub-primary font-medium hover:text-primary-700 transition-colors inline-flex items-center space-x-2 text-sm lg:text-base"
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
          <div className="bg-silahub-primary rounded-2xl p-6 lg:p-8 text-white">
            <h3 className="text-xl lg:text-2xl font-bold mb-4">
              Ready to Grow Your Business?
            </h3>
            <p className="text-lg mb-6 text-silahub-secondary">
              Get a free marketing audit and discover how we can help you dominate your local market.
            </p>
            <Link
              to="/contact"
              className="bg-white text-silahub-primary px-6 lg:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Get Your Free Audit</span>
              <SafeIcon icon={FiArrowRight} className="w-4 lg:w-5 h-4 lg:h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesOverview;