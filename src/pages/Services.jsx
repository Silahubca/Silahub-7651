import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import LeadCaptureForm from '../components/leads/LeadCaptureForm';

const { FiSearch, FiTarget, FiFacebook, FiUsers, FiMonitor, FiStar, FiEdit3, FiArrowRight, FiCheck, FiHeart, FiMapPin, FiShield } = FiIcons;

const Services = () => {
  // Set page title and meta description
  React.useEffect(() => {
    document.title = 'Digital Marketing Services Calgary | SEO, Google Ads, Web Design - Silahub';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Complete digital marketing services for Calgary home service businesses. Expert SEO, Google Ads, Facebook Ads, website design, content marketing and reputation management.');
    }
  }, []);

  const services = [
    {
      icon: FiSearch,
      title: 'Search Engine Optimization (SEO)',
      description: 'Dominate local search results and get found by customers actively searching for your services in Calgary and surrounding areas.',
      features: [
        'Local SEO optimization',
        'Keyword research & strategy',
        'Technical SEO audits',
        'Content optimization',
        'Google My Business management',
        'Local citation building'
      ],
      benefits: [
        'Increase organic website traffic',
        'Rank #1 for local searches',
        'Build long-term online presence',
        'Cost-effective lead generation'
      ],
      pricing: 'Starting at $1,500/month',
      color: 'from-green-500 to-emerald-600',
      slug: 'seo-calgary'
    },
    {
      icon: FiTarget,
      title: 'Google Ads Management',
      description: 'Get instant visibility and qualified leads with professionally managed Google Ads campaigns that deliver measurable ROI.',
      features: [
        'Campaign setup & optimization',
        'Keyword bidding strategies',
        'Ad copy creation & testing',
        'Landing page optimization',
        'Conversion tracking',
        'Monthly performance reports'
      ],
      benefits: [
        'Immediate lead generation',
        'Targeted local customers',
        'Full budget control',
        'Detailed ROI tracking'
      ],
      pricing: 'Starting at $1,200/month + ad spend',
      color: 'from-blue-500 to-primary-600',
      slug: 'google-ads-calgary'
    },
    {
      icon: FiFacebook,
      title: 'Facebook & Social Media Ads',
      description: 'Reach your ideal customers on Facebook, Instagram, and other social platforms with targeted advertising campaigns.',
      features: [
        'Audience targeting & research',
        'Creative design & copywriting',
        'Campaign management',
        'A/B testing',
        'Performance optimization',
        'Social media strategy'
      ],
      benefits: [
        'Expand brand awareness',
        'Target specific demographics',
        'Generate quality leads',
        'Build customer relationships'
      ],
      pricing: 'Starting at $1,000/month + ad spend',
      color: 'from-purple-500 to-pink-600',
      slug: 'facebook-ads-calgary'
    },
    {
      icon: FiUsers,
      title: 'Social Media Management',
      description: 'Build your brand and engage with customers across all social media platforms with consistent, professional content.',
      features: [
        'Content creation & scheduling',
        'Community management',
        'Brand monitoring',
        'Engagement strategy',
        'Social media advertising',
        'Analytics & reporting'
      ],
      benefits: [
        'Consistent brand presence',
        'Increased customer engagement',
        'Improved brand reputation',
        'Social proof building'
      ],
      pricing: 'Starting at $800/month',
      color: 'from-orange-500 to-red-600',
      slug: 'social-media-management-calgary'
    },
    {
      icon: FiMonitor,
      title: 'Website Design & Development',
      description: 'Convert more visitors with high-performing, mobile-optimized websites designed specifically for home service businesses.',
      features: [
        'Responsive web design',
        'SEO optimization',
        'Fast loading speeds',
        'Lead generation forms',
        'Call tracking integration',
        'Analytics setup'
      ],
      benefits: [
        'Professional online presence',
        'Higher conversion rates',
        'Mobile-friendly design',
        'Search engine ready'
      ],
      pricing: 'Starting at $3,500 one-time',
      color: 'from-teal-500 to-cyan-600',
      slug: 'web-design-calgary'
    },
    {
      icon: FiStar,
      title: 'Reputation Management',
      description: 'Build trust and credibility with professional online reputation management that showcases your best reviews.',
      features: [
        'Review monitoring',
        'Review response management',
        'Rating improvement strategies',
        'Brand protection',
        'Crisis management',
        'Reputation reporting'
      ],
      benefits: [
        'Improved online reputation',
        'Higher customer trust',
        'Better search rankings',
        'Competitive advantage'
      ],
      pricing: 'Starting at $500/month',
      color: 'from-yellow-500 to-orange-600',
      slug: 'reputation-management-calgary'
    },
    {
      icon: FiEdit3,
      title: 'Content Marketing',
      description: 'Attract and engage customers with valuable content that drives leads and builds your authority in the Calgary market.',
      features: [
        'SEO blog writing',
        'Video content creation',
        'Email marketing campaigns',
        'Social media content',
        'Content strategy & planning',
        'Performance tracking'
      ],
      benefits: [
        'Build industry authority',
        'Attract qualified leads',
        'Improve SEO rankings',
        'Nurture customer relationships'
      ],
      pricing: 'Starting at $1,200/month',
      color: 'from-indigo-500 to-purple-600',
      slug: 'content-marketing-calgary'
    },
    {
      icon: FiHeart,
      title: 'Branding Services',
      description: 'Create a memorable brand identity that sets your business apart with professional logo design and brand guidelines.',
      features: [
        'Logo design & identity',
        'Brand guidelines',
        'Marketing materials',
        'Brand strategy',
        'Visual identity system',
        'Brand implementation'
      ],
      benefits: [
        'Professional brand image',
        'Increased brand recognition',
        'Consistent marketing materials',
        'Competitive differentiation'
      ],
      pricing: 'Starting at $2,500 one-time',
      color: 'from-rose-500 to-pink-600',
      slug: 'branding-service'
    },
    {
      icon: FiMapPin,
      title: 'Google Maps SEO',
      description: 'Dominate Google Maps and local search results with comprehensive Google My Business optimization.',
      features: [
        'Google My Business optimization',
        'Local citation building',
        'Review management',
        'Map ranking optimization',
        'Local SEO strategy',
        'Performance tracking'
      ],
      benefits: [
        'Higher local visibility',
        'More map clicks',
        'Improved local rankings',
        'Increased foot traffic'
      ],
      pricing: 'Starting at $800/month',
      color: 'from-emerald-500 to-green-600',
      slug: 'google-maps-seo'
    },
    {
      icon: FiShield,
      title: 'Google Local Service Ads',
      description: 'Get Google Screened and appear at the top of search results with pay-per-lead Local Service Ads.',
      features: [
        'Google Screened verification',
        'Lead management system',
        'Budget optimization',
        'Performance tracking',
        'Review management',
        'Monthly reporting'
      ],
      benefits: [
        'Top search placement',
        'Pay per lead only',
        'Google Screened badge',
        'Immediate visibility'
      ],
      pricing: 'Starting at $600/month + cost per lead',
      color: 'from-blue-600 to-indigo-600',
      slug: 'google-local-service-ads'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              Digital Marketing Services for{' '}
              <span className="text-primary-600">Home Service Businesses</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We specialize in helping contractors and home service businesses in Calgary dominate their local market with proven digital marketing strategies that generate qualified leads and increase revenue.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
                  {/* Content */}
                  <div className="p-6 lg:p-12">
                    <div className={`w-12 lg:w-16 h-12 lg:h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                      <SafeIcon icon={service.icon} className="w-6 lg:w-8 h-6 lg:h-8 text-white" />
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-6 text-base lg:text-lg">
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">What's Included:</h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <SafeIcon icon={FiCheck} className="w-4 lg:w-5 h-4 lg:h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-sm lg:text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <div className="text-xl lg:text-2xl font-bold text-primary-600 mb-2">{service.pricing}</div>
                      <p className="text-sm text-gray-600">No setup fees • No long-term contracts</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to={`/services/${service.slug}`}
                        className="bg-primary-600 text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center justify-center space-x-2"
                      >
                        <span>Learn More</span>
                        <SafeIcon icon={FiArrowRight} className="w-4 lg:w-5 h-4 lg:h-5" />
                      </Link>
                      <Link
                        to="/contact"
                        className="border border-primary-600 text-primary-600 px-4 lg:px-6 py-2 lg:py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-center"
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>

                  {/* Benefits */}
                  <div className="bg-gray-50 p-6 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">Key Benefits</h3>
                    <ul className="space-y-4">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <div className={`w-5 lg:w-6 h-5 lg:h-6 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mr-3 lg:mr-4 mt-1 flex-shrink-0`}>
                            <SafeIcon icon={FiCheck} className="w-3 lg:w-4 h-3 lg:h-4 text-white" />
                          </div>
                          <span className="text-gray-700 font-medium text-sm lg:text-base">{benefit}</span>
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

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg lg:text-xl text-primary-100 mb-8">
              Get a free marketing audit and custom strategy for your home service business.
            </p>
            <div className="bg-white rounded-2xl p-6 lg:p-8 max-w-md mx-auto">
              <LeadCaptureForm
                source="services-page"
                ctaText="Get My Free Audit"
                className="space-y-4"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;