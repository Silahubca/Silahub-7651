import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiExternalLink, FiEye, FiCode, FiTarget, FiTrendingUp, FiUsers, FiSearch, FiFilter, FiGrid, FiList } = FiIcons;

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);

  // Set page title and meta description
  React.useEffect(() => {
    document.title = 'Website Portfolio - Home Service Website Designs | Silahub Technologies';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'View our portfolio of professional website designs for home service businesses. Custom websites for plumbers, HVAC, electricians, contractors and more.');
    }
  }, []);

  const categories = [
    'all',
    'plumbing',
    'hvac',
    'electrical',
    'roofing',
    'cleaning',
    'landscaping',
    'construction',
    'maintenance',
    'security'
  ];

  const portfolioItems = [
    // Plumbing
    {
      id: 1,
      title: 'Calgary Plumbing Pro',
      category: 'plumbing',
      businessType: 'Plumber',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
      mobileImage: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=300&h=500&fit=crop',
      url: '#',
      description: 'Professional plumbing website focused on emergency services and local Calgary market.',
      features: ['Emergency Call Button', '24/7 Service Highlighting', 'Service Area Map', 'Customer Reviews'],
      technologies: ['React', 'Local SEO', 'Mobile-First Design', 'Lead Generation Forms'],
      goals: 'Increase emergency service calls and establish local market dominance',
      results: {
        trafficIncrease: '300%',
        leadIncrease: '400%',
        conversionRate: '8.5%',
        timeframe: '6 months'
      },
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 2,
      title: 'Elite HVAC Services',
      category: 'hvac',
      businessType: 'HVAC',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=400&fit=crop',
      mobileImage: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=300&h=500&fit=crop',
      url: '#',
      description: 'Modern HVAC website showcasing heating, cooling, and maintenance services with seasonal promotions.',
      features: ['Seasonal Service Promotions', 'Energy Efficiency Calculator', 'Maintenance Scheduling', 'Before/After Gallery'],
      technologies: ['WordPress', 'Appointment Booking', 'SEO Optimization', 'Social Proof Integration'],
      goals: 'Generate year-round leads and promote maintenance contracts',
      results: {
        trafficIncrease: '250%',
        leadIncrease: '320%',
        conversionRate: '7.2%',
        timeframe: '8 months'
      },
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 3,
      title: 'Spark Electrical Solutions',
      category: 'electrical',
      businessType: 'Electrician',
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&h=400&fit=crop',
      mobileImage: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=300&h=500&fit=crop',
      url: '#',
      description: 'Safety-focused electrical services website emphasizing licensed professionals and code compliance.',
      features: ['Safety Certifications Display', 'Emergency Response', 'Code Compliance Info', 'Project Portfolio'],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Business Schema'],
      goals: 'Build trust through safety credentials and increase residential service calls',
      results: {
        trafficIncrease: '280%',
        leadIncrease: '350%',
        conversionRate: '9.1%',
        timeframe: '5 months'
      },
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 4,
      title: 'ProClean House Cleaning',
      category: 'cleaning',
      businessType: 'House cleaning',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      mobileImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=500&fit=crop',
      url: '#',
      description: 'Clean, modern design for house cleaning services with online booking and service customization.',
      features: ['Online Booking System', 'Service Customization', 'Recurring Appointments', 'Eco-Friendly Options'],
      technologies: ['React', 'Booking Integration', 'Payment Processing', 'Customer Portal'],
      goals: 'Streamline booking process and highlight eco-friendly cleaning options',
      results: {
        trafficIncrease: '200%',
        leadIncrease: '380%',
        conversionRate: '11.3%',
        timeframe: '4 months'
      },
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 5,
      title: 'Calgary Roofing Experts',
      category: 'roofing',
      businessType: 'Roofing',
      image: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=600&h=400&fit=crop',
      mobileImage: 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=300&h=500&fit=crop',
      url: '#',
      description: 'Weather-resistant roofing website showcasing durability, warranties, and storm damage services.',
      features: ['Weather Alerts Integration', 'Insurance Claim Assistance', 'Material Showcase', 'Warranty Information'],
      technologies: ['WordPress', 'Weather API', 'Insurance Forms', 'Material Calculator'],
      goals: 'Capture storm damage leads and showcase material quality',
      results: {
        trafficIncrease: '320%',
        leadIncrease: '450%',
        conversionRate: '6.8%',
        timeframe: '7 months'
      },
      color: 'from-gray-600 to-gray-800'
    },
    {
      id: 6,
      title: 'Green Thumb Landscaping',
      category: 'landscaping',
      businessType: 'Landscaper',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop',
      mobileImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=500&fit=crop',
      url: '#',
      description: 'Nature-inspired landscaping website featuring project galleries and seasonal services.',
      features: ['Project Gallery', 'Seasonal Service Calendar', 'Plant Care Guides', 'Design Consultation Booking'],
      technologies: ['Gallery Plugin', 'Seasonal Scheduling', 'Plant Database', 'Design Tools'],
      goals: 'Showcase design capabilities and generate consultation bookings',
      results: {
        trafficIncrease: '180%',
        leadIncrease: '290%',
        conversionRate: '8.9%',
        timeframe: '6 months'
      },
      color: 'from-green-600 to-emerald-700'
    },
    {
      id: 7,
      title: 'Reliable Handyman Services',
      category: 'maintenance',
      businessType: 'Handyman',
      image: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=600&h=400&fit=crop',
      mobileImage: 'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=300&h=500&fit=crop',
      url: '#',
      description: 'Versatile handyman website emphasizing reliability, skill diversity, and quick response times.',
      features: ['Service Checklist', 'Quick Quote Calculator', 'Before/After Photos', 'Skill Certifications'],
      technologies: ['Quote Calculator', 'Photo Gallery', 'Certification Display', 'Response Time Tracker'],
      goals: 'Demonstrate versatility and build trust through transparency',
      results: {
        trafficIncrease: '220%',
        leadIncrease: '310%',
        conversionRate: '10.2%',
        timeframe: '5 months'
      },
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 8,
      title: 'SecureHome Security Systems',
      category: 'security',
      businessType: 'Home security',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop',
      mobileImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=300&h=500&fit=crop',
      url: '#',
      description: 'Security-focused website with system comparisons, monitoring options, and installation services.',
      features: ['Security System Comparison', 'Live Monitoring Demo', 'Installation Scheduling', 'Smart Home Integration'],
      technologies: ['System Comparison Tool', 'Live Demo Integration', 'Smart Home APIs', 'Security Protocols'],
      goals: 'Build confidence in security solutions and streamline consultations',
      results: {
        trafficIncrease: '260%',
        leadIncrease: '340%',
        conversionRate: '7.6%',
        timeframe: '6 months'
      },
      color: 'from-red-600 to-pink-700'
    },
    {
      id: 9,
      title: 'Premier Carpet Cleaning',
      category: 'cleaning',
      businessType: 'Carpet cleaning',
      image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=600&h=400&fit=crop',
      mobileImage: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=300&h=500&fit=crop',
      url: '#',
      description: 'Specialized carpet cleaning website showcasing stain removal expertise and pet-safe solutions.',
      features: ['Stain Removal Guide', 'Pet-Safe Solutions', 'Before/After Gallery', 'Maintenance Tips'],
      technologies: ['Interactive Stain Guide', 'Pet Safety Certifications', 'Photo Comparison Tool', 'Tip Database'],
      goals: 'Position as carpet care experts and educate customers on maintenance',
      results: {
        trafficIncrease: '190%',
        leadIncrease: '275%',
        conversionRate: '9.8%',
        timeframe: '4 months'
      },
      color: 'from-blue-600 to-purple-600'
    },
    {
      id: 10,
      title: 'BuildRight General Contractors',
      category: 'construction',
      businessType: 'General contractor',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
      mobileImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=500&fit=crop',
      url: '#',
      description: 'Comprehensive construction website featuring project portfolios, licensing info, and timeline tracking.',
      features: ['Project Portfolio', 'License Verification', 'Timeline Tracker', 'Permit Assistance'],
      technologies: ['Portfolio Management', 'License API Integration', 'Project Management Tools', 'Permit Database'],
      goals: 'Showcase construction expertise and streamline project communication',
      results: {
        trafficIncrease: '300%',
        leadIncrease: '420%',
        conversionRate: '6.5%',
        timeframe: '8 months'
      },
      color: 'from-orange-600 to-red-700'
    },
    // Additional businesses
    {
      id: 11,
      title: 'FastFix Appliance Repair',
      category: 'maintenance',
      businessType: 'Appliance repair',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
      mobileImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=500&fit=crop',
      url: '#',
      description: 'Quick-response appliance repair website with brand-specific expertise and warranty information.',
      features: ['Brand Expertise Showcase', 'Warranty Tracking', 'Parts Availability', 'Same-Day Service'],
      technologies: ['Parts Database', 'Warranty API', 'Brand Integration', 'Scheduling System'],
      goals: 'Establish brand expertise and promote same-day service availability',
      results: {
        trafficIncrease: '240%',
        leadIncrease: '360%',
        conversionRate: '8.7%',
        timeframe: '5 months'
      },
      color: 'from-teal-500 to-cyan-600'
    },
    {
      id: 12,
      title: 'CraftMaster Carpenters',
      category: 'construction',
      businessType: 'Carpenter',
      image: 'https://images.unsplash.com/photo-1609132718484-cc90df3417f4?w=600&h=400&fit=crop',
      mobileImage: 'https://images.unsplash.com/photo-1609132718484-cc90df3417f4?w=300&h=500&fit=crop',
      url: '#',
      description: 'Artisan carpentry website highlighting custom work, wood selection, and craftsmanship quality.',
      features: ['Custom Work Gallery', 'Wood Selection Guide', 'Craftsmanship Process', 'Design Consultation'],
      technologies: ['Wood Database', 'Process Documentation', 'Design Tools', 'Gallery Management'],
      goals: 'Showcase artisan quality and attract custom project inquiries',
      results: {
        trafficIncrease: '170%',
        leadIncrease: '250%',
        conversionRate: '12.1%',
        timeframe: '6 months'
      },
      color: 'from-amber-600 to-yellow-700'
    }
  ];

  const filteredPortfolio = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  const PortfolioModal = ({ portfolio, onClose }) => {
    if (!portfolio) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 overflow-y-auto">
        <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-900">{portfolio.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <SafeIcon icon={FiExternalLink} className="w-6 h-6 rotate-45" />
            </button>
          </div>

          <div className="p-6">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Images */}
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={portfolio.image}
                    alt={`${portfolio.title} Desktop`}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="flex justify-center">
                  <div className="w-32 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={portfolio.mobileImage}
                      alt={`${portfolio.title} Mobile`}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-6">
                {/* Basic Info */}
                <div>
                  <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {portfolio.businessType}
                  </span>
                  <p className="text-gray-600 leading-relaxed">{portfolio.description}</p>
                </div>

                {/* Goals */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <SafeIcon icon={FiTarget} className="w-5 h-5 mr-2 text-primary-600" />
                    Project Goals
                  </h4>
                  <p className="text-gray-600">{portfolio.goals}</p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {portfolio.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {portfolio.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">Results Achieved</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-green-600">{portfolio.results.trafficIncrease}</div>
                      <div className="text-sm text-gray-600">Traffic Increase</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-blue-600">{portfolio.results.leadIncrease}</div>
                      <div className="text-sm text-gray-600">Lead Increase</div>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-purple-600">{portfolio.results.conversionRate}</div>
                      <div className="text-sm text-gray-600">Conversion Rate</div>
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-orange-600">{portfolio.results.timeframe}</div>
                      <div className="text-sm text-gray-600">Timeframe</div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6 border-t border-gray-200">
                  <Link
                    to="/contact"
                    className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Get A Website Like This</span>
                    <SafeIcon icon={FiExternalLink} className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Website Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Explore our collection of professional website designs created specifically for home service businesses. Each website is custom-built to generate leads and grow businesses.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiCode} className="w-4 h-4 text-primary-500" />
              <span>Custom Development</span>
            </div>
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiTrendingUp} className="w-4 h-4 text-primary-500" />
              <span>Lead Generation Focused</span>
            </div>
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiUsers} className="w-4 h-4 text-primary-500" />
              <span>Mobile Optimized</span>
            </div>
            <div className="flex items-center space-x-2">
              <SafeIcon icon={FiSearch} className="w-4 h-4 text-primary-500" />
              <span>SEO Ready</span>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & View Controls */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <SafeIcon icon={FiFilter} className="w-5 h-5 text-gray-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">View:</span>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-primary-100 text-primary-600' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <SafeIcon icon={FiGrid} className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-primary-100 text-primary-600' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <SafeIcon icon={FiList} className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-8'}>
            {filteredPortfolio.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
                onClick={() => setSelectedPortfolio(item)}
              >
                {/* Image */}
                <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-80 flex-shrink-0' : ''}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`object-cover group-hover:scale-105 transition-transform duration-300 ${
                      viewMode === 'list' ? 'w-full h-full' : 'w-full h-48'
                    }`}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                      <SafeIcon icon={FiEye} className="w-6 h-6 text-primary-600" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.businessType}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <div className="flex flex-wrap gap-1">
                      {item.features.slice(0, 3).map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                      {item.features.length > 3 && (
                        <span className="text-xs text-gray-500">+{item.features.length - 3} more</span>
                      )}
                    </div>
                  </div>

                  {/* Results Preview */}
                  <div className="flex justify-between items-center text-sm">
                    <div className="text-green-600 font-medium">
                      {item.results.leadIncrease} Lead Increase
                    </div>
                    <div className="text-primary-600 font-medium">
                      View Details →
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Showing {filteredPortfolio.length} of {portfolioItems.length} websites
            </p>
            <Link
              to="/contact"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>Get Your Custom Website</span>
              <SafeIcon icon={FiExternalLink} className="w-5 h-5" />
            </Link>
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
              Ready for Your Own Professional Website?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Get a custom website designed specifically for your home service business. Built to generate leads and grow your revenue.
            </p>
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2"
            >
              <span>Start Your Website Project</span>
              <SafeIcon icon={FiExternalLink} className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Modal */}
      <PortfolioModal
        portfolio={selectedPortfolio}
        onClose={() => setSelectedPortfolio(null)}
      />
    </>
  );
};

export default Portfolio;