import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiLeaf, FiTrendingUp, FiDollarSign, FiCheck, FiArrowRight, FiStar, FiUsers, FiTarget, FiZap, FiShield, FiPhone, FiMail, FiMapPin } = FiIcons;

const LandscapingGrowthBlueprint = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', monthlyRevenue: '', currentLeads: '', avgJobValue: '', serviceArea: '' });
  const [roasResults, setRoasResults] = useState({ monthlyAdSpend: 0, projectedLeads: 0, projectedRevenue: 0, roas: 0, annualGrowth: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Set page SEO
  useEffect(() => {
    document.title = 'Landscaping Growth Blueprint - Get More High-Value Projects | Silahub';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Get the Landscaping Growth Blueprint that helps landscaping companies generate 3x more high-value projects through proven SEO strategies. Free ROI calculator included.');
    }
  }, []);

  // ROAS Calculator logic
  const calculateROAS = () => {
    const monthlyRevenue = parseFloat(formData.monthlyRevenue) || 0;
    const currentLeads = parseFloat(formData.currentLeads) || 0;
    const avgJobValue = parseFloat(formData.avgJobValue) || 0;
    const monthlyAdSpend = monthlyRevenue * 0.09;
    const projectedLeads = currentLeads * 3.2; // 220% increase for landscaping
    const projectedRevenue = projectedLeads * avgJobValue;
    const additionalRevenue = projectedRevenue - (currentLeads * avgJobValue);
    const roas = monthlyAdSpend > 0 ? (additionalRevenue / monthlyAdSpend) : 0;
    const annualGrowth = additionalRevenue * 12;
    setRoasResults({ monthlyAdSpend, projectedLeads, projectedRevenue, roas, annualGrowth });
  };

  useEffect(() => {
    calculateROAS();
  }, [formData.monthlyRevenue, formData.currentLeads, formData.avgJobValue]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const leadData = { ...formData, source: 'landscaping-growth-blueprint', timestamp: new Date().toISOString(), roasProjections: roasResults };
      const existingLeads = JSON.parse(localStorage.getItem('landscaping_blueprint_leads') || '[]');
      existingLeads.push(leadData);
      localStorage.setItem('landscaping_blueprint_leads', JSON.stringify(existingLeads));
      alert('Thank you! Your Landscaping Growth Blueprint will be sent to your email within 5 minutes.');
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const landscapingChallenges = [
    "Getting stuck with small lawn mowing jobs that don't pay enough",
    "Seasonal nature of landscaping leaving you with inconsistent income",
    "Difficulty landing commercial property contracts",
    "Competing with discount lawn services on price",
    "No leads during winter months when work slows down",
    "Struggling to showcase your design and hardscaping expertise"
  ];

  const blueprintFeatures = [
    { icon: FiTarget, title: "Commercial Property Focus", description: "Target office complexes, retail centers, and HOA communities instead of residential lawns", benefit: "3x higher average project values" },
    { icon: FiDollarSign, title: "Year-Round Service Model", description: "Expand into snow removal, indoor plant maintenance, and other year-round services", benefit: "Consistent monthly revenue" },
    { icon: FiUsers, title: "High-End Client Attraction", description: "Position yourself as a premium landscaping designer, not just a lawn mower", benefit: "Premium pricing power" },
    { icon: FiShield, title: "Portfolio & Credibility Building", description: "Showcase commercial projects and awards to attract similar high-value clients", benefit: "85% higher close rates" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-green-700/50 text-green-100 px-4 py-2 rounded-full text-sm font-medium">
                <SafeIcon icon={FiLeaf} className="w-4 h-4" />
                <span>Exclusive for Landscaping Companies</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                The Landscaping Growth <span className="text-green-300">Blueprint</span>
              </h1>
              <p className="text-xl lg:text-2xl text-green-100 leading-relaxed">
                Tired of seasonal work and low-paying lawn jobs? Get the exact strategies that helped 150+ landscaping companies in Calgary land high-value commercial projects and build year-round revenue streams.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-300">220%</div>
                  <div className="text-sm text-green-200">Lead Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-300">$200K</div>
                  <div className="text-sm text-green-200">Avg Annual Growth</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#blueprint-form" className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition-colors inline-flex items-center justify-center space-x-2">
                  <span>Get Your Free Blueprint</span>
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                </a>
                <a href="#roas-calculator" className="border-2 border-green-300 text-green-300 px-8 py-4 rounded-lg font-bold hover:bg-green-300 hover:text-green-900 transition-colors text-center">
                  Calculate Your ROI
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="relative">
              <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop" alt="Professional landscaping project" className="rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">Free</div>
                <div className="text-sm">Growth Blueprint</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Is Seasonal Work Killing Your Landscaping Business Growth?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most landscaping companies struggle with the same seasonal challenges that prevent them from reaching their full potential. Sound familiar?
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {landscapingChallenges.map((challenge, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-2 rounded-lg">
                    <SafeIcon icon={FiZap} className="w-5 h-5 text-red-600" />
                  </div>
                  <p className="text-gray-700 font-medium">{challenge}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROAS Calculator */}
      <section id="roas-calculator" className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Landscaping Growth ROI Calculator
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See exactly how much additional revenue our landscaping marketing strategies could generate for your business.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Current Landscaping Business</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2"> Monthly Revenue ($) </label>
                  <input type="number" value={formData.monthlyRevenue} onChange={(e) => setFormData({ ...formData, monthlyRevenue: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="35000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2"> Monthly Projects/Leads </label>
                  <input type="number" value={formData.currentLeads} onChange={(e) => setFormData({ ...formData, currentLeads: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="18" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2"> Average Project Value ($) </label>
                  <input type="number" value={formData.avgJobValue} onChange={(e) => setFormData({ ...formData, avgJobValue: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="800" />
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-green-600 to-teal-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Your Projected Results</h3>
              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-100">Monthly Projects</span>
                    <SafeIcon icon={FiLeaf} className="w-5 h-5 text-green-200" />
                  </div>
                  <div className="text-3xl font-bold">{Math.round(roasResults.projectedLeads)}</div>
                  <div className="text-sm text-green-200">+{Math.round(roasResults.projectedLeads - parseFloat(formData.currentLeads || 0))} more projects/month</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-100">Monthly Revenue</span>
                    <SafeIcon icon={FiDollarSign} className="w-5 h-5 text-green-200" />
                  </div>
                  <div className="text-3xl font-bold">${Math.round(roasResults.projectedRevenue).toLocaleString()}</div>
                  <div className="text-sm text-green-200">+${Math.round(roasResults.projectedRevenue - parseFloat(formData.monthlyRevenue || 0)).toLocaleString()} additional</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-100">Marketing ROI</span>
                    <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-green-200" />
                  </div>
                  <div className="text-3xl font-bold">{roasResults.roas.toFixed(1)}x</div>
                  <div className="text-sm text-green-200">Return on investment</div>
                </div>
                <div className="bg-green-500/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-100">Annual Growth</span>
                    <SafeIcon icon={FiShield} className="w-5 h-5 text-green-200" />
                  </div>
                  <div className="text-3xl font-bold text-green-200">${Math.round(roasResults.annualGrowth).toLocaleString()}</div>
                  <div className="text-sm text-green-200">Additional yearly revenue</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blueprint Features */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What's Inside the Landscaping Growth Blueprint
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A complete step-by-step guide to transitioning from seasonal lawn maintenance to year-round commercial landscaping success.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {blueprintFeatures.map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <SafeIcon icon={feature.icon} className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <div className="bg-green-50 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block">Result: {feature.benefit}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="blueprint-form" className="py-16 lg:py-20 bg-gradient-to-br from-green-600 to-teal-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Get Your Free Landscaping Growth Blueprint</h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">Enter your details below and we'll send you the complete blueprint plus a custom strategy session for your landscaping business.</p>
          </motion.div>
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="John Smith" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                  <input type="text" required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Smith Landscaping" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="john@smithlandscaping.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="(555) 123-4567" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Area (City/Region)</label>
                <input type="text" value={formData.serviceArea} onChange={(e) => setFormData({ ...formData, serviceArea: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Calgary, AB" />
              </div>
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">What You'll Receive:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Complete Landscaping Growth Blueprint (PDF)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Commercial property targeting guide</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Free 30-minute strategy call</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Calgary market analysis</span>
                  </div>
                </div>
              </div>
              <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full bg-orange-500 text-white py-4 px-8 rounded-lg font-bold text-lg hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2">
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending Blueprint...</span>
                  </>
                ) : (
                  <>
                    <span>Get My Free Landscaping Growth Blueprint</span>
                    <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                  </>
                )}
              </motion.button>
              <p className="text-xs text-gray-500 text-center">No spam. We respect your privacy. The blueprint will be sent to your email within 5 minutes.</p>
            </form>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by 150+ Landscaping Companies</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { company: "Green Thumb Landscaping", result: "350% lead increase", quote: "We went from seasonal work to year-round commercial projects. Game changer!", owner: "Sarah Mitchell" },
              { company: "Elite Landscapes", result: "$250K additional revenue", quote: "No more competing on lawn mowing prices. Now we do high-end designs.", owner: "Mike Davis" },
              { company: "Premier Grounds", result: "Booked 12 months ahead", quote: "Our commercial division exploded after implementing these strategies.", owner: "Lisa Chen" }
            ].map((testimonial, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 italic">"{testimonial.quote}"</blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.company}</div>
                  <div className="text-sm text-gray-600">{testimonial.owner}, Owner</div>
                  <div className="text-sm font-medium text-green-600 mt-1">{testimonial.result}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with Link Menu */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <img src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751267972532-Silahub%20Technologies%20-%20Wordmark.png" alt="Silahub Technologies" className="h-12 w-auto" />
              </div>
              <p className="text-gray-300 leading-relaxed">
                Calgary's premier digital marketing agency specializing in home service businesses and contractors. We help you grow your business with proven digital marketing strategies.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="/services/seo-calgary" className="text-gray-300 hover:text-white transition-colors">SEO Calgary</a></li>
                <li><a href="/services/google-ads-calgary" className="text-gray-300 hover:text-white transition-colors">Google Ads Management</a></li>
                <li><a href="/services/facebook-ads-calgary" className="text-gray-300 hover:text-white transition-colors">Facebook Ads</a></li>
                <li><a href="/services/web-design-calgary" className="text-gray-300 hover:text-white transition-colors">Website Design</a></li>
              </ul>
            </div>

            {/* Growth Blueprints */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Growth Blueprints</h4>
              <ul className="space-y-2">
                <li><a href="/cleaning-service-growth-blueprint" className="text-gray-300 hover:text-white transition-colors">Cleaning Services</a></li>
                <li><a href="/landscaping-growth-blueprint" className="text-gray-300 hover:text-white transition-colors">Landscaping</a></li>
                <li><a href="/plumbing-growth-blueprint" className="text-gray-300 hover:text-white transition-colors">Plumbing</a></li>
                <li><a href="/hvac-growth-blueprint" className="text-gray-300 hover:text-white transition-colors">HVAC</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiPhone} className="w-5 h-5 text-silahub-secondary mt-0.5" />
                  <div>
                    <p className="text-white font-medium">825-288-8332</p>
                    <p className="text-gray-400 text-sm">Call us anytime</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiMail} className="w-5 h-5 text-silahub-secondary mt-0.5" />
                  <div>
                    <p className="text-white font-medium">hello@silahub.com</p>
                    <p className="text-gray-400 text-sm">Email us 24/7</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiMapPin} className="w-5 h-5 text-silahub-secondary mt-0.5" />
                  <div>
                    <p className="text-white font-medium">Calgary, Alberta</p>
                    <p className="text-gray-400 text-sm">Serving Canada & USA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">© 2024 Silahub Technologies. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandscapingGrowthBlueprint;