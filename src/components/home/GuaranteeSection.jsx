import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiShield, FiTrendingUp, FiRefreshCw, FiAward, FiClock, FiTarget } = FiIcons;

const GuaranteeSection = () => {
  const guarantees = [
    {
      icon: FiTrendingUp,
      title: "Results Guarantee",
      description: "See measurable improvements within 90 days or get your money back",
      details: "We guarantee increased website traffic, improved search rankings, or more qualified leads within the first 90 days.",
      badge: "90-Day Promise"
    },
    {
      icon: FiClock,
      title: "Response Time Guarantee", 
      description: "24-hour response time to all inquiries, guaranteed",
      details: "Every email, call, or message gets a response within 24 hours. Usually much faster during business hours.",
      badge: "24-Hour Max"
    },
    {
      icon: FiRefreshCw,
      title: "No Lock-in Guarantee",
      description: "Cancel anytime with 30 days notice. No penalties, no hassle",
      details: "We earn your business every month. No long-term contracts because we're confident in our results.",
      badge: "Cancel Anytime"
    },
    {
      icon: FiShield,
      title: "Data Security Guarantee",
      description: "Your business data is protected with enterprise-level security",
      details: "We use bank-level encryption and never share your data. Full compliance with privacy regulations.",
      badge: "100% Secure"
    },
    {
      icon: FiTarget,
      title: "Local Focus Guarantee",
      description: "We only work with Calgary businesses - you get our full attention",
      details: "Unlike agencies that serve everyone everywhere, we specialize exclusively in the Calgary market.",
      badge: "Calgary Only"
    },
    {
      icon: FiAward,
      title: "Quality Guarantee",
      description: "All work reviewed by our technical founder before delivery",
      details: "Every campaign, website, and strategy is personally reviewed by our founder with 15+ years of technical experience.",
      badge: "Founder Reviewed"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <SafeIcon icon={FiShield} className="w-4 h-4" />
            <span>Risk-Free Partnership</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Iron-Clad Guarantees
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're so confident in our ability to grow your Calgary business, we back everything with these guarantees.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow relative overflow-hidden"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {guarantee.badge}
                </span>
              </div>

              {/* Icon */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <SafeIcon icon={guarantee.icon} className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {guarantee.title}
              </h3>
              <p className="text-gray-600 mb-4 font-medium">
                {guarantee.description}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                {guarantee.details}
              </p>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience Risk-Free Growth?
            </h3>
            <p className="text-gray-600 mb-6">
              With these guarantees, you have nothing to lose and everything to gain. Let's grow your Calgary business together.
            </p>
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all inline-flex items-center space-x-2"
            >
              <SafeIcon icon={FiShield} className="w-5 h-5" />
              <span>Start Risk-Free Today</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;