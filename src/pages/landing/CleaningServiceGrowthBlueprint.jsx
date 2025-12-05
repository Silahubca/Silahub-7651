import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { generateBlueprintPDF } from '../../utils/pdfGenerator';
import { useLead } from '../../contexts/LeadContext';

const { FiDownload, FiCheck, FiTrendingUp, FiDollarSign, FiUsers, FiLoader } = FiIcons;

const CleaningServiceGrowthBlueprint = () => {
  const { addLead } = useLead();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    monthlyRevenue: '',
    currentLeads: '',
    avgJobValue: '',
    serviceArea: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [roasResults, setRoasResults] = useState(null);

  // Calculate ROI when inputs change
  useEffect(() => {
    if (formData.monthlyRevenue && formData.currentLeads && formData.avgJobValue) {
      const revenue = parseFloat(formData.monthlyRevenue);
      const leads = parseFloat(formData.currentLeads);
      const jobValue = parseFloat(formData.avgJobValue);
      
      // Assumptions for Cleaning Services
      const conversionRate = 0.25; // 25% closing rate
      const marketingSpend = 1500; // Estimated monthly spend
      
      const projectedLeads = leads * 3.5; // 350% increase
      const projectedRevenue = projectedLeads * conversionRate * jobValue;
      const annualGrowth = (projectedRevenue - revenue) * 12;
      const roas = projectedRevenue / marketingSpend;

      setRoasResults({
        monthlyAdSpend: marketingSpend,
        projectedLeads,
        projectedRevenue,
        roas,
        annualGrowth
      });
    }
  }, [formData.monthlyRevenue, formData.currentLeads, formData.avgJobValue]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const leadData = { 
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '',
        businessType: 'Cleaning Services',
        source: 'cleaning-growth-blueprint', 
        timestamp: new Date().toISOString(), 
        roasProjections: roasResults,
        blueprintType: 'cleaning-service'
      };
      
      // Save to centralized lead management system
      await addLead(leadData);
      
      // Save to legacy storage for backward compatibility
      const existingLeads = JSON.parse(localStorage.getItem('cleaning_blueprint_leads') || '[]');
      existingLeads.push(leadData);
      localStorage.setItem('cleaning_blueprint_leads', JSON.stringify(existingLeads));

      // Save to unified PDF storage
      const PDFStorage = (await import('../../utils/pdfStorage')).default;
      const pdfData = {
        id: Date.now() + Math.random(),
        type: 'cleaning-service',
        filename: 'cleaning-service-growth-blueprint.pdf',
        generatedAt: new Date().toISOString(),
        leadData,
        roasResults
      };
      PDFStorage.saveGeneratedPDF(pdfData);
      
      // Generate and download PDF
      await generateBlueprintPDF('cleaning-service', formData, roasResults, 'cleaning-service-growth-blueprint.pdf');

      alert('Thank you! Your Cleaning Service Growth Blueprint has been downloaded to your device. Check your downloads folder.');
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <SafeIcon icon={FiTrendingUp} className="w-4 h-4" />
                <span>For Cleaning Businesses</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Cleaning Service Growth Blueprint
              </h1>
              <p className="text-xl text-cyan-100 mb-8 leading-relaxed">
                Stop competing on price. Learn how to attract high-value commercial contracts and premium residential clients for your cleaning business.
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-medium">
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 mr-2 text-cyan-300" />
                  350% Lead Increase
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 mr-2 text-cyan-300" />
                  Commercial Focus
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 mr-2 text-cyan-300" />
                  Premium Pricing
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl shadow-2xl p-8 text-gray-900"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Get Your Custom Blueprint</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Revenue ($)</label>
                    <input
                      type="number"
                      name="monthlyRevenue"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Leads/Mo</label>
                    <input
                      type="number"
                      name="currentLeads"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Average Job Value ($)</label>
                  <input
                    type="number"
                    name="avgJobValue"
                    required
                    placeholder="e.g. 250"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500"
                    onChange={handleInputChange}
                  />
                </div>

                {roasResults && (
                  <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 mt-4">
                    <p className="text-sm font-semibold text-cyan-900 mb-2">Projected Growth:</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-600">New Leads:</span>
                        <span className="block font-bold text-gray-900">{Math.round(roasResults.projectedLeads)}/mo</span>
                      </div>
                      <div>
                        <span className="text-gray-600">Added Revenue:</span>
                        <span className="block font-bold text-green-600">+${Math.round(roasResults.annualGrowth/12).toLocaleString()}/mo</span>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyan-600 text-white py-3 rounded-lg font-bold hover:bg-cyan-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <SafeIcon icon={FiLoader} className="w-5 h-5 animate-spin" />
                      <span>Generating Blueprint...</span>
                    </>
                  ) : (
                    <>
                      <SafeIcon icon={FiDownload} className="w-5 h-5" />
                      <span>Download My Blueprint</span>
                    </>
                  )}
                </button>
                <p className="text-xs text-center text-gray-500 mt-2">
                  Includes full strategy PDF + ROI analysis
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What's Inside The Blueprint?</h2>
          <p className="text-gray-600 mt-2">A complete roadmap to scaling your cleaning business</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <SafeIcon icon={FiDollarSign} className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Commercial Contracts</h3>
            <p className="text-gray-600">How to land high-value office and commercial cleaning contracts that pay monthly.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <SafeIcon icon={FiUsers} className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Staffing Strategy</h3>
            <p className="text-gray-600">Recruitment and training systems to build a reliable team that delivers quality.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="bg-cyan-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <SafeIcon icon={FiTrendingUp} className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Automated Leads</h3>
            <p className="text-gray-600">Set up marketing channels that bring in quote requests while you sleep.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CleaningServiceGrowthBlueprint;