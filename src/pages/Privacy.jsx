import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiShield, FiArrowLeft } = FiIcons;

const Privacy = () => {
  React.useEffect(() => {
    document.title = 'Privacy Policy - Silahub Technologies';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Privacy Policy for Silahub Technologies. Learn how we protect your personal information and data when using our digital marketing services.');
    }
  }, []);

  return (
    <>
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <div className="inline-flex items-center space-x-2 bg-silahub-secondary text-silahub-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <SafeIcon icon={FiShield} className="w-4 h-4" />
              <span>Data Protection</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              At Silahub Technologies, we are committed to protecting your privacy and ensuring transparency in how we handle your personal information.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What Information Do We Collect?</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                When you visit our website or use our services, we may collect the following types of information:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and business details when you contact us or sign up for our services.</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, including pages visited, time spent, and referral sources.</li>
                <li><strong>Cookies and Tracking:</strong> We use cookies to enhance your experience and analyze website traffic.</li>
                <li><strong>Lead Data:</strong> Information you provide when filling out forms for consultations, audits, or marketing services.</li>
              </ul>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How Do We Use Your Information?</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Provide and improve our digital marketing services</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you relevant information about our services and industry insights</li>
                <li>Analyze website performance and user behavior to enhance our offerings</li>
                <li>Comply with legal obligations and prevent fraud</li>
              </ul>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Sharing and Protection</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                We take the security of your data seriously and implement appropriate measures to protect it:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>We do not sell, rent, or trade your personal information to third parties</li>
                <li>Data is stored securely using industry-standard encryption</li>
                <li>We only share information when required by law or with your explicit consent</li>
                <li>Our website uses SSL encryption to protect data transmission</li>
                <li>We retain your information only as long as necessary for our business purposes</li>
              </ul>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Our website uses cookies to improve your browsing experience and analyze site traffic. You can control cookie preferences through your browser settings.
              </p>
              <p>
                We use analytics tools like Google Analytics to understand how visitors interact with our site. This helps us improve our services and content.
              </p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate or incomplete data</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications at any time</li>
                <li>File a complaint with relevant privacy authorities</li>
              </ul>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="space-y-2">
                  <p><strong>Email:</strong> privacy@silahub.com</p>
                  <p><strong>Phone:</strong> 825 558 1832</p>
                  <p><strong>Address:</strong> Calgary, Alberta, Canada</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
              </p>
              <p><em>Last updated: January 15, 2024</em></p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-white mb-6">Need Help with Your Privacy Questions?</h2>
            <p className="text-lg text-primary-100 mb-8">Contact our team directly or explore our services to see how we can help your business grow.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2">
                <span>Contact Us</span>
                <SafeIcon icon={FiArrowLeft} className="w-5 h-5 rotate-180" />
              </Link>
              <Link to="/services" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-flex items-center justify-center space-x-2">
                <span>Our Services</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Privacy;