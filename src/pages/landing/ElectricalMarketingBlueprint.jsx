import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { generateBlueprintPDF } from '../../utils/pdfGenerator';
import { useLead } from '../../contexts/LeadContext';

const { FiDownload, FiCheck, FiTrendingUp, FiDollarSign, FiZap, FiLoader } = FiIcons;

const ElectricalMarketingBlueprint = () => {
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
      
      // Assumptions for Electrical
      const conversionRate = 0.35; // 35% closing rate
      const marketingSpend = 2000;
      
      const projectedLeads = leads * 3.2; // 320% increase
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
        businessType: 'Electrical Services',
        source: 'electrical-marketing-blueprint', 
        timestamp: new Date().toISOString(), 
        roasProjections: roasResults,
        blueprintType: 'electrical'
      };
      
      // Save to centralized lead management system
      await addLead(leadData);
      
      const existingLeads = JSON.parse(localStorage.getItem('electrical_blueprint_leads') || '[]');
      existingLeads.push(leadData);
      localStorage.setItem('electrical_blueprint_leads', JSON.stringify(existingLeads));

      const PDFStorage = (await import('../../utils/pdfStorage')).default;
      const pdfData = {
        id: Date.now() + Math.random(),
        type: 'electrical',
        filename: 'electrical-marketing-blueprint.pdf',
        generatedAt: new Date().toISOString(),
        leadData,
        roasResults
      };
      PDFStorage.saveGeneratedPDF(pdfData);
      
      await generateBlueprintPDF('electrical', formData, roasResults, 'electrical-marketing-blueprint.pdf');

      alert('Thank you! Your Electrical Marketing Blueprint has been downloaded to your device. Check your downloads folder.');
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <SafeIcon icon={FiZap} className="w-4 h-4" />
                <span>For Electrical Contractors</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Electrical Marketing Blueprint
              </h1>
              <p className="text-xl text-yellow-50 mb-8 leading-relaxed">
                Stop chasing small repairs. Learn how to land high-value panel upgrades, rewiring jobs, and commercial projects.
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-medium">
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 mr-2 text-yellow-200" />
                  High-Value Jobs
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 mr-2 text-yellow-200" />
                  Commercial Focus
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Leads/Mo</label>
                    <input
                      type="number"
                      name="currentLeads"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500"
                    onChange={handleInputChange}
                  />
                </div>

                {roasResults && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-4">
                    <p className="text-sm font-semibold text-yellow-900 mb-2">Projected Growth:</p>
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
                  className="w-full bg-yellow-600 text-white py-3 rounded-lg font-bold hover:bg-yellow-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <SafeIcon icon={FiLoader} className="w-5 h-5 animate-spin" />
                      <span>Generating...</span>
                    </>
                  ) : (
                    <>
                      <SafeIcon icon={FiDownload} className="w-5 h-5" />
                      <span>Download Blueprint</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElectricalMarketingBlueprint;