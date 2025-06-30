import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiCalculator, FiTrendingUp, FiDollarSign, FiUsers } = FiIcons;

const InteractiveROICalculator = () => {
  const [inputs, setInputs] = useState({
    monthlyRevenue: 50000,
    averageJobValue: 500,
    currentLeads: 20,
    conversionRate: 20
  });

  const [results, setResults] = useState({
    currentCustomers: 4,
    projectedLeads: 80,
    projectedCustomers: 16,
    additionalRevenue: 6000,
    roi: 400
  });

  const calculateROI = (newInputs) => {
    const currentCustomers = Math.floor((newInputs.currentLeads * newInputs.conversionRate) / 100);
    const projectedLeads = newInputs.currentLeads * 4; // 4x lead increase
    const projectedCustomers = Math.floor((projectedLeads * (newInputs.conversionRate + 10)) / 100); // +10% conversion rate
    const additionalCustomers = projectedCustomers - currentCustomers;
    const additionalRevenue = additionalCustomers * newInputs.averageJobValue;
    const marketingInvestment = 1500; // Average monthly investment
    const roi = Math.floor((additionalRevenue / marketingInvestment) * 100);

    setResults({
      currentCustomers,
      projectedLeads,
      projectedCustomers,
      additionalRevenue,
      roi
    });
  };

  const handleInputChange = (field, value) => {
    const newInputs = { ...inputs, [field]: parseInt(value) || 0 };
    setInputs(newInputs);
    calculateROI(newInputs);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-silahub-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <SafeIcon icon={FiCalculator} className="w-4 h-4" />
            <span>Interactive ROI Calculator</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See Your Potential ROI in Real-Time
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculate exactly how much additional revenue our digital marketing services could generate for your Calgary business.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Current Situation</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Monthly Revenue ($)
                </label>
                <input
                  type="number"
                  value={inputs.monthlyRevenue}
                  onChange={(e) => handleInputChange('monthlyRevenue', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Average Job Value ($)
                </label>
                <input
                  type="number"
                  value={inputs.averageJobValue}
                  onChange={(e) => handleInputChange('averageJobValue', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current Monthly Leads
                </label>
                <input
                  type="number"
                  value={inputs.currentLeads}
                  onChange={(e) => handleInputChange('currentLeads', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Conversion Rate (%)
                </label>
                <input
                  type="number"
                  value={inputs.conversionRate}
                  onChange={(e) => handleInputChange('conversionRate', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-silahub-primary to-primary-800 rounded-2xl shadow-xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6">Your Projected Results</h3>
            
            <div className="space-y-6">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <SafeIcon icon={FiUsers} className="w-6 h-6 text-silahub-light" />
                  <span className="font-medium">Monthly Leads</span>
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-sm opacity-75">{inputs.currentLeads} →</span>
                  <span className="text-3xl font-bold">{results.projectedLeads}</span>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <SafeIcon icon={FiTrendingUp} className="w-6 h-6 text-silahub-light" />
                  <span className="font-medium">New Customers</span>
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-sm opacity-75">{results.currentCustomers} →</span>
                  <span className="text-3xl font-bold">{results.projectedCustomers}</span>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <SafeIcon icon={FiDollarSign} className="w-6 h-6 text-silahub-light" />
                  <span className="font-medium">Additional Revenue</span>
                </div>
                <span className="text-3xl font-bold">${results.additionalRevenue.toLocaleString()}</span>
                <span className="text-sm opacity-75 ml-2">/month</span>
              </div>

              <div className="bg-green-500/20 rounded-lg p-4 border border-green-400/30">
                <div className="flex items-center space-x-3 mb-2">
                  <SafeIcon icon={FiCalculator} className="w-6 h-6 text-green-300" />
                  <span className="font-medium">ROI</span>
                </div>
                <span className="text-4xl font-bold text-green-300">{results.roi}%</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white/10 rounded-lg">
              <p className="text-sm opacity-90 mb-4">
                *Based on average results from 500+ Calgary home service businesses
              </p>
              <button className="w-full bg-white text-silahub-primary py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get My Custom Strategy
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveROICalculator;