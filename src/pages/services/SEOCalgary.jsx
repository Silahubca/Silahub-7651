import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import LeadCaptureForm from '../../components/leads/LeadCaptureForm';

const { FiSearch, FiTrendingUp, FiMapPin, FiUsers, FiTarget, FiCheck, FiArrowRight, FiStar } = FiIcons;

const SEOCalgary = () => {
  // Set page title and meta description for SEO
  React.useEffect(() => {
    document.title = 'SEO Calgary | Search Engine Optimization Services - Silahub Technologies';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional SEO Calgary services for home service businesses. Local SEO experts helping contractors rank #1 in Calgary search results. Get more leads with proven SEO strategies.');
    }
  }, []);

  const seoServices = [
    {
      icon: FiMapPin,
      title: 'Local SEO Calgary',
      description: 'Dominate Calgary local search results and Google Maps',
      features: [
        'Google My Business optimization',
        'Local citation building',
        'Calgary-specific keyword targeting',
        'Local link building campaigns'
      ]
    },
    {
      icon: FiSearch,
      title: 'Technical SEO',
      description: 'Optimize your website\'s technical foundation',
      features: [
        'Site speed optimization',
        'Mobile responsiveness',
        'Schema markup implementation',
        'Crawl error fixes'
      ]
    },
    {
      icon: FiTarget,
      title: 'Keyword Research',
      description: 'Target the right keywords for Calgary customers',
      features: [
        'Calgary market analysis',
        'Competitor keyword research',
        'Long-tail keyword identification',
        'Search intent optimization'
      ]
    },
    {
      icon: FiUsers,
      title: 'Content Optimization',
      description: 'Create content that ranks and converts',
      features: [
        'SEO-optimized blog posts',
        'Service page optimization',
        'Local content creation',
        'FAQ optimization'
      ]
    }
  ];

  const seoProcess = [
    {
      step: '01',
      title: 'SEO Audit & Analysis',
      description: 'We analyze your current SEO performance, identify opportunities, and assess your Calgary market competition.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a custom SEO strategy targeting Calgary-specific keywords and local search opportunities.'
    },
    {
      step: '03',
      title: 'On-Page Optimization',
      description: 'Optimize your website content, meta tags, and technical elements for better search rankings.'
    },
    {
      step: '04',
      title: 'Local SEO Implementation',
      description: 'Build local citations, optimize Google My Business, and implement location-based SEO tactics.'
    },
    {
      step: '05',
      title: 'Content Creation',
      description: 'Develop high-quality, SEO-optimized content that attracts Calgary customers and builds authority.'
    },
    {
      step: '06',
      title: 'Monitoring & Reporting',
      description: 'Track rankings, traffic, and leads with detailed monthly reports showing your SEO progress.'
    }
  ];

  const calgaryAreas = [
    'Downtown Calgary', 'Kensington', 'Hillhurst', 'Beltline', 'Inglewood',
    'Mission', 'Bridgeland', 'Eau Claire', 'Chinatown', 'East Village',
    'Sunalta', 'Lower Mount Royal', 'Cliff Bungalow', 'Ramsay', 'Forest Lawn'
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
                  <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                  <span>Calgary Local SEO Experts</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  SEO Calgary Services for <span className="text-silahub-primary">Home Service Businesses</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Dominate Calgary search results and get found by customers actively searching for your services. 
                  Our proven SEO strategies help home service businesses rank #1 in local search and generate more qualified leads.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Rank #1 in Calgary</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">More qualified leads</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Local market dominance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Increased website traffic</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-silahub-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>Get Free SEO Audit</span>
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                </Link>
                <Link
                  to="/case-studies"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-silahub-primary hover:text-silahub-primary transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>View SEO Results</span>
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
                    Free SEO Audit for Calgary Businesses
                  </h3>
                  <p className="text-gray-600">
                    Discover how to rank higher in Calgary search results
                  </p>
                </div>
                <LeadCaptureForm 
                  source="seo-calgary-page"
                  ctaText="Get My Free SEO Audit"
                  className="space-y-4"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive SEO Services in Calgary
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our full-service SEO approach ensures your Calgary business dominates local search results 
              and attracts more qualified customers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {seoServices.map((service, index) => (
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

      {/* SEO Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Proven SEO Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your Calgary business achieves and maintains 
              top search rankings.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl font-bold text-silahub-primary mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calgary Areas We Serve */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              SEO Services Across Calgary
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide local SEO services to businesses throughout Calgary and surrounding areas, 
              helping you dominate local search in your specific neighborhood.
            </p>
          </motion.div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {calgaryAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-gray-700 font-medium">{area}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Calgary SEO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose Silahub for SEO in Calgary?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-silahub-primary text-white p-2 rounded-lg flex-shrink-0">
                    <SafeIcon icon={FiMapPin} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Local Calgary Expertise
                    </h3>
                    <p className="text-gray-600">
                      Deep understanding of Calgary market dynamics, local search patterns, and competitor landscape.
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
                      Exclusive focus on contractors and home service businesses with proven industry expertise.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-silahub-primary text-white p-2 rounded-lg flex-shrink-0">
                    <SafeIcon icon={FiTrendingUp} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Proven Results
                    </h3>
                    <p className="text-gray-600">
                      Track record of helping 500+ businesses achieve #1 rankings and significant lead increases.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-silahub-primary text-white p-2 rounded-lg flex-shrink-0">
                    <SafeIcon icon={FiStar} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Transparent Reporting
                    </h3>
                    <p className="text-gray-600">
                      Monthly detailed reports showing ranking improvements, traffic growth, and lead generation.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Ready to Dominate Calgary Search Results?
                </h3>
                <p className="text-gray-600">
                  Get your free SEO audit and custom strategy
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What You'll Get:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• Complete SEO audit report</li>
                    <li>• Keyword opportunity analysis</li>
                    <li>• Competitor comparison</li>
                    <li>• Custom SEO strategy</li>
                    <li>• ROI projections</li>
                  </ul>
                </div>

                <Link
                  to="/contact"
                  className="w-full bg-silahub-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-800 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Get Your Free SEO Audit</span>
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                </Link>

                <p className="text-xs text-gray-500 text-center">
                  No obligation • Results guaranteed • Calgary local experts
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Calgary SEO Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How long does it take to see SEO results in Calgary?",
                answer: "Most Calgary businesses start seeing improved rankings within 3-6 months, with significant traffic increases typically occurring within 6-12 months. Local SEO improvements can be seen faster, often within 30-90 days."
              },
              {
                question: "What makes Calgary SEO different from general SEO?",
                answer: "Calgary SEO focuses on local search optimization, targeting location-specific keywords, optimizing Google My Business, building local citations, and understanding Calgary market dynamics and customer behavior patterns."
              },
              {
                question: "Do you guarantee #1 rankings in Calgary?",
                answer: "While we can't guarantee specific rankings (no legitimate SEO company can), we do guarantee significant improvements in your online visibility, website traffic, and lead generation based on our proven track record."
              },
              {
                question: "How much does SEO cost for Calgary businesses?",
                answer: "Our Calgary SEO services start at $1,500/month, with pricing varying based on your industry competitiveness, target keywords, and business goals. We offer custom packages tailored to your specific needs."
              }
            ].map((faq, index) => (
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
                <p className="text-gray-600">
                  {faq.answer}
                </p>
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
              Ready to Dominate Calgary Search Results?
            </h2>
            <p className="text-xl text-silahub-light mb-8">
              Join 500+ successful Calgary businesses that trust Silahub for their SEO success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-silahub-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>Start Your SEO Journey</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-silahub-primary transition-colors inline-flex items-center justify-center space-x-2"
              >
                <span>View SEO Success Stories</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default SEOCalgary;