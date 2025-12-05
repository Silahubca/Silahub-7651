import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiFileText, FiArrowLeft } = FiIcons;

const Terms = () => {
  React.useEffect(() => {
    document.title = 'Terms of Service - Silahub Technologies';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Terms of Service for Silahub Technologies. Understand the terms and conditions for using our digital marketing services and website.');
    }
  }, []);

  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="inline-flex items-center space-x-2 bg-silahub-secondary text-silahub-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <SafeIcon icon={FiFileText} className="w-4 h-4" />
              <span>Legal Agreement</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These terms govern your use of Silahub Technologies' services and website. By using our services, you agree to these terms.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Acceptance of Terms</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                By accessing and using the services provided by Silahub Technologies, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to these terms, please do not use our services.
              </p>
              <p>
                These terms apply to all visitors, users, and others who access or use our services, including but not limited to SEO, Google Ads, website design, and other digital marketing services.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Description of Service</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Silahub Technologies provides digital marketing services including:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Search Engine Optimization (SEO) services</li>
                <li>Google Ads and Pay-Per-Click (PPC) management</li>
                <li>Facebook Ads and social media advertising</li>
                <li>Website design and development</li>
                <li>Content marketing and creation</li>
                <li>Reputation management services</li>
              </ul>
              <p>
                Services are provided on a month-to-month basis unless otherwise specified in a written agreement.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment Terms</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Payment terms vary by service:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Monthly services are billed in advance and due on the 1st of each month</li>
                <li>Ad spend for Google Ads and Facebook Ads is billed monthly plus our management fee</li>
                <li>Website development is typically billed 50% upfront and 50% upon completion</li>
                <li>Late payments may result in service suspension</li>
                <li>All prices are in Canadian dollars unless otherwise specified</li>
              </ul>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cancellation and Refunds</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We offer flexible service terms:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>No long-term contracts required for most services</li>
                <li>Monthly services can be cancelled with 30 days notice</li>
                <li>Website development is non-refundable once work has begun</li>
                <li>Refunds for unused ad spend are processed within 30 days</li>
                <li>We guarantee measurable results or refunds as outlined in our guarantee policy</li>
              </ul>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Ownership of materials:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Website designs and code remain our intellectual property until final payment</li>
                <li>Upon completion and payment, website designs are licensed to the client for their use</li>
                <li>Content created for clients becomes their property after final payment</li>
                <li>Silahub Technologies retains the right to showcase completed work in our portfolio</li>
              </ul>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                While we strive for excellent results, limitations apply:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>SEO results are not guaranteed due to Google's algorithm changes</li>
                <li>Ad performance depends on budget, competition, and market conditions</li>
                <li>Our liability is limited to the amount paid for services in the preceding 12 months</li>
                <li>We are not liable for indirect or consequential damages</li>
              </ul>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Confidentiality</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We protect your confidential information:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Client data and business information remain confidential</li>
                <li>We implement appropriate security measures to protect your data</li>
                <li>Confidentiality obligations continue even after our agreement ends</li>
                <li>We may use anonymized data for case studies and marketing purposes</li>
              </ul>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                These terms are governed by and construed in accordance with the laws of Alberta, Canada. Any disputes will be resolved in the courts of Calgary, Alberta.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-2">
                  <p><strong>Email:</strong> legal@silahub.com</p>
                  <p><strong>Phone:</strong> 825-288-8332</p>
                  <p><strong>Address:</strong> Calgary, Alberta, Canada</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of modified terms.
              </p>
              <p><em>Last updated: January 15, 2024</em></p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-primary-100 mb-8">Have questions about our terms or want to discuss our services? Let's talk.</p>
            <Link to="/contact-us" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2">
              <span>Contact Us</span>
              <SafeIcon icon={FiArrowLeft} className="w-5 h-5 rotate-180" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Terms;