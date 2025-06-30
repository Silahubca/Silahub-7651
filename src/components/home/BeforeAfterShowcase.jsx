import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiArrowRight, FiTrendingUp, FiUsers, FiDollarSign } = FiIcons;

const BeforeAfterShowcase = () => {
  const [activeCase, setActiveCase] = useState(0);

  const beforeAfterCases = [
    {
      company: "Calgary Plumbing Pro",
      industry: "Plumbing",
      timeframe: "6 months",
      before: {
        monthlyLeads: 8,
        avgJobValue: 450,
        googleRanking: "Page 3+",
        monthlyRevenue: 18000,
        webTraffic: 200
      },
      after: {
        monthlyLeads: 85,
        avgJobValue: 650,
        googleRanking: "#1-3",
        monthlyRevenue: 55000,
        webTraffic: 2400
      },
      screenshot: {
        before: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
        after: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
      }
    },
    {
      company: "Elite HVAC Calgary",
      industry: "HVAC", 
      timeframe: "8 months",
      before: {
        monthlyLeads: 12,
        avgJobValue: 850,
        googleRanking: "Page 2",
        monthlyRevenue: 28000,
        webTraffic: 350
      },
      after: {
        monthlyLeads: 65,
        avgJobValue: 1200,
        googleRanking: "#1",
        monthlyRevenue: 78000,
        webTraffic: 3200
      },
      screenshot: {
        before: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
        after: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
      }
    },
    {
      company: "ProClean Services",
      industry: "Cleaning",
      timeframe: "4 months", 
      before: {
        monthlyLeads: 15,
        avgJobValue: 180,
        googleRanking: "Page 4",
        monthlyRevenue: 8500,
        webTraffic: 150
      },
      after: {
        monthlyLeads: 95,
        avgJobValue: 250,
        googleRanking: "#2",
        monthlyRevenue: 23750,
        webTraffic: 1800
      },
      screenshot: {
        before: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
        after: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop"
      }
    }
  ];

  const currentCase = beforeAfterCases[activeCase];

  const calculateChange = (before, after) => {
    return Math.round(((after - before) / before) * 100);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Before & After: Real Transformations
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See the dramatic improvements our Calgary clients have experienced. These are real numbers from real businesses.
          </p>
        </motion.div>

        {/* Case Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-xl p-2">
            {beforeAfterCases.map((case_, index) => (
              <button
                key={index}
                onClick={() => setActiveCase(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeCase === index
                    ? 'bg-silahub-primary text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {case_.company}
              </button>
            ))}
          </div>
        </div>

        {/* Before/After Comparison */}
        <motion.div
          key={activeCase}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 rounded-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-silahub-primary to-primary-600 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">{currentCase.company}</h3>
                <p className="text-primary-100">{currentCase.industry} • {currentCase.timeframe} transformation</p>
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span className="font-semibold">Results in {currentCase.timeframe}</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 divide-x divide-gray-700">
            {/* Before */}
            <div className="p-8">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-red-400 mb-2">BEFORE</h4>
                <p className="text-gray-400">Struggling to get leads and grow</p>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Monthly Leads</span>
                    <SafeIcon icon={FiUsers} className="w-5 h-5 text-red-400" />
                  </div>
                  <div className="text-2xl font-bold text-red-400">{currentCase.before.monthlyLeads}</div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Monthly Revenue</span>
                    <SafeIcon icon={FiDollarSign} className="w-5 h-5 text-red-400" />
                  </div>
                  <div className="text-2xl font-bold text-red-400">${currentCase.before.monthlyRevenue.toLocaleString()}</div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Google Ranking</span>
                    <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-red-400" />
                  </div>
                  <div className="text-2xl font-bold text-red-400">{currentCase.before.googleRanking}</div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Website Traffic</span>
                    <SafeIcon icon={FiUsers} className="w-5 h-5 text-red-400" />
                  </div>
                  <div className="text-2xl font-bold text-red-400">{currentCase.before.webTraffic}/month</div>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="p-8">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold text-green-400 mb-2">AFTER</h4>
                <p className="text-gray-400">Thriving with consistent growth</p>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Monthly Leads</span>
                    <SafeIcon icon={FiUsers} className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl font-bold text-green-400">{currentCase.after.monthlyLeads}</div>
                    <div className="bg-green-500 text-white px-2 py-1 rounded text-sm">
                      +{calculateChange(currentCase.before.monthlyLeads, currentCase.after.monthlyLeads)}%
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Monthly Revenue</span>
                    <SafeIcon icon={FiDollarSign} className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl font-bold text-green-400">${currentCase.after.monthlyRevenue.toLocaleString()}</div>
                    <div className="bg-green-500 text-white px-2 py-1 rounded text-sm">
                      +{calculateChange(currentCase.before.monthlyRevenue, currentCase.after.monthlyRevenue)}%
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Google Ranking</span>
                    <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="text-2xl font-bold text-green-400">{currentCase.after.googleRanking}</div>
                </div>

                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300">Website Traffic</span>
                    <SafeIcon icon={FiUsers} className="w-5 h-5 text-green-400" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl font-bold text-green-400">{currentCase.after.webTraffic.toLocaleString()}/month</div>
                    <div className="bg-green-500 text-white px-2 py-1 rounded text-sm">
                      +{calculateChange(currentCase.before.webTraffic, currentCase.after.webTraffic)}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-silahub-primary to-primary-600 p-6 text-center">
            <p className="mb-4 text-primary-100">Ready for your own transformation?</p>
            <a
              href="/contact"
              className="bg-white text-silahub-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Get Your Free Audit</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfterShowcase;