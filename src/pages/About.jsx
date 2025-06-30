import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiUsers, FiTrendingUp, FiAward, FiTarget, FiHeart, FiCode, FiArrowRight } = FiIcons;

const About = () => {
  // Set page title and meta description
  React.useEffect(() => {
    document.title = 'About Silahub Technologies - Calgary Digital Marketing Agency for Home Services';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Learn about Silahub Technologies, Calgary\'s premier digital marketing agency specializing in home service businesses. Founded with technical expertise and proven results.');
    }
  }, []);

  const stats = [
    { number: '500+', label: 'Clients Served', icon: FiUsers },
    { number: '98%', label: 'Client Retention', icon: FiHeart },
    { number: '5x', label: 'Average ROI', icon: FiTrendingUp },
    { number: '7+', label: 'Years Experience', icon: FiAward }
  ];

  const values = [
    {
      icon: FiTarget,
      title: 'Results-Driven',
      description: 'We focus on measurable outcomes that directly impact your bottom line. Every strategy is designed to generate leads and increase revenue.'
    },
    {
      icon: FiUsers,
      title: 'Client-Focused',
      description: 'Your success is our success. We work closely with each client to understand their unique needs and deliver personalized solutions.'
    },
    {
      icon: FiCode,
      title: 'Technical Expertise',
      description: 'Our founder\'s technical background ensures we implement cutting-edge solutions that give you a competitive advantage.'
    },
    {
      icon: FiHeart,
      title: 'Transparent Partnership',
      description: 'No hidden fees, no long-term contracts. We believe in building trust through transparency and delivering consistent results.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            >
              About Silahub Technologies
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We're Calgary's premier digital marketing agency, specializing in helping home service businesses 
              and contractors dominate their local markets through proven digital marketing strategies.
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={stat.icon} className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="text-3xl font-bold text-primary-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Silahub Technologies was founded with a simple mission: to help home service businesses 
                  in Calgary thrive in the digital age. Our founder's technical background combined with 
                  deep understanding of local markets creates the perfect foundation for delivering 
                  exceptional results.
                </p>
                <p>
                  We've worked with over 500 home service businesses, from small family-owned operations 
                  to large contracting companies. What sets us apart is our specialized focus on the 
                  unique challenges that contractors and home service providers face in digital marketing.
                </p>
                <p>
                  Every strategy we implement is backed by data, tested for effectiveness, and optimized 
                  for maximum ROI. We don't believe in one-size-fits-all solutions – each client receives 
                  a customized approach designed specifically for their business goals and market conditions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                alt="Silahub Technologies team"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">7+ Years</div>
                <div className="text-sm opacity-90">Serving Calgary</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape how we work with our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <SafeIcon icon={value.icon} className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Silahub Technologies?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another marketing agency. We're your partners in growth.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiTarget} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Specialized Expertise</h3>
              <p className="text-gray-600">
                We exclusively work with home service businesses, so we understand your unique challenges 
                and know what works in your industry.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="bg-secondary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiTrendingUp} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600">
                Our track record speaks for itself. We've helped over 500 businesses increase their 
                leads and revenue through strategic digital marketing.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="bg-accent-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <SafeIcon icon={FiHeart} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Local Focus</h3>
              <p className="text-gray-600">
                Based in Calgary, we understand the local market dynamics and can help you connect 
                with customers in your service area.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss how we can help your home service business grow and dominate your local market.
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Get Started Today</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;