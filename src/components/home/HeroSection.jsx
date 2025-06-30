import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import LeadCaptureForm from '../leads/LeadCaptureForm';

const { FiPlay, FiTrendingUp, FiUsers, FiAward, FiArrowRight, FiX } = FiIcons;

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative bg-gradient-to-br from-silahub-light via-white to-silahub-secondary overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-silahub-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-silahub-light rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-silahub-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-silahub-secondary text-silahub-primary px-4 py-2 rounded-full text-sm font-medium"
            >
              <SafeIcon icon={FiTrendingUp} className="w-4 h-4" />
              <span>Calgary's #1 Marketing Agency for Home Services</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Grow Your
                <span className="bg-gradient-to-r from-silahub-primary to-primary-700 bg-clip-text text-transparent">
                  {' '}Home Service{' '}
                </span>
                Business Online
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                We help contractors and home service businesses in Calgary dominate their local market 
                with proven digital marketing strategies that generate qualified leads and increase revenue.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-6"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-silahub-primary">500+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-silahub-primary">98%</div>
                <div className="text-sm text-gray-600">Client Retention</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-silahub-primary">5x</div>
                <div className="text-sm text-gray-600">ROI Average</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contact"
                className="bg-silahub-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-800 transition-all duration-200 flex items-center justify-center space-x-2 group"
              >
                <span>Get Free Marketing Audit</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => setShowVideo(true)}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-silahub-primary hover:text-silahub-primary transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <SafeIcon icon={FiPlay} className="w-5 h-5" />
                <span>Watch Success Stories</span>
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center space-x-6 pt-4"
            >
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiUsers} className="w-5 h-5 text-silahub-primary" />
                <span className="text-sm text-gray-600">Trusted by 500+ businesses</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiAward} className="w-5 h-5 text-silahub-primary" />
                <span className="text-sm text-gray-600">Award-winning agency</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pl-8"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Get Your Free Marketing Audit
                </h3>
                <p className="text-gray-600">
                  Discover how to 3x your leads in the next 90 days
                </p>
              </div>

              <LeadCaptureForm 
                source="hero"
                ctaText="Get My Free Audit"
                className="space-y-4"
              />

              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  No spam. We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <SafeIcon icon={FiX} className="w-8 h-8" />
            </button>
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Silahub Success Stories"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;