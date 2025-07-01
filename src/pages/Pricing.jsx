import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import LeadCaptureForm from '../components/leads/LeadCaptureForm';

const { FiCheck, FiArrowRight, FiStar, FiTrendingUp, FiZap, FiShield, FiClock, FiDollarSign, FiUsers, FiTarget } = FiIcons;

const Pricing = () => {
  React.useEffect(() => {
    document.title = 'Pricing Plans - Digital Marketing Services Calgary | Silahub Technologies';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transparent pricing for digital marketing services in Calgary. SEO, Google Ads, web design payment plans, and complete marketing packages for home service businesses.');
    }
  }, []);

  const marketingServices = [
    {
      name: 'SEO Calgary',
      price: '$1,500',
      period: '/month',
      description: 'Dominate local search results and get found by customers',
      features: [
        'Local SEO optimization',
        'Google My Business management',
        'Keyword research & strategy',
        'Technical SEO audits',
        'Monthly ranking reports',
        'Local citation building'
      ],
      color: 'from-green-500 to-emerald-600',
      popular: false
    },
    {
      name: 'Google Ads Management',
      price: '$1,200',
      period: '/month + ad spend',
      description: 'Get instant leads with professionally managed campaigns',
      features: [
        'Campaign setup & optimization',
        'Keyword bidding strategies',
        'Ad copy creation & testing',
        'Landing page optimization',
        'Conversion tracking',
        'Monthly performance reports'
      ],
      color: 'from-blue-500 to-primary-600',
      popular: true
    },
    {
      name: 'Social Media Management',
      price: '$800',
      period: '/month',
      description: 'Build your brand across all social platforms',
      features: [
        'Content creation & scheduling',
        'Community management',
        'Brand monitoring',
        'Engagement strategy',
        'Monthly analytics',
        'Social media advertising'
      ],
      color: 'from-purple-500 to-pink-600',
      popular: false
    },
    {
      name: 'Facebook Ads',
      price: '$1,000',
      period: '/month + ad spend',
      description: 'Reach local customers with targeted social advertising',
      features: [
        'Audience targeting & research',
        'Creative design & copywriting',
        'Campaign management',
        'A/B testing',
        'Performance optimization',
        'Lead generation campaigns'
      ],
      color: 'from-pink-500 to-red-600',
      popular: false
    },
    {
      name: 'Content Marketing',
      price: '$1,200',
      period: '/month',
      description: 'Build authority with strategic content marketing',
      features: [
        'SEO blog writing',
        'Video content creation',
        'Email marketing campaigns',
        'Social media content',
        'Content strategy & planning',
        'Performance tracking'
      ],
      color: 'from-indigo-500 to-purple-600',
      popular: false
    },
    {
      name: 'Reputation Management',
      price: '$500',
      period: '/month',
      description: 'Protect and enhance your online reputation',
      features: [
        'Review monitoring',
        'Professional review responses',
        'Rating improvement strategies',
        'Brand protection',
        'Crisis management',
        'Monthly reputation reports'
      ],
      color: 'from-yellow-500 to-orange-600',
      popular: false
    },
    {
      name: 'Branding Services',
      price: '$2,500',
      period: 'one-time',
      description: 'Professional brand identity and design',
      features: [
        'Logo design & variations',
        'Brand guidelines',
        'Marketing materials',
        'Brand strategy',
        'Visual identity system',
        'Brand implementation support'
      ],
      color: 'from-rose-500 to-pink-600',
      popular: false
    },
    {
      name: 'Google Maps SEO',
      price: '$800',
      period: '/month',
      description: 'Dominate Google Maps and local search',
      features: [
        'Google My Business optimization',
        'Local citation building',
        'Review management',
        'Map ranking optimization',
        'Local SEO strategy',
        'Monthly GMB reports'
      ],
      color: 'from-emerald-500 to-green-600',
      popular: false
    },
    {
      name: 'Google Local Service Ads',
      price: '$600',
      period: '/month + cost per lead',
      description: 'Get Google Screened and appear at the top',
      features: [
        'Google Screened verification',
        'Lead management system',
        'Budget optimization',
        'Performance tracking',
        'Review management',
        'Monthly LSA reports'
      ],
      color: 'from-blue-600 to-indigo-600',
      popular: false
    }
  ];

  const websitePlans = [
    {
      name: 'Single Location',
      setupFee: '$967',
      monthlyFee: '$99',
      description: 'Perfect for single-location home service businesses',
      features: [
        'Professional responsive design',
        'SEO-optimized development',
        'Lead capture forms',
        'Google Analytics setup',
        'Mobile optimization',
        'Contact form integration',
        'Basic hosting included',
        'Monthly maintenance'
      ],
      deliveryTime: '1 month',
      icon: FiUsers,
      color: 'border-primary-200'
    },
    {
      name: 'Multiple Locations',
      setupFee: '$967',
      monthlyFee: '$299',
      description: 'Ideal for businesses with multiple service areas',
      features: [
        'Everything in Single Location',
        'Location-specific landing pages',
        'Advanced local SEO',
        'Multi-location schema markup',
        'Service area optimization',
        'Location management system',
        'Enhanced analytics',
        'Priority support'
      ],
      deliveryTime: '1 month',
      icon: FiTarget,
      color: 'border-primary-500',
      popular: true
    }
  ];

  const allInOnePackage = {
    name: 'Complete Marketing Solution',
    originalPrice: '$9,200',
    packagePrice: '$4,997',
    savings: '$4,203',
    description: 'Everything your business needs to dominate the Calgary market',
    features: [
      'SEO Optimization ($1,500/month value)',
      'Google Ads Management ($1,200/month value)',
      'Social Media Management ($800/month value)',
      'Facebook Ads Management ($1,000/month value)',
      'Content Marketing ($1,200/month value)',
      'Reputation Management ($500/month value)',
      'Google Maps SEO ($800/month value)',
      'Google Local Service Ads ($600/month value)',
      'Branding Services ($2,500 value)',
      'Professional Website (Single Location)',
      'Dedicated account manager',
      'Priority support & optimization',
      'Monthly strategy sessions',
      'Comprehensive reporting',
      'No setup fees for website'
    ],
    bonuses: [
      'Free website setup (Save $967)',
      'Free branding package (Save $2,500)',
      'Free initial strategy consultation',
      'Free competitor analysis report',
      'Free brand audit & recommendations'
    ]
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Transparent Pricing for{' '}
            <span className="text-primary-600">Real Results</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            No hidden fees, no long-term contracts. Choose the services that fit your business needs and budget. All plans include transparent reporting and dedicated support.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-500" />
              <span>No Setup Fees</span>
            </div>
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-500" />
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-500" />
              <span>Guaranteed Results</span>
            </div>
          </div>
        </div>
      </section>

      {/* All-in-One Package - Featured */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <SafeIcon icon={FiStar} className="w-4 h-4" />
              <span>Most Popular - Best Value</span>
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Complete Marketing Solution
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Get all our services in one comprehensive package and save over $4,200 per month
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-2">
              <div className="bg-white rounded-2xl p-6 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      {allInOnePackage.name}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      {allInOnePackage.description}
                    </p>
                    <div className="mb-6">
                      <div className="flex items-baseline space-x-2 mb-2">
                        <span className="text-lg text-gray-500 line-through">
                          {allInOnePackage.originalPrice}/month
                        </span>
                        <span className="text-3xl lg:text-4xl font-bold text-primary-600">
                          {allInOnePackage.packagePrice}
                        </span>
                        <span className="text-gray-600">/month</span>
                      </div>
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                        Save {allInOnePackage.savings} per month
                      </div>
                    </div>
                    <div className="space-y-3 mb-8">
                      <h4 className="font-semibold text-gray-900">What's Included:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {allInOnePackage.features.slice(0, 6).map((feature, index) => (
                          <div key={index} className="flex items-center text-gray-700">
                            <SafeIcon icon={FiCheck} className="w-4 lg:w-5 h-4 lg:h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-sm lg:text-base">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      className="bg-primary-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center space-x-2"
                    >
                      <span>Get Complete Solution</span>
                      <SafeIcon icon={FiArrowRight} className="w-4 lg:w-5 h-4 lg:h-5" />
                    </Link>
                  </div>
                  <div>
                    <div className="bg-gray-50 rounded-xl p-6 mb-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Bonus Features (FREE):</h4>
                      <div className="space-y-2">
                        {allInOnePackage.bonuses.map((bonus, index) => (
                          <div key={index} className="flex items-center text-gray-700">
                            <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-500 mr-3 flex-shrink-0" />
                            <span className="text-sm lg:text-base">{bonus}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-primary-50 rounded-xl p-6">
                      <h4 className="font-semibold text-primary-900 mb-4">Additional Services:</h4>
                      <div className="space-y-2 text-sm">
                        {allInOnePackage.features.slice(6).map((feature, index) => (
                          <div key={index} className="flex items-center text-primary-800">
                            <SafeIcon icon={FiCheck} className="w-4 h-4 text-primary-600 mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Website Design Payment Plans */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Website Design Payment Plans
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Professional website development with flexible monthly payment options. No large upfront costs - spread the investment over time.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {websitePlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-xl p-6 lg:p-8 border-2 ${plan.color} relative ${
                  plan.popular ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <SafeIcon icon={plan.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-sm text-gray-500">One-time setup:</span>
                      <span className="text-lg font-semibold text-gray-900">{plan.setupFee}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-2xl lg:text-3xl font-bold text-primary-600">{plan.monthlyFee}</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                      <SafeIcon icon={FiClock} className="w-4 h-4" />
                      <span>Delivery: {plan.deliveryTime}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <SafeIcon icon={FiCheck} className="w-4 lg:w-5 h-4 lg:h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm lg:text-base">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  <span>Get Started</span>
                  <SafeIcon icon={FiArrowRight} className="w-4 lg:w-5 h-4 lg:h-5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Marketing Services */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Individual Marketing Services
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Choose specific services that match your business needs and goals. Each service can be customized to your requirements.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {marketingServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow relative ${
                  service.popular ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 right-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Popular
                    </span>
                  </div>
                )}
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  <SafeIcon icon={FiTrendingUp} className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.description}</p>
                <div className="mb-6">
                  <div className="flex items-baseline space-x-1">
                    <span className="text-xl lg:text-2xl font-bold text-gray-900">{service.price}</span>
                    <span className="text-gray-600 text-sm">{service.period}</span>
                  </div>
                </div>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start text-sm">
                      <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className="w-full bg-gray-100 text-gray-900 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors text-center block"
                >
                  Get Started
                </Link>
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
              Pricing Questions & Answers
            </h2>
          </motion.div>
          <div className="space-y-6">
            {[
              {
                question: "Are there any setup fees for marketing services?",
                answer: "No, there are no setup fees for our marketing services. The only setup fee is for website development ($967), which can be waived with our Complete Marketing Solution package."
              },
              {
                question: "Can I cancel my services anytime?",
                answer: "Yes, all our marketing services are month-to-month with no long-term contracts. You can cancel anytime with 30 days notice. Website hosting continues on a monthly basis."
              },
              {
                question: "What's included in the website monthly fee?",
                answer: "The monthly fee includes hosting, maintenance, security updates, backup management, technical support, and minor content updates. Major redesigns are quoted separately."
              },
              {
                question: "Can I start with one service and add others later?",
                answer: "Absolutely! You can start with any individual service and add others as your business grows. We'll help you create a strategic roadmap for scaling your marketing efforts."
              },
              {
                question: "Do you offer discounts for multiple services?",
                answer: "Yes, our Complete Marketing Solution package offers significant savings when you combine all services. We also provide custom quotes for businesses needing specific service combinations."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
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
              Get a custom quote tailored to your specific business needs and goals.
            </p>
            <div className="bg-white rounded-2xl p-6 lg:p-8 max-w-md mx-auto">
              <div className="text-center mb-6">
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                  Get Your Custom Quote
                </h3>
                <p className="text-gray-600">
                  Free consultation and pricing proposal
                </p>
              </div>
              <LeadCaptureForm
                source="pricing-page"
                ctaText="Get My Custom Quote"
                className="space-y-4"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Pricing;