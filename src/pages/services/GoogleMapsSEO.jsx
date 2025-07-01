import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import LeadCaptureForm from '../../components/leads/LeadCaptureForm';

const { FiMapPin, FiStar, FiSearch, FiTrendingUp, FiCheck, FiArrowRight, FiEye } = FiIcons;

const GoogleMapsSEO = () => {
  React.useEffect(() => {
    document.title = 'Google Maps SEO Calgary | Google My Business Optimization - Silahub Technologies';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional Google Maps SEO and Google My Business optimization in Calgary. Dominate local search results and Google Maps for home service businesses.');
    }
  }, []);

  const gmbServices = [
    {
      icon: FiMapPin,
      title: 'Google My Business Optimization',
      description: 'Complete optimization of your GMB profile for maximum visibility',
      features: [
        'Profile setup & verification',
        'Business information optimization',
        'Category selection & keywords',
        'Photo & video optimization'
      ]
    },
    {
      icon: FiStar,
      title: 'Review Management',
      description: 'Strategic review acquisition and management',
      features: [
        'Review generation campaigns',
        'Review response management',
        'Rating improvement strategies',
        'Review monitoring & alerts'
      ]
    },
    {
      icon: FiSearch,
      title: 'Local Citation Building',
      description: 'Build consistent citations across local directories',
      features: [
        'Local directory submissions',
        'NAP consistency audits',
        'Citation cleanup & corrections',
        'Industry-specific listings'
      ]
    },
    {
      icon: FiTrendingUp,
      title: 'Local Ranking Optimization',
      description: 'Advanced strategies to improve local search rankings',
      features: [
        'Local keyword optimization',
        'Google Posts creation',
        'Q&A optimization',
        'Local link building'
      ]
    }
  ];

  const gmbFeatures = [
    {
      feature: 'Google My Business Profile Setup',
      description: 'Complete optimization of your GMB profile with all relevant business information.'
    },
    {
      feature: 'Local Keyword Research',
      description: 'Identify the best local keywords for your Calgary business to target.'
    },
    {
      feature: 'Review Generation System',
      description: 'Automated systems to generate positive reviews from satisfied customers.'
    },
    {
      feature: 'Google Posts Management',
      description: 'Regular posting of updates, offers, and news to keep your profile active.'
    },
    {
      feature: 'Photo & Video Optimization',
      description: 'High-quality visual content that showcases your work and business.'
    },
    {
      feature: 'Local Citation Management',
      description: 'Ensure consistent business information across all online directories.'
    }
  ];

  const faqs = [
    {
      question: "What is Google My Business and why is it important?",
      answer: "Google My Business (GMB) is a free tool that allows businesses to manage their online presence across Google Search and Google Maps. It's crucial for local businesses because it directly impacts your visibility when customers search for services in your area."
    },
    {
      question: "How long does it take to see results from GMB optimization?",
      answer: "You can see initial improvements within 2-4 weeks, with significant ranking improvements typically occurring within 2-3 months. Review generation and profile optimization show faster results than ranking improvements."
    },
    {
      question: "Do you help with Google My Business verification?",
      answer: "Yes, we assist with the entire GMB verification process, including handling verification issues, re-verification for suspended profiles, and ensuring your business meets all of Google's guidelines."
    },
    {
      question: "How many reviews do I need to rank well locally?",
      answer: "While there's no magic number, businesses with 15+ recent, positive reviews typically perform better. However, review quality, recency, and response rates are often more important than quantity alone."
    },
    {
      question: "What's the difference between GMB optimization and regular SEO?",
      answer: "GMB optimization focuses specifically on local search factors like proximity, prominence, and relevance in Google Maps results. Regular SEO targets broader search rankings. Both work together for complete local visibility."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6 lg:space-y-8"
            >
              <div>
                <div className="inline-flex items-center space-x-2 bg-silahub-secondary text-silahub-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                  <span>Dominate Local Search</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 lg:mb-6">
                  Google Maps SEO Calgary - 
                  <span className="text-silahub-primary"> Google My Business Optimization</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Dominate Google Maps and local search results with professional Google My Business optimization. Get found by customers searching for home services in Calgary.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-4 lg:w-5 h-4 lg:h-5 text-green-500" />
                  <span className="text-sm lg:text-base text-gray-700">GMB optimization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-4 lg:w-5 h-4 lg:h-5 text-green-500" />
                  <span className="text-sm lg:text-base text-gray-700">Review management</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-4 lg:w-5 h-4 lg:h-5 text-green-500" />
                  <span className="text-sm lg:text-base text-gray-700">Local citations</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-4 lg:w-5 h-4 lg:h-5 text-green-500" />
                  <span className="text-sm lg:text-base text-gray-700">Maps ranking</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-silahub-primary text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>Get GMB Audit</span>
                  <SafeIcon icon={FiArrowRight} className="w-4 lg:w-5 h-4 lg:h-5" />
                </Link>
                <Link
                  to="/case-studies"
                  className="border-2 border-gray-300 text-gray-700 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold hover:border-silahub-primary hover:text-silahub-primary transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>View GMB Results</span>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                    Free Google My Business Audit
                  </h3>
                  <p className="text-gray-600">
                    See how to improve your local visibility
                  </p>
                </div>
                <LeadCaptureForm
                  source="google-maps-seo-calgary-page"
                  ctaText="Get My GMB Audit"
                  className="space-y-4"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Complete Google My Business Services
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              From profile optimization to review management, we handle every aspect of your Google My Business presence to maximize local visibility.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {gmbServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-silahub-primary text-white p-3 rounded-lg flex-shrink-0">
                    <SafeIcon icon={service.icon} className="w-5 lg:w-6 h-5 lg:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm lg:text-base">{feature}</span>
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

      {/* Features */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              What's Included in Our GMB Optimization
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {gmbFeatures.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.feature}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Google Maps SEO Frequently Asked Questions
            </h2>
          </motion.div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-silahub-primary to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Ready to Dominate Google Maps?
            </h2>
            <p className="text-lg lg:text-xl text-silahub-light mb-8">
              Professional Google My Business optimization that gets you found by local customers.
            </p>
            <Link
              to="/contact"
              className="bg-white text-silahub-primary px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Start GMB Optimization</span>
              <SafeIcon icon={FiArrowRight} className="w-4 lg:w-5 h-4 lg:h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GoogleMapsSEO;