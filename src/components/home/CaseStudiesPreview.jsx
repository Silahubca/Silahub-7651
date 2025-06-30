import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiTrendingUp, FiUsers, FiDollarSign, FiArrowRight, FiExternalLink } = FiIcons;

const CaseStudiesPreview = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Calgary Plumbing Co.',
      industry: 'Plumbing Services',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=250&fit=crop',
      challenge: 'Low online visibility and inconsistent lead generation',
      solution: 'Comprehensive SEO strategy and Google Ads optimization',
      results: [
        { metric: 'Lead Increase', value: '400%', icon: FiTrendingUp },
        { metric: 'Monthly Revenue', value: '+$50K', icon: FiDollarSign },
        { metric: 'Website Traffic', value: '300%', icon: FiUsers }
      ],
      timeframe: '6 months',
      testimonial: "Silahub completely transformed our online presence. We're now the #1 plumber in Calgary search results."
    },
    {
      id: 2,
      title: 'Elite HVAC Services',
      industry: 'HVAC & Heating',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=250&fit=crop',
      challenge: 'Seasonal business fluctuations and poor conversion rates',
      solution: 'Year-round marketing strategy with conversion optimization',
      results: [
        { metric: 'Conversion Rate', value: '+250%', icon: FiTrendingUp },
        { metric: 'Cost Per Lead', value: '-60%', icon: FiDollarSign },
        { metric: 'Market Share', value: '+35%', icon: FiUsers }
      ],
      timeframe: '8 months',
      testimonial: "We now get consistent leads year-round instead of just during peak seasons."
    },
    {
      id: 3,
      title: 'ProClean Services',
      industry: 'Cleaning Services',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop',
      challenge: 'High competition and low brand recognition',
      solution: 'Brand development with targeted social media campaigns',
      results: [
        { metric: 'Brand Awareness', value: '+180%', icon: FiTrendingUp },
        { metric: 'Social Engagement', value: '+500%', icon: FiUsers },
        { metric: 'Monthly Bookings', value: '+320%', icon: FiDollarSign }
      ],
      timeframe: '4 months',
      testimonial: "Our brand is now recognized throughout Calgary. Customer loyalty has never been higher."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real Results from Real Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped home service businesses just like yours achieve remarkable 
            growth and dominate their local markets.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-silahub-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {study.industry}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {study.title}
                </h3>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Challenge:</strong> {study.challenge}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Solution:</strong> {study.solution}
                  </p>
                </div>

                {/* Results */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="text-center">
                      <div className="bg-silahub-light w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <SafeIcon icon={result.icon} className="w-5 h-5 text-silahub-primary" />
                      </div>
                      <div className="text-lg font-bold text-silahub-primary">{result.value}</div>
                      <div className="text-xs text-gray-600">{result.metric}</div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <blockquote className="text-sm text-gray-600 italic mb-4">
                  "{study.testimonial}"
                </blockquote>

                {/* Timeframe */}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">
                    Results in {study.timeframe}
                  </span>
                  <Link
                    to={`/case-studies`}
                    className="text-silahub-primary hover:text-primary-700 transition-colors inline-flex items-center space-x-1 text-sm font-medium"
                  >
                    <span>Read Full Case</span>
                    <SafeIcon icon={FiExternalLink} className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            to="/case-studies"
            className="bg-silahub-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors inline-flex items-center space-x-2"
          >
            <span>View All Case Studies</span>
            <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;