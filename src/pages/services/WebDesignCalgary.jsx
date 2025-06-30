import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import LeadCaptureForm from '../../components/leads/LeadCaptureForm';

const { FiMonitor, FiSmartphone, FiZap, FiSearch, FiCheck, FiArrowRight, FiCode } = FiIcons;

const WebDesignCalgary = () => {
  React.useEffect(() => {
    document.title = 'Web Design Calgary | Website Development Services - Silahub Technologies';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional web design Calgary services for home service businesses. Mobile-responsive, SEO-optimized websites that convert visitors into customers. Get a quote today.');
    }
  }, []);

  const webDesignServices = [
    {
      icon: FiMonitor,
      title: 'Responsive Web Design',
      description: 'Beautiful websites that work perfectly on all devices',
      features: [
        'Mobile-first design approach',
        'Cross-browser compatibility',
        'Professional visual design',
        'User experience optimization'
      ]
    },
    {
      icon: FiSearch,
      title: 'SEO-Optimized Development',
      description: 'Built for search engines from day one',
      features: [
        'SEO-friendly code structure',
        'Fast loading speeds',
        'Schema markup implementation',
        'Local SEO optimization'
      ]
    },
    {
      icon: FiZap,
      title: 'Lead Generation Focus',
      description: 'Designed to convert visitors into customers',
      features: [
        'Strategic call-to-action placement',
        'Lead capture forms',
        'Contact form optimization',
        'Conversion tracking setup'
      ]
    },
    {
      icon: FiSmartphone,
      title: 'Mobile Optimization',
      description: 'Perfect experience on smartphones and tablets',
      features: [
        'Mobile-responsive design',
        'Touch-friendly navigation',
        'Fast mobile loading',
        'Mobile conversion optimization'
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
                  <SafeIcon icon={FiCode} className="w-4 h-4" />
                  <span>Convert More Customers</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Web Design Calgary - <span className="text-silahub-primary">Professional Websites</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Get a professional, mobile-optimized website that converts visitors into customers. 
                  Our Calgary web design services focus on lead generation and user experience for home service businesses.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Mobile-responsive</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">SEO-optimized</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Fast loading</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Lead generation focused</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-silahub-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>Get Website Quote</span>
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                </Link>
                <Link
                  to="/case-studies"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-silahub-primary hover:text-silahub-primary transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>View Our Work</span>
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
                    Free Website Consultation
                  </h3>
                  <p className="text-gray-600">
                    Get a custom quote for your new website
                  </p>
                </div>
                <LeadCaptureForm 
                  source="web-design-calgary-page"
                  ctaText="Get My Website Quote"
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
              Professional Web Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We create websites that not only look great but also convert visitors into customers. 
              Every website is built with your business goals in mind.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {webDesignServices.map((service, index) => (
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
              Ready for a Website That Converts?
            </h2>
            <p className="text-xl text-silahub-light mb-8">
              Professional web design that turns visitors into customers for your Calgary business.
            </p>
            <Link
              to="/contact"
              className="bg-white text-silahub-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Start Your Website Project</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WebDesignCalgary;