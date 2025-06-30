import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import LeadCaptureForm from '../../components/leads/LeadCaptureForm';

const { FiTarget, FiTrendingUp, FiDollarSign, FiUsers, FiCheck, FiArrowRight, FiClock } = FiIcons;

const GoogleAdsCalgary = () => {
  React.useEffect(() => {
    document.title = 'Google Ads Calgary | PPC Management Services - Silahub Technologies';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional Google Ads management in Calgary. Expert PPC campaigns for home service businesses. Get instant leads with our proven Google Ads strategies. Free consultation available.');
    }
  }, []);

  const googleAdsServices = [
    {
      icon: FiTarget,
      title: 'Search Ads Campaign',
      description: 'Target customers actively searching for your services',
      features: [
        'Keyword research & selection',
        'Ad copy creation & testing',
        'Bid management & optimization',
        'Landing page optimization'
      ]
    },
    {
      icon: FiUsers,
      title: 'Local Service Ads',
      description: 'Dominate the Google Local Services section',
      features: [
        'Google Screened verification',
        'Lead management system',
        'Review optimization',
        'Service area targeting'
      ]
    },
    {
      icon: FiTrendingUp,
      title: 'Display Advertising',
      description: 'Build brand awareness across Google network',
      features: [
        'Visual ad creation',
        'Audience targeting',
        'Remarketing campaigns',
        'Performance tracking'
      ]
    },
    {
      icon: FiDollarSign,
      title: 'Shopping Ads',
      description: 'Showcase products with visual shopping ads',
      features: [
        'Product feed optimization',
        'Merchant Center setup',
        'Price comparison advantage',
        'Inventory management'
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
                  <SafeIcon icon={FiClock} className="w-4 h-4" />
                  <span>Get Leads Today</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Google Ads Calgary - <span className="text-silahub-primary">Get Instant Leads</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Generate qualified leads immediately with professionally managed Google Ads campaigns. 
                  Our Calgary PPC experts deliver measurable ROI for home service businesses.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Instant lead generation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Transparent ROI tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Calgary market expertise</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">No long-term contracts</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-silahub-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>Get Free Google Ads Audit</span>
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                </Link>
                <Link
                  to="/case-studies"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-silahub-primary hover:text-silahub-primary transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>View PPC Results</span>
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
                    Free Google Ads Account Audit
                  </h3>
                  <p className="text-gray-600">
                    Discover how to reduce costs and increase leads
                  </p>
                </div>
                <LeadCaptureForm 
                  source="google-ads-calgary-page"
                  ctaText="Get My Free Ads Audit"
                  className="space-y-4"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Ads Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Google Ads Management in Calgary
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From search ads to local service ads, we manage all aspects of your Google advertising 
              to maximize your lead generation and ROI.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {googleAdsServices.map((service, index) => (
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

      {/* Results Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Google Ads Results for Calgary Businesses
            </h2>
            <p className="text-xl text-gray-600">
              Real performance metrics from our Calgary Google Ads campaigns
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { metric: 'Average ROAS', value: '4.2x', description: 'Return on ad spend' },
              { metric: 'Cost Per Lead', value: '-45%', description: 'Reduction vs industry average' },
              { metric: 'Click-Through Rate', value: '8.3%', description: 'Above industry benchmark' },
              { metric: 'Conversion Rate', value: '12.7%', description: 'Average across campaigns' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 text-center shadow-lg"
              >
                <div className="text-3xl font-bold text-silahub-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.metric}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Our Google Ads Management?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-silahub-primary text-white p-2 rounded-lg flex-shrink-0">
                    <SafeIcon icon={FiTarget} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Google Ads Certified Experts
                    </h3>
                    <p className="text-gray-600">
                      Our team holds advanced Google Ads certifications and stays current with platform updates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-silahub-primary text-white p-2 rounded-lg flex-shrink-0">
                    <SafeIcon icon={FiUsers} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Home Service Specialists
                    </h3>
                    <p className="text-gray-600">
                      Deep expertise in contractor and home service advertising with proven campaign templates.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-silahub-primary text-white p-2 rounded-lg flex-shrink-0">
                    <SafeIcon icon={FiTrendingUp} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Continuous Optimization
                    </h3>
                    <p className="text-gray-600">
                      Daily monitoring and weekly optimizations to improve performance and reduce costs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-silahub-primary text-white p-2 rounded-lg flex-shrink-0">
                    <SafeIcon icon={FiDollarSign} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Transparent ROI Reporting
                    </h3>
                    <p className="text-gray-600">
                      Detailed monthly reports showing exactly what you're getting for your ad spend.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-silahub-primary to-primary-800 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">
                Ready to Start Getting Leads Today?
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-silahub-light" />
                  <span>Free Google Ads audit</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-silahub-light" />
                  <span>Custom campaign strategy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-silahub-light" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-silahub-light" />
                  <span>Cancel anytime</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full bg-white text-silahub-primary py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get Started Today</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </Link>
            </motion.div>
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
              Stop Waiting for Leads - Start Getting Them Today
            </h2>
            <p className="text-xl text-silahub-light mb-8">
              Professional Google Ads management that delivers immediate results for Calgary businesses.
            </p>
            <Link
              to="/contact"
              className="bg-white text-silahub-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Launch Your Campaigns Now</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default GoogleAdsCalgary;