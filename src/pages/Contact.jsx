import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import LeadCaptureForm from '../components/leads/LeadCaptureForm';

const { FiPhone, FiMail, FiMapPin, FiClock, FiMessageCircle, FiFacebook, FiLinkedin, FiInstagram, FiYoutube, FiTwitter } = FiIcons;

const Contact = () => {
  React.useEffect(() => {
    document.title = 'Contact Silahub Technologies - Calgary Digital Marketing Agency | Free Consultation';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Contact Silahub Technologies for your free marketing consultation. Call 825 558 1832 or email hello@silahub.com. Serving Calgary home service businesses.');
    }
  }, []);

  const contactInfo = [
    { icon: FiPhone, title: 'Phone', details: '825 558 1832', description: 'Call us directly for immediate assistance', action: 'tel:8255581832' },
    { icon: FiMail, title: 'Email', details: 'hello@silahub.com', description: 'Send us an email anytime', action: 'mailto:hello@silahub.com' },
    { icon: FiMapPin, title: 'Location', details: 'Calgary, Alberta', description: 'Serving Calgary, Alberta & USA', action: null },
    { icon: FiClock, title: 'Response Time', details: 'Within 24 hours', description: 'Guaranteed response to all inquiries', action: null }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: FiFacebook, url: 'https://www.facebook.com/silahubtechnologies' },
    { name: 'Instagram', icon: FiInstagram, url: 'https://www.instagram.com/silahubtechnologies' },
    { name: 'LinkedIn', icon: FiLinkedin, url: 'https://www.linkedin.com/company/silahubtechnologies' },
    { name: 'YouTube', icon: FiYoutube, url: 'https://www.youtube.com/@silahubtechnologies' },
    { name: 'X (Twitter)', icon: FiTwitter, url: 'https://x.com/silahubtech' }
  ];

  const faqs = [
    {
      question: 'How long does it take to see results?',
      answer: 'Most clients start seeing improved website traffic within 30 days. For SEO, significant ranking improvements typically occur within 3-6 months. Google Ads can generate leads immediately once campaigns are optimized.'
    },
    {
      question: 'Do you work with businesses outside Calgary?',
      answer: 'Yes! While we specialize in Calgary businesses, we work with home service companies across Alberta and select markets in the USA.'
    },
    {
      question: 'What makes you different from other agencies?',
      answer: 'We exclusively focus on home service businesses, so we understand your unique challenges. Our technical background and proven track record with 500+ clients sets us apart.'
    },
    {
      question: "Do you require long-term contracts?",
      answer: "No long-term contracts required. We believe our results should speak for themselves. Most clients stay with us because of the value we provide."
    },
    {
      question: 'How much does your service cost?',
      answer: 'Our pricing varies based on your specific needs and goals. We offer customized packages starting from $500/month. Contact us for a free audit and personalized quote.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get Your Free Marketing Audit
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to transform your home service business? Contact us today for a free marketing audit and discover how we can help you dominate your local market.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h2>
              <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours with your free marketing audit and custom strategy.</p>
              <LeadCaptureForm source="contact-page" ctaText="Get My Free Audit" className="space-y-6" />
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">No spam. We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">Prefer to talk directly? We're here to help. Reach out through any of these channels.</p>
              </div>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary-100 p-3 rounded-lg flex-shrink-0">
                      <SafeIcon icon={item.icon} className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      {item.action ? (
                        <a href={item.action} className="text-primary-600 hover:text-primary-700 font-medium transition-colors">
                          {item.details}
                        </a>
                      ) : (
                        <p className="text-primary-600 font-medium">{item.details}</p>
                      )}
                      <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="pt-8 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 p-3 rounded-lg hover:bg-primary-100 transition-colors group"
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <SafeIcon icon={social.icon} className="w-5 h-5 text-gray-600 group-hover:text-primary-600 transition-colors" />
                    </a>
                  ))}
                  {/* TikTok Link */}
                  <a
                    href="https://www.tiktok.com/@silahub.technolog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-100 p-3 rounded-lg hover:bg-primary-100 transition-colors group flex items-center justify-center"
                    aria-label="Follow us on TikTok"
                  >
                    <span className="text-gray-600 group-hover:text-primary-600 transition-colors font-bold text-sm">TT</span>
                  </a>
                </div>
                <p className="text-sm text-gray-500 mt-3">Stay updated with our latest tips and success stories</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12 lg:mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg lg:text-xl text-gray-600">Get answers to common questions about our services and process.</p>
          </motion.div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-lg lg:text-xl text-primary-100 mb-8">Don't wait any longer. Your competitors are already investing in digital marketing. Let's get your business ahead of the curve.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:8255581832" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center space-x-2">
                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                <span>Call Now: 825 558 1832</span>
              </a>
              <a href="mailto:hello@silahub.com" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-flex items-center justify-center space-x-2">
                <SafeIcon icon={FiMail} className="w-5 h-5" />
                <span>Send Email</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;