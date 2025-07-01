import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import LeadCaptureForm from '../leads/LeadCaptureForm';

const { FiArrowRight, FiPhone, FiMail, FiClock } = FiIcons;

const CTASection = () => {
  return (
    <section className="py-20 bg-silahub-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-silahub-secondary mb-8 leading-relaxed">
              Join hundreds of successful home service businesses that have grown their revenue with our proven digital marketing strategies. Get your free marketing audit today.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-silahub-secondary">Free comprehensive marketing audit</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-silahub-secondary">Custom strategy for your business</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-silahub-secondary">No long-term contracts required</span>
              </div>
            </div>

            {/* Contact Options */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <SafeIcon icon={FiPhone} className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Call us directly</div>
                  <div className="text-silahub-secondary">825-288-8332</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <SafeIcon icon={FiMail} className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Email us anytime</div>
                  <div className="text-silahub-secondary">hello@silahub.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-white bg-opacity-20 p-3 rounded-lg">
                  <SafeIcon icon={FiClock} className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Response time</div>
                  <div className="text-silahub-secondary">Within 24 hours guaranteed</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - CTA Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pl-8"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Get Your Free Marketing Audit
                </h3>
                <p className="text-gray-600">
                  Discover untapped opportunities to grow your business
                </p>
              </div>
              <LeadCaptureForm
                source="cta-section"
                ctaText="Get My Free Audit Now"
                className="space-y-4"
              />
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500 mb-4">
                  No spam. We respect your privacy. Unsubscribe at any time.
                </p>
                {/* Trust Badges */}
                <div className="flex justify-center items-center space-x-4 text-xs text-gray-400">
                  <span>✓ 500+ Happy Clients</span>
                  <span>✓ 98% Client Retention</span>
                  <span>✓ Award Winning</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;