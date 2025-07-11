import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import LeadCaptureForm from '../../components/leads/LeadCaptureForm';

const { FiFacebook, FiUsers, FiTarget, FiTrendingUp, FiCheck, FiArrowRight, FiHeart } = FiIcons;

const FacebookAdsCalgary = () => {
  React.useEffect(() => {
    document.title = 'Facebook Ads Calgary | Social Media Advertising Services - Silahub Technologies';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional Facebook Ads management in Calgary. Expert social media advertising for home service businesses. Target local customers with proven Facebook marketing strategies.');
    }
  }, []);

  const facebookAdsServices = [
    {
      icon: FiTarget,
      title: 'Audience Targeting & Research',
      description: 'Reach your ideal Calgary customers with precise targeting',
      features: [
        'Local geographic targeting',
        'Demographic & interest targeting',
        'Lookalike audience creation',
        'Custom audience development'
      ]
    },
    {
      icon: FiFacebook,
      title: 'Creative Design & Copywriting',
      description: 'Eye-catching ads that stop the scroll and drive action',
      features: [
        'Professional ad creative design',
        'Compelling ad copywriting',
        'Video ad production',
        'A/B testing creative variations'
      ]
    },
    {
      icon: FiTrendingUp,
      title: 'Campaign Management',
      description: 'Full-service Facebook advertising management',
      features: [
        'Campaign setup & optimization',
        'Bid strategy management',
        'Performance monitoring',
        'Budget optimization'
      ]
    },
    {
      icon: FiUsers,
      title: 'Lead Generation Campaigns',
      description: 'Generate qualified leads directly from Facebook',
      features: [
        'Lead form optimization',
        'CRM integration setup',
        'Lead nurturing sequences',
        'Conversion tracking'
      ]
    }
  ];

  const faqs = [
    {
      question: "How much should I spend on Facebook Ads in Calgary?",
      answer: "For Calgary home service businesses, we typically recommend starting with $1,000-2,000 per month in ad spend, plus our $1,000 management fee. This allows for effective testing and optimization while generating meaningful results."
    },
    {
      question: "What types of Facebook ads work best for home service businesses?",
      answer: "Video ads showcasing your work, before/after photos, customer testimonials, and local community engagement posts perform best. We also use lead generation forms and carousel ads to showcase multiple services."
    },
    {
      question: "How do you target local Calgary customers on Facebook?",
      answer: "We use geographic targeting for Calgary and surrounding areas, demographic targeting for homeowners, interest-based targeting for home improvement topics, and create lookalike audiences based on your best customers."
    },
    {
      question: "Can Facebook Ads compete with Google Ads for home services?",
      answer: "Facebook Ads are excellent for building brand awareness and reaching customers who aren't actively searching yet. They work best when combined with Google Ads for a comprehensive digital marketing strategy."
    },
    {
      question: "How do you track ROI from Facebook advertising?",
      answer: "We track phone calls, form submissions, and website conversions. We also implement Facebook Pixel tracking and integrate with your CRM to measure lead quality and customer lifetime value."
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
                  <SafeIcon icon={FiHeart} className="w-4 h-4" />
                  <span>Build Brand Awareness</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 lg:mb-6">
                  Facebook Ads Calgary - 
                  <span className="text-silahub-primary"> Reach Local Customers</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Connect with Calgary homeowners on Facebook and Instagram with targeted advertising campaigns that build brand awareness and generate quality leads for your home service business.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-4 lg:w-5 h-4 lg:h-5 text-green-500" />
                  <span className="text-sm lg:text-base text-gray-700">Local audience targeting</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-4 lg:w-5 h-4 lg:h-5 text-green-500" />
                  <span className="text-sm lg:text-base text-gray-700">Brand awareness growth</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-4 lg:w-5 h-4 lg:h-5 text-green-500" />
                  <span className="text-sm lg:text-base text-gray-700">Lead generation focus</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-4 lg:w-5 h-4 lg:h-5 text-green-500" />
                  <span className="text-sm lg:text-base text-gray-700">Creative ad design</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-silahub-primary text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>Get Facebook Ads Strategy</span>
                  <SafeIcon icon={FiArrowRight} className="w-4 lg:w-5 h-4 lg:h-5" />
                </Link>
                <Link
                  to="/case-studies"
                  className="border-2 border-gray-300 text-gray-700 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold hover:border-silahub-primary hover:text-silahub-primary transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>View Social Media Results</span>
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
                    Free Facebook Ads Consultation
                  </h3>
                  <p className="text-gray-600">
                    Discover how to reach more Calgary customers
                  </p>
                </div>
                <LeadCaptureForm
                  source="facebook-ads-calgary-page"
                  ctaText="Get My Facebook Strategy"
                  className="space-y-4"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facebook Ads Services */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Complete Facebook Advertising Services
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              From audience research to creative design, we handle every aspect of your Facebook and Instagram advertising to maximize your reach and lead generation in Calgary.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {facebookAdsServices.map((service, index) => (
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

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Facebook Ads Frequently Asked Questions
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
                className="bg-white rounded-xl p-6 shadow-lg"
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
              Ready to Reach More Calgary Customers?
            </h2>
            <p className="text-lg lg:text-xl text-silahub-light mb-8">
              Professional Facebook advertising that builds your brand and generates leads.
            </p>
            <Link
              to="/contact"
              className="bg-white text-silahub-primary px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Start Your Facebook Campaigns</span>
              <SafeIcon icon={FiArrowRight} className="w-4 lg:w-5 h-4 lg:h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FacebookAdsCalgary;