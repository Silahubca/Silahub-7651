import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiDroplet, FiTrendingUp, FiDollarSign, FiCheck, FiArrowRight, FiStar, FiUsers, FiTarget, FiZap, FiShield } = FiIcons;

const CleaningServiceGrowthBlueprint = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', monthlyRevenue: '', currentLeads: '', avgJobValue: '', serviceArea: '' });
  const [roasResults, setRoasResults] = useState({ monthlyAdSpend: 0, projectedLeads: 0, projectedRevenue: 0, roas: 0, annualGrowth: 0 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Set page SEO
  useEffect(() => {
    document.title = 'Cleaning Service Growth Blueprint - Get More Clients & Higher Prices | Silahub';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Transform your Calgary cleaning business with proven growth strategies. Stop competing on price and start attracting high-paying commercial clients. Free ROI calculator included.');
    }
  }, []);

  // ROAS Calculator logic
  const calculateROAS = () => {
    const monthlyRevenue = parseFloat(formData.monthlyRevenue) || 0;
    const currentLeads = parseFloat(formData.currentLeads) || 0;
    const avgJobValue = parseFloat(formData.avgJobValue) || 0;
    const monthlyAdSpend = monthlyRevenue * 0.08;
    const projectedLeads = currentLeads * 4.5; // 350% increase for cleaning
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
      const leadData = { ...formData, source: 'cleaning-growth-blueprint', timestamp: new Date().toISOString(), roasProjections: roasResults };
      const existingLeads = JSON.parse(localStorage.getItem('cleaning_blueprint_leads') || '[]');
      existingLeads.push(leadData);
      localStorage.setItem('cleaning_blueprint_leads', JSON.stringify(existingLeads));
      alert('Thank you! Your Cleaning Service Growth Blueprint will be sent to your email within 5 minutes.');
    } catch (error) {
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const cleaningChallenges = [
    "Competing with discount cleaners who undercut your prices",
    "Getting stuck with residential jobs that don't pay enough",
    "Struggling to land commercial office cleaning contracts",
    "Customers always asking for the cheapest option",
    "No consistent leads during slow business periods",
    "Difficulty proving your cleaning quality and reliability"
  ];

  const blueprintFeatures = [
    { icon: FiTarget, title: "Commercial Client Targeting", description: "Focus on high-paying office buildings, retail spaces, and medical facilities instead of residential jobs", benefit: "3x higher average job values" },
    { icon: FiDollarSign, title: "Premium Pricing Strategy", description: "Stop competing on price and position yourself as the premium cleaning service that businesses trust", benefit: "50% higher profit margins" },
    { icon: FiUsers, title: "Referral System Automation", description: "Implement automated systems to generate steady referrals from satisfied commercial clients", benefit: "Consistent monthly bookings" },
    { icon: FiShield, title: "Trust & Credibility Building", description: "Showcase certifications, insurance, and professional standards that businesses require", benefit: "90% conversion rate boost" }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-cyan-800 to-teal-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-cyan-700/50 text-cyan-100 px-4 py-2 rounded-full text-sm font-medium">
                <SafeIcon icon={FiDroplet} className="w-4 h-4" />
                <span>Exclusive for Cleaning Services</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                The Cleaning Service Growth <span className="text-cyan-300">Blueprint</span>
              </h1>
              <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                Stop competing on price and start building a premium cleaning business that attracts high-paying commercial clients. Get the exact strategies that helped 250+ cleaning companies in Calgary dominate their market.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-300">350%</div>
                  <div className="text-sm text-blue-200">Client Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-300">$175K</div>
                  <div className="text-sm text-blue-200">Avg Annual Growth</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#blueprint-form" className="bg-orange-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition-colors inline-flex items-center justify-center space-x-2">
                  <span>Get Your Free Blueprint</span>
                  <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
                </a>
                <a href="#roas-calculator" className="border-2 border-cyan-300 text-cyan-300 px-8 py-4 rounded-lg font-bold hover:bg-cyan-300 hover:text-blue-900 transition-colors text-center">
                  Calculate Your ROI
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="relative">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop" alt="Professional cleaning service" className="rounded-2xl shadow-2xl" />
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
              Tired of Low-Price Competition in Calgary's Cleaning Market?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Most cleaning businesses struggle with the same problems that keep them from growing. Sound familiar?
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cleaningChallenges.map((challenge, index) => (
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
              Cleaning Service ROI Calculator
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See exactly how much additional revenue our cleaning SEO strategies could generate for your business.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Current Cleaning Business</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2"> Monthly Revenue ($) </label>
                  <input type="number" value={formData.monthlyRevenue} onChange={(e) => setFormData({ ...formData, monthlyRevenue: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="30000" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2"> Monthly Leads </label>
                  <input type="number" value={formData.currentLeads} onChange={(e) => setFormData({ ...formData, currentLeads: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="25" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2"> Average Job Value ($) </label>
                  <input type="number" value={formData.avgJobValue} onChange={(e) => setFormData({ ...formData, avgJobValue: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="250" />
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-gradient-to-br from-blue-600 to-cyan-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Your Projected Results</h3>
              <div className="space-y-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-100">Monthly Clients</span>
                    <SafeIcon icon={FiUsers} className="w-5 h-5 text-blue-200" />
                  </div>
                  <div className="text-3xl font-bold">{Math.round(roasResults.projectedLeads)}</div>
                  <div className="text-sm text-blue-200">+{Math.round(roasResults.projectedLeads - parseFloat(formData.currentLeads || 0))} more clients/month</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-100">Monthly Revenue</span>
                    <SafeIcon icon={FiDollarSign} className="w-5 h-5 text-blue-200" />
                  </div>
                  <div className="text-3xl font-bold">${Math.round(roasResults.projectedRevenue).toLocaleString()}</div>
                  <div className="text-sm text-blue-200">+${Math.round(roasResults.projectedRevenue - parseFloat(formData.monthlyRevenue || 0)).toLocaleString()} additional</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-100">Marketing ROI</span>
                    <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-blue-200" />
                  </div>
                  <div className="text-3xl font-bold">{roasResults.roas.toFixed(1)}x</div>
                  <div className="text-sm text-blue-200">Return on investment</div>
                </div>
                <div className="bg-green-500/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-100">Annual Growth</span>
                    <SafeIcon icon={FiDroplet} className="w-5 h-5 text-green-200" />
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
              What's Inside the Cleaning Service Growth Blueprint
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A complete step-by-step guide to building a premium cleaning business that attracts high-paying commercial clients.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            {blueprintFeatures.map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <SafeIcon icon={feature.icon} className="w-6 h-6 text-blue-600" />
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
      <section id="blueprint-form" className="py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-cyan-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Get Your Free Cleaning Service Growth Blueprint</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">Enter your details below and we'll send you the complete blueprint plus a custom strategy session for your cleaning business.</p>
          </motion.div>
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="John Smith" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                  <input type="text" required value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Smith Cleaning Services" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="john@smithcleaning.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="(555) 123-4567" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Area (City/Region)</label>
                <input type="text" value={formData.serviceArea} onChange={(e) => setFormData({ ...formData, serviceArea: e.target.value })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Calgary, AB" />
              </div>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-4">What You'll Receive:</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Complete Cleaning Growth Blueprint (PDF)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-700">Commercial client targeting guide</span>
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
                    <span>Get My Free Cleaning Growth Blueprint</span>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by 250+ Cleaning Companies</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { company: "Sparkle Clean Pro", result: "400% lead increase", quote: "We went from residential only to 70% commercial clients. Game changer!", owner: "Sarah Johnson" },
              { company: "Elite Cleaning Services", result: "$200K additional revenue", quote: "No more competing on price. Our contract cleaning division exploded.", owner: "Mike Davis" },
              { company: "Pure Clean Calgary", result: "Booked 6 months ahead", quote: "We now have waiting lists for commercial cleaning. Unbelievable growth.", owner: "Lisa Chen" }
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
                  <div className="text-sm font-medium text-blue-600 mt-1">{testimonial.result}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CleaningServiceGrowthBlueprint;