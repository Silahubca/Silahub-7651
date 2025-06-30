import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import LeadCaptureForm from '../../components/leads/LeadCaptureForm';

const { FiStar, FiShield, FiEye, FiTrendingUp, FiCheck, FiArrowRight, FiHeart } = FiIcons;

const ReputationManagementCalgary = () => {
  React.useEffect(() => {
    document.title = 'Reputation Management Calgary | Online Reputation Services - Silahub Technologies';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional reputation management in Calgary. Monitor, manage and improve your online reputation. Build trust with customers through expert review management services.');
    }
  }, []);

  const reputationServices = [
    {
      icon: FiEye,
      title: 'Review Monitoring',
      description: 'Stay on top of what customers are saying about your business',
      features: [
        '24/7 review monitoring',
        'Multi-platform tracking',
        'Real-time notifications',
        'Competitor monitoring'
      ]
    },
    {
      icon: FiStar,
      title: 'Review Response Management',
      description: 'Professional responses to all customer reviews',
      features: [
        'Timely response to reviews',
        'Professional tone & messaging',
        'Crisis response protocols',
        'Review engagement strategy'
      ]
    },
    {
      icon: FiTrendingUp,
      title: 'Rating Improvement',
      description: 'Strategic campaigns to improve your overall rating',
      features: [
        'Review generation campaigns',
        'Customer feedback systems',
        'Service improvement insights',
        'Rating recovery strategies'
      ]
    },
    {
      icon: FiShield,
      title: 'Brand Protection',
      description: 'Protect your brand from negative content and attacks',
      features: [
        'Negative content suppression',
        'Brand mention monitoring',
        'Crisis management',
        'Online reputation repair'
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
                  <SafeIcon icon={FiHeart} className="w-4 h-4" />
                  <span>Build Trust & Credibility</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Reputation Management Calgary - <span className="text-silahub-primary">Protect Your Brand</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Build trust and credibility with professional online reputation management. 
                  Monitor reviews, respond professionally, and improve your Calgary business reputation.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Review monitoring</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Professional responses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Rating improvement</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Brand protection</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-silahub-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>Get Reputation Audit</span>
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                </Link>
                <Link
                  to="/case-studies"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-silahub-primary hover:text-silahub-primary transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>View Success Stories</span>
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
                    Free Reputation Audit
                  </h3>
                  <p className="text-gray-600">
                    See what customers are saying about your business
                  </p>
                </div>
                <LeadCaptureForm 
                  source="reputation-management-calgary-page"
                  ctaText="Get My Reputation Audit"
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
              Complete Reputation Management Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From monitoring reviews to crisis management, we protect and enhance your online reputation 
              to build trust with Calgary customers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {reputationServices.map((service, index) => (
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
              Ready to Protect Your Reputation?
            </h2>
            <p className="text-xl text-silahub-light mb-8">
              Professional reputation management that builds trust and credibility with Calgary customers.
            </p>
            <Link
              to="/contact"
              className="bg-white text-silahub-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Start Reputation Management</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ReputationManagementCalgary;