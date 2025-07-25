import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import LeadCaptureForm from '../../components/leads/LeadCaptureForm';

const { FiUsers, FiMessageCircle, FiCalendar, FiTrendingUp, FiCheck, FiArrowRight, FiStar } = FiIcons;

const SocialMediaManagementCalgary = () => {
  React.useEffect(() => {
    document.title = 'Social Media Management Calgary | Social Media Marketing Services - Silahub Technologies';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional social media management in Calgary. Build your brand, engage customers, and grow your home service business with expert social media marketing.');
    }
  }, []);

  const socialMediaServices = [
    {
      icon: FiCalendar,
      title: 'Content Creation & Scheduling',
      description: 'Consistent, professional content across all platforms',
      features: [
        'Custom content creation',
        'Automated scheduling',
        'Platform-specific optimization',
        'Visual design & graphics'
      ]
    },
    {
      icon: FiMessageCircle,
      title: 'Community Management',
      description: 'Engage with your audience and build relationships',
      features: [
        'Comment management',
        'Direct message responses',
        'Customer service support',
        'Reputation monitoring'
      ]
    },
    {
      icon: FiTrendingUp,
      title: 'Social Media Strategy',
      description: 'Data-driven strategies that grow your following',
      features: [
        'Platform-specific strategies',
        'Hashtag research & optimization',
        'Competitor analysis',
        'Growth optimization'
      ]
    },
    {
      icon: FiStar,
      title: 'Performance Analytics',
      description: 'Track and measure your social media success',
      features: [
        'Monthly performance reports',
        'Engagement analytics',
        'Follower growth tracking',
        'ROI measurement'
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center space-x-2 bg-silahub-secondary text-silahub-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <SafeIcon icon={FiUsers} className="w-4 h-4" />
                  <span>Build Your Community</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Social Media Management Calgary - <span className="text-silahub-primary">Engage & Grow</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Build your brand presence and engage with Calgary customers across all social media platforms. 
                  Professional social media management that grows your following and generates leads.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Consistent posting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Professional content</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Community engagement</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Brand building</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-silahub-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>Get Social Media Strategy</span>
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                </Link>
                <Link
                  to="/case-studies"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-silahub-primary hover:text-silahub-primary transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>View Social Results</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Free Social Media Audit
                  </h3>
                  <p className="text-gray-600">
                    See how to improve your social presence
                  </p>
                </div>
                <LeadCaptureForm 
                  source="social-media-management-calgary-page"
                  ctaText="Get My Social Media Audit"
                  className="space-y-4"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Social Media Management
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From content creation to community management, we handle every aspect of your social media 
              presence so you can focus on running your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {socialMediaServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-silahub-primary text-white p-3 rounded-lg">
                    <SafeIcon icon={service.icon} className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-silahub-primary to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Build Your Social Presence?
            </h2>
            <p className="text-xl text-silahub-light mb-8">
              Professional social media management that engages customers and grows your business.
            </p>
            <Link
              to="/contact"
              className="bg-white text-silahub-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Start Your Social Strategy</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SocialMediaManagementCalgary;