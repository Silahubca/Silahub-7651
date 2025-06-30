import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import LeadCaptureForm from '../../components/leads/LeadCaptureForm';

const { FiEdit3, FiVideo, FiMail, FiTrendingUp, FiUsers, FiCheck, FiArrowRight, FiTarget } = FiIcons;

const ContentMarketingCalgary = () => {
  React.useEffect(() => {
    document.title = 'Content Marketing Calgary | Content Strategy Services - Silahub Technologies';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Professional content marketing services in Calgary. Blog writing, video content, email marketing for home service businesses. Build authority and attract customers with quality content.');
    }
  }, []);

  const contentServices = [
    {
      icon: FiEdit3,
      title: 'Blog Content & SEO Writing',
      description: 'Attract customers with valuable, search-optimized content',
      features: [
        'SEO-optimized blog posts',
        'Industry-specific content',
        'Keyword-targeted articles',
        'Content calendar planning'
      ]
    },
    {
      icon: FiVideo,
      title: 'Video Content Creation',
      description: 'Engage audiences with compelling video content',
      features: [
        'Promotional videos',
        'Educational content',
        'Customer testimonials',
        'Social media videos'
      ]
    },
    {
      icon: FiMail,
      title: 'Email Marketing Campaigns',
      description: 'Nurture leads and retain customers with email marketing',
      features: [
        'Email sequence creation',
        'Newsletter campaigns',
        'Lead nurturing workflows',
        'Customer retention emails'
      ]
    },
    {
      icon: FiUsers,
      title: 'Social Media Content',
      description: 'Build your brand with engaging social media content',
      features: [
        'Platform-specific content',
        'Visual content creation',
        'Engagement strategies',
        'Brand voice development'
      ]
    }
  ];

  const contentTypes = [
    { 
      type: 'How-to Guides',
      description: 'Educational content that positions you as an expert',
      example: '"How to Choose the Right HVAC System for Your Calgary Home"'
    },
    {
      type: 'Local Market Insights',
      description: 'Calgary-specific content that resonates with local customers',
      example: '"Calgary Weather and Your Plumbing: What Homeowners Need to Know"'
    },
    {
      type: 'Case Studies',
      description: 'Success stories that build trust and credibility',
      example: '"How We Saved a Calgary Family $2,000 on Energy Bills"'
    },
    {
      type: 'FAQ Content',
      description: 'Answer common customer questions and concerns',
      example: '"Top 10 Questions Calgary Homeowners Ask About Roofing"'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center space-x-2 bg-silahub-secondary text-silahub-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <SafeIcon icon={FiEdit3} className="w-4 h-4" />
                  <span>Build Authority & Trust</span>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                  Content Marketing Calgary - <span className="text-silahub-primary">Attract & Engage Customers</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Build authority, attract customers, and grow your Calgary home service business with strategic 
                  content marketing that educates, engages, and converts.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Build industry authority</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Attract qualified leads</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Improve SEO rankings</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Nurture customer relationships</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-silahub-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>Get Content Strategy</span>
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                </Link>
                <Link
                  to="/blog"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-silahub-primary hover:text-silahub-primary transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <span>View Our Content</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Free Content Marketing Consultation
                  </h3>
                  <p className="text-gray-600">
                    Discover how content can grow your business
                  </p>
                </div>
                <LeadCaptureForm 
                  source="content-marketing-calgary-page"
                  ctaText="Get My Content Strategy"
                  className="space-y-4"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Content Marketing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From blog content to video marketing, we create compelling content that attracts customers 
              and builds your reputation as Calgary's trusted home service expert.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {contentServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-silahub-primary text-white p-3 rounded-lg">
                    <SafeIcon icon={service.icon} className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Content That Converts Calgary Customers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We create various types of content specifically designed to attract and convert 
              Calgary homeowners into loyal customers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {contentTypes.map((content, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {content.type}
                </h3>
                <p className="text-gray-600 mb-4">
                  {content.description}
                </p>
                <div className="bg-silahub-light rounded-lg p-4">
                  <p className="text-sm text-gray-700 italic">
                    Example: {content.example}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Marketing Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Content Marketing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A strategic approach to content creation that builds your brand and drives business growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Strategy & Planning',
                description: 'Research your audience, competitors, and develop a content strategy aligned with your business goals.'
              },
              {
                step: '02',
                title: 'Content Creation',
                description: 'Create high-quality, engaging content that educates your audience and showcases your expertise.'
              },
              {
                step: '03',
                title: 'Distribution & Promotion',
                description: 'Distribute content across multiple channels and promote it to reach your target Calgary audience.'
              },
              {
                step: '04',
                title: 'Performance Analysis',
                description: 'Track content performance, engagement metrics, and lead generation to optimize future content.'
              },
              {
                step: '05',
                title: 'Content Optimization',
                description: 'Continuously improve content based on performance data and changing market trends.'
              },
              {
                step: '06',
                title: 'Lead Nurturing',
                description: 'Use content to nurture leads through the customer journey from awareness to conversion.'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="text-3xl font-bold text-silahub-primary mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Content Marketing Works for Calgary Businesses
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-silahub-primary text-white p-2 rounded-lg flex-shrink-0">
                    <SafeIcon icon={FiTrendingUp} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Builds Trust & Authority
                    </h3>
                    <p className="text-gray-600">
                      Educational content positions you as the expert, building trust before customers even contact you.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-silahub-primary text-white p-2 rounded-lg flex-shrink-0">
                    <SafeIcon icon={FiTarget} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Attracts Qualified Leads
                    </h3>
                    <p className="text-gray-600">
                      Content attracts people actively searching for information, leading to higher-quality leads.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-silahub-primary text-white p-2 rounded-lg flex-shrink-0">
                    <SafeIcon icon={FiUsers} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Supports Customer Journey
                    </h3>
                    <p className="text-gray-600">
                      Content guides customers through their decision-making process, from awareness to purchase.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-silahub-primary text-white p-2 rounded-lg flex-shrink-0">
                    <SafeIcon icon={FiTrendingUp} className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Improves SEO Performance
                    </h3>
                    <p className="text-gray-600">
                      Fresh, relevant content helps improve your search rankings and online visibility.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-silahub-primary to-primary-800 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">
                Ready to Start Your Content Journey?
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-silahub-light" />
                  <span>Content strategy consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-silahub-light" />
                  <span>Custom content calendar</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-silahub-light" />
                  <span>Professional content creation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 text-silahub-light" />
                  <span>Performance tracking & optimization</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="w-full bg-white text-silahub-primary py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Start Creating Content</span>
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-silahub-primary to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Build Authority & Attract More Customers
            </h2>
            <p className="text-xl text-silahub-light mb-8">
              Strategic content marketing that educates your audience and grows your Calgary business.
            </p>
            <Link
              to="/contact"
              className="bg-white text-silahub-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Get Your Content Strategy</span>
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContentMarketingCalgary;