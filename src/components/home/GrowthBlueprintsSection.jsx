import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiLeaf, FiThermometer, FiDroplet, FiZap, FiArrowRight, FiBarChart3 } = FiIcons;

const GrowthBlueprintsSection = () => {
  const blueprints = [
    {
      id: 'cleaning-service-growth-blueprint',
      title: 'Cleaning Service Growth Blueprint',
      description: 'Turn your cleaning business into a premium service with 350% more leads and higher profit margins.',
      icon: FiZap,
      color: 'from-cyan-500 to-blue-600',
      benefits: ['350% Lead Increase', 'Higher Pricing Power', '$175K Avg Growth', 'Commercial Focus']
    },
    {
      id: 'landscaping-growth-blueprint',
      title: 'Landscaping Growth Blueprint',
      description: 'End seasonal work cycles and build year-round revenue streams for your landscaping business.',
      icon: FiLeaf,
      color: 'from-green-500 to-emerald-600',
      benefits: ['220% Lead Increase', 'Year-Round Revenue', '$200K Avg Growth', 'Commercial Projects']
    },
    {
      id: 'hvac-marketing-blueprint',
      title: 'HVAC Marketing Blueprint',
      description: 'Dominate local search and capture more emergency HVAC calls with proven strategies.',
      icon: FiThermometer,
      color: 'from-orange-500 to-red-600',
      benefits: ['250% Lead Increase', 'Emergency Call Focus', '$180K Avg Growth', 'Year-Round Leads']
    },
    {
      id: 'plumbing-marketing-blueprint',
      title: 'Plumbing Marketing Blueprint',
      description: 'Stop competing on price and become the go-to plumber for emergency and high-value jobs.',
      icon: FiDroplet,
      color: 'from-blue-600 to-indigo-700',
      benefits: ['300% More Calls', 'Emergency Focus', '$220K Avg Growth', 'Premium Positioning']
    },
    {
      id: 'electrical-marketing-blueprint',
      title: 'Electrical Marketing Blueprint',
      description: 'Land more high-value electrical projects and position yourself as the expert contractor.',
      icon: FiZap,
      color: 'from-yellow-500 to-orange-600',
      benefits: ['220% More Leads', 'High-Value Jobs', '$160K Avg Growth', 'Expert Positioning']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <SafeIcon icon={FiBarChart3} className="w-4 h-4" />
            <span>Industry-Specific Growth Plans</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Free Marketing Growth Blueprints
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get complete step-by-step marketing strategies tailored for your industry. Each blueprint includes ROI calculators, lead generation tactics, and proven growth strategies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blueprints.map((blueprint, index) => (
            <motion.div
              key={blueprint.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className={`bg-gradient-to-r ${blueprint.color} p-6 text-white`}>
                <SafeIcon icon={blueprint.icon} className="w-8 h-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">{blueprint.title}</h3>
                <p className="text-white/90 text-sm">{blueprint.description}</p>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {blueprint.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="text-center">
                      <div className="text-sm font-semibold text-gray-900">{benefit.split(' ')[0]}</div>
                      <div className="text-xs text-gray-600">{benefit.split(' ').slice(1).join(' ')}</div>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/${blueprint.id}`}
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2 group-hover:bg-primary-700"
                >
                  <span>Get Your Free Blueprint</span>
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-primary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Custom Blueprint for Your Industry</h3>
            <p className="mb-6 text-primary-100">
              Don't see your industry above? We create custom growth blueprints for any home service business. Get your personalized marketing strategy today.
            </p>
            <Link
              to="/contact-us"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Get Custom Blueprint</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GrowthBlueprintsSection;