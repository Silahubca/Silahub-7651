import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import LeadCaptureForm from '../../components/leads/LeadCaptureForm';

const { FiShield, FiPhone, FiStar, FiTrendingUp, FiCheck, FiArrowRight, FiTarget } = FiIcons;

const GoogleLocalServiceAds = () => {
  React.useEffect(() => {
    document.title = 'Google Local Service Ads Calgary | Google Screened Ads - Silahub Technologies';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Google Local Service Ads management in Calgary. Get Google Screened verification and appear at the top of local search results for home service businesses.');
    }
  }, []);

  const lsaServices = [
    {
      icon: FiShield,
      title: 'Google Screened Verification',
      description: 'Get verified and earn the Google Screened badge',
      features: [
        'Background check assistance',
        'License verification',
        'Insurance documentation',
        'Business verification process'
      ]
    },
    {
      icon: FiPhone,
      title: 'Lead Management System',
      description: 'Professional management of incoming LSA leads',
      features: [
        'Lead response optimization',
        'Call tracking & recording',
        'Lead qualification process',
        'Follow-up automation'
      ]
    },
    {
      icon: FiStar,
      title: 'Review & Reputation Management',
      description: 'Maintain excellent ratings for better visibility',
      features: [
        'Review generation campaigns',
        'Review response management',
        'Rating improvement strategies',
        'Reputation monitoring'
      ]
    },
    {
      icon: FiTrendingUp,
      title: 'Performance Optimization',
      description: 'Maximize ROI from your Local Service Ads',
      features: [
        'Budget optimization',
        'Service area adjustments',
        'Bid management',
        'Performance reporting'
      ]
    }
  ];

  const lsaBenefits = [
    {
      title: 'Top of Search Results',
      description: 'Appear above traditional Google Ads and organic results'
    },
    {
      title: 'Pay Per Lead',
      description: 'Only pay for qualified leads, not clicks or impressions'
    },
    {
      title: 'Google Screened Badge',
      description: 'Build trust with the Google Screened verification badge'
    },
    {
      title: 'Local Service Focus',
      description: 'Specifically designed for local home service businesses'
    },
    {
      title: 'Mobile-First Design',
      description: 'Optimized for mobile users searching for immediate help'
    },
    {
      title: 'Dispute Protection',
      description: 'Google provides dispute resolution for invalid leads'
    }
  ];

  const faqs = [
    {
      question: "What are Google Local Service Ads?",
      answer: "Google Local Service Ads (LSAs) are a special type of ad that appears at the very top of Google search results for local service searches. They feature your business name, rating, phone number, and the Google Screened badge if you're verified."
    },
    {
      question: "How much do Google Local Service Ads cost?",
      answer: "You pay per lead, not per click. Costs vary by service type and location, typically ranging from $15-50 per lead in Calgary. You set your weekly budget and can adjust it anytime."
    },
    {
      question: "What is Google Screened and how do I get it?",
      answer: "Google Screened is a verification program that includes background checks, license verification, and insurance checks. We help you through the entire application process to earn this trust badge."
    },
    {
      question: "Which businesses are eligible for Local Service Ads?",
      answer: "Currently available for plumbers, electricians, HVAC technicians, locksmiths, garage door services, house cleaners, handymen, and several other home service categories in Calgary."
    },
    {
      question: "How quickly can I start getting leads?",
      answer: "Once your Google Screened verification is approved (typically 5-10 business days), you can start receiving leads immediately. The verification process is where we provide the most assistance."
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
                  <SafeIcon icon={FiShield} className="w-4 h-4" />
                  <span>Get Google Screened</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 lg:mb-6">
                  Google Local Service Ads Calgary - 
                  <span className="text-silahub-primary"> Appear at the Top</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Get verified with Google Screened and appear at the very top of local search results. Pay only for qualified leads with Google Local Service Ads management.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-4 lg:w-5 h-4 lg:h-5 text-green-500" />
                  <span className="text-sm lg:text-base text-gray-700">Google Screened badge</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-4 lg:w-5 h-4 lg:h-5 text-green-500" />
                  <span className="text-sm lg:text-base text-gray-700">Pay per lead only</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-4 lg:w-5 h-4 lg:h-5 text-green-500" />
                  <span className="text-sm lg:text-base text-gray-700">Top search placement</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-4 lg:w-5 h-4 lg:h-5 text-green-500" />
                  <span className="text-sm lg:text-base text-gray-700">Lead management</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-silahub-primary text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>Get Google Screened</span>
                  <SafeIcon icon={FiArrowRight} className="w-4 lg:w-5 h-4 lg:h-5" />
                </Link>
                <Link
                  to="/case-studies"
                  className="border-2 border-gray-300 text-gray-700 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold hover:border-silahub-primary hover:text-silahub-primary transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>View LSA Results</span>
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
                    Get Started with Local Service Ads
                  </h3>
                  <p className="text-gray-600">
                    Free consultation on Google Screened verification
                  </p>
                </div>
                <LeadCaptureForm
                  source="google-local-service-ads-calgary-page"
                  ctaText="Start Verification Process"
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
              Complete Local Service Ads Management
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              From Google Screened verification to ongoing lead management, we handle every aspect of your Local Service Ads campaign.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {lsaServices.map((service, index) => (
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

      {/* Benefits */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Google Local Service Ads?
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {lsaBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base">
                  {benefit.description}
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
              Local Service Ads Frequently Asked Questions
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
              Ready to Get Google Screened?
            </h2>
            <p className="text-lg lg:text-xl text-silahub-light mb-8">
              Start appearing at the top of local search results with Google Local Service Ads.
            </p>
            <Link
              to="/contact"
              className="bg-white text-silahub-primary px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Begin Verification Process</span>
              <SafeIcon icon={FiArrowRight} className="w-4 lg:w-5 h-4 lg:h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GoogleLocalServiceAds;