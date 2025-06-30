import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiCheck, FiX, FiStar, FiTarget, FiShield } = FiIcons;

const CompetitorComparison = () => {
  const [activeTab, setActiveTab] = useState('services');

  const comparisonData = {
    services: [
      { feature: 'Calgary-Only Focus', silahub: true, competitor1: false, competitor2: false },
      { feature: 'Home Service Specialization', silahub: true, competitor1: false, competitor2: true },
      { feature: 'Technical Founder', silahub: true, competitor1: false, competitor2: false },
      { feature: 'Real-Time ROI Calculator', silahub: true, competitor1: false, competitor2: false },
      { feature: 'Live Chat Support', silahub: true, competitor1: true, competitor2: false },
      { feature: 'Video Testimonials', silahub: true, competitor1: false, competitor2: true },
      { feature: 'Local Presence Map', silahub: true, competitor1: false, competitor2: false },
      { feature: 'Monthly Strategy Sessions', silahub: true, competitor1: false, competitor2: false }
    ],
    pricing: [
      { feature: 'No Setup Fees', silahub: true, competitor1: false, competitor2: true },
      { feature: 'No Long-term Contracts', silahub: true, competitor1: false, competitor2: false },
      { feature: 'Transparent Pricing', silahub: true, competitor1: false, competitor2: true },
      { feature: 'ROI Guarantee', silahub: true, competitor1: false, competitor2: false },
      { feature: 'Free Website Audit', silahub: true, competitor1: true, competitor2: true },
      { feature: 'Monthly Payment Plans', silahub: true, competitor1: false, competitor2: false }
    ],
    results: [
      { feature: '500+ Happy Clients', silahub: true, competitor1: false, competitor2: false },
      { feature: '98% Client Retention', silahub: true, competitor1: false, competitor2: false },
      { feature: 'Average 5x ROI', silahub: true, competitor1: false, competitor2: false },
      { feature: 'Calgary Market Leader', silahub: true, competitor1: false, competitor2: false },
      { feature: '24/7 Support', silahub: true, competitor1: true, competitor2: false },
      { feature: 'Google Partner Status', silahub: true, competitor1: true, competitor2: true }
    ]
  };

  const tabs = [
    { id: 'services', label: 'Services & Features', icon: FiTarget },
    { id: 'pricing', label: 'Pricing & Terms', icon: FiShield },
    { id: 'results', label: 'Results & Track Record', icon: FiStar }
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Silahub Over Other Agencies?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See exactly how we compare to other Calgary marketing agencies. The difference is clear.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-xl p-2 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-silahub-primary text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <SafeIcon icon={tab.icon} className="w-5 h-5" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Table */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-6 px-6 font-semibold text-gray-900">Features</th>
                  <th className="text-center py-6 px-6">
                    <div className="bg-silahub-primary text-white px-4 py-2 rounded-full font-semibold">
                      Silahub Technologies
                    </div>
                  </th>
                  <th className="text-center py-6 px-6 text-gray-600">Competitor A</th>
                  <th className="text-center py-6 px-6 text-gray-600">Competitor B</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData[activeTab].map((item, index) => (
                  <tr key={index} className="border-t border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-6 font-medium text-gray-900">{item.feature}</td>
                    <td className="text-center py-4 px-6">
                      {item.silahub ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                          <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-600" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                          <SafeIcon icon={FiX} className="w-5 h-5 text-red-600" />
                        </div>
                      )}
                    </td>
                    <td className="text-center py-4 px-6">
                      {item.competitor1 ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                          <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-600" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                          <SafeIcon icon={FiX} className="w-5 h-5 text-red-600" />
                        </div>
                      )}
                    </td>
                    <td className="text-center py-4 px-6">
                      {item.competitor2 ? (
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
                          <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-600" />
                        </div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-8 h-8 bg-red-100 rounded-full">
                          <SafeIcon icon={FiX} className="w-5 h-5 text-red-600" />
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 mb-6">
              The choice is clear. Get the Calgary advantage with Silahub.
            </p>
            <a
              href="/contact"
              className="bg-silahub-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>Choose the Calgary Leader</span>
              <SafeIcon icon={FiTarget} className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompetitorComparison;