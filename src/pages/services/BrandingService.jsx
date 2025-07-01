import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import LeadCaptureForm from '../../components/leads/LeadCaptureForm';

const { FiHeart, FiEye, FiImage, FiTrendingUp, FiCheck, FiArrowRight, FiStar } = FiIcons;

const BrandingService = () => {
  React.useEffect(() => {
    document.title = 'Branding Services Calgary | Brand Development & Design - Silahub Technologies';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional branding services in Calgary. Logo design, brand identity, visual branding for home service businesses. Create a memorable brand that attracts customers.');
    }
  }, []);

  const brandingServices = [
    {
      icon: FiImage,
      title: 'Logo Design & Identity',
      description: 'Create a memorable logo and brand identity that represents your business',
      features: [
        'Custom logo design',
        'Brand color palette',
        'Typography selection',
        'Logo variations & formats'
      ]
    },
    {
      icon: FiEye,
      title: 'Visual Brand Guidelines',
      description: 'Comprehensive brand guidelines for consistent application',
      features: [
        'Brand style guide',
        'Logo usage guidelines',
        'Color specifications',
        'Typography standards'
      ]
    },
    {
      icon: FiHeart,
      title: 'Marketing Materials',
      description: 'Professional marketing materials that reflect your brand',
      features: [
        'Business cards & stationery',
        'Vehicle wrap designs',
        'Yard sign templates',
        'Digital marketing assets'
      ]
    },
    {
      icon: FiTrendingUp,
      title: 'Brand Strategy',
      description: 'Strategic brand positioning for your target market',
      features: [
        'Brand positioning',
        'Competitive analysis',
        'Target audience research',
        'Brand messaging framework'
      ]
    }
  ];

  const brandingProcess = [
    {
      step: '01',
      title: 'Discovery & Research',
      description: 'We learn about your business, values, target audience, and competitive landscape to inform the brand strategy.'
    },
    {
      step: '02',
      title: 'Brand Strategy Development',
      description: 'Create a comprehensive brand strategy including positioning, messaging, and visual direction.'
    },
    {
      step: '03',
      title: 'Visual Identity Creation',
      description: 'Design your logo, select colors and typography, and create the visual elements of your brand.'
    },
    {
      step: '04',
      title: 'Brand Guidelines',
      description: 'Develop comprehensive guidelines to ensure consistent brand application across all touchpoints.'
    },
    {
      step: '05',
      title: 'Marketing Materials',
      description: 'Create branded marketing materials and templates for ongoing business needs.'
    },
    {
      step: '06',
      title: 'Brand Launch Support',
      description: 'Assist with implementing your new brand across all business touchpoints and marketing channels.'
    }
  ];

  const faqs = [
    {
      question: "How long does the branding process take?",
      answer: "A complete branding project typically takes 4-6 weeks, depending on the scope. Logo design alone can be completed in 2-3 weeks, while comprehensive brand identity projects require more time for research and development."
    },
    {
      question: "What's included in the brand guidelines?",
      answer: "Our brand guidelines include logo usage rules, color specifications (RGB, CMYK, HEX), typography guidelines, spacing requirements, do's and don'ts, and examples of proper brand application across various materials."
    },
    {
      question: "Can you rebrand an existing business?",
      answer: "Absolutely! We specialize in rebranding established businesses. We'll assess your current brand, understand what's working, and develop a strategy to evolve your brand while maintaining customer recognition where beneficial."
    },
    {
      question: "Do you provide files in different formats?",
      answer: "Yes, you'll receive your logo and brand assets in multiple formats including AI, EPS, PNG, JPG, and PDF. We provide both high-resolution and web-optimized versions for all your marketing needs."
    },
    {
      question: "How much input do I have in the design process?",
      answer: "You're involved throughout the entire process. We start with a discovery session, present initial concepts for feedback, and refine designs based on your input. Your satisfaction is our priority."
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
                  <span>Build Your Brand</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4 lg:mb-6">
                  Branding Services Calgary - 
                  <span className="text-silahub-primary"> Professional Brand Development</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Create a memorable brand identity that sets your Calgary home service business apart. Professional logo design, brand guidelines, and marketing materials that attract customers and build trust.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 lg:gap-4">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-4 lg:w-5 h-4 lg:h-5 text-green-500" />
                  <span className="text-sm lg:text-base text-gray-700">Custom logo design</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-4 lg:w-5 h-4 lg:h-5 text-green-500" />
                  <span className="text-sm lg:text-base text-gray-700">Brand guidelines</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-4 lg:w-5 h-4 lg:h-5 text-green-500" />
                  <span className="text-sm lg:text-base text-gray-700">Marketing materials</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-4 lg:w-5 h-4 lg:h-5 text-green-500" />
                  <span className="text-sm lg:text-base text-gray-700">Brand strategy</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-silahub-primary text-white px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>Get Brand Consultation</span>
                  <SafeIcon icon={FiArrowRight} className="w-4 lg:w-5 h-4 lg:h-5" />
                </Link>
                <Link
                  to="/portfolio"
                  className="border-2 border-gray-300 text-gray-700 px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold hover:border-silahub-primary hover:text-silahub-primary transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>View Brand Work</span>
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
                    Free Brand Consultation
                  </h3>
                  <p className="text-gray-600">
                    Discover how to build a powerful brand
                  </p>
                </div>
                <LeadCaptureForm
                  source="branding-service-calgary-page"
                  ctaText="Get My Brand Strategy"
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
              Complete Branding Services
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              From logo design to complete brand identity systems, we create cohesive branding that helps your Calgary business stand out and attract customers.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {brandingServices.map((service, index) => (
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

      {/* Process */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Our Branding Process
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              A strategic approach to brand development that ensures your brand resonates with your target audience and supports business growth.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {brandingProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-2xl lg:text-4xl font-bold text-silahub-primary mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm lg:text-base">
                    {step.description}
                  </p>
                </div>
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
              Branding Frequently Asked Questions
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
              Ready to Build a Memorable Brand?
            </h2>
            <p className="text-lg lg:text-xl text-silahub-light mb-8">
              Professional branding that sets your Calgary business apart from the competition.
            </p>
            <Link
              to="/contact"
              className="bg-white text-silahub-primary px-6 lg:px-8 py-3 lg:py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Start Your Brand Project</span>
              <SafeIcon icon={FiArrowRight} className="w-4 lg:w-5 h-4 lg:h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BrandingService;