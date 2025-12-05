import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { generateBlueprintPDF } from '../../utils/pdfGenerator';
import { useLead } from '../../contexts/LeadContext';

const { FiDownload, FiCheck, FiTrendingUp, FiDollarSign, FiHome, FiLoader } = FiIcons;

const HomeServiceGrowthBlueprint = () => {
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

  // Calculate ROI
  useEffect(() => {
    if (formData.monthlyRevenue && formData.currentLeads && formData.avgJobValue) {
      const revenue = parseFloat(formData.monthlyRevenue);
      const leads = parseFloat(formData.currentLeads);
      const jobValue = parseFloat(formData.avgJobValue);
      
      // General assumptions
      const conversionRate = 0.28; 
      const marketingSpend = 1800;
      
      const projectedLeads = leads * 3.0; // 300% increase
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
        businessType: 'Home Services',
        source: 'home-service-growth-blueprint', 
        timestamp: new Date().toISOString(), 
        roasProjections: roasResults,
        blueprintType: 'home-service'
      };
      
      // Save to centralized lead management system
      await addLead(leadData);
      
      const existingLeads = JSON.parse(localStorage.getItem('home-service_blueprint_leads') || '[]');
      existingLeads.push(leadData);
      localStorage.setItem('home-service_blueprint_leads', JSON.stringify(existingLeads));

      const PDFStorage = (await import('../../utils/pdfStorage')).default;
      const pdfData = {
        id: Date.now() + Math.random(),
        type: 'home-service',
        filename: 'home-service-growth-blueprint.pdf',
        generatedAt: new Date().toISOString(),
        leadData,
        roasResults
      };
      PDFStorage.saveGeneratedPDF(pdfData);
      
      await generateBlueprintPDF('home-service', formData, roasResults, 'home-service-growth-blueprint.pdf');

      alert('Thank you! Your Home Service Growth Blueprint has been downloaded to your device. Check your downloads folder.');
    } catch (error) {
      console.error(error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
              <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <SafeIcon icon={FiHome} className="w-4 h-4" />
                <span>For All Home Services</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Home Service Growth Blueprint
              </h1>
              <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
                The complete marketing system for contractors. Learn how to build a dominant online presence and generate consistent leads for your business.
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-medium">
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 mr-2 text-indigo-200" />
                  Local SEO Mastery
                </div>
                <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
                  <SafeIcon icon={FiCheck} className="w-5 h-5 mr-2 text-indigo-200" />
                  Lead Automation
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
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
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Current Leads/Mo</label>
                    <input
                      type="number"
                      name="currentLeads"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    onChange={handleInputChange}
                  />
                </div>

                {roasResults && (
                  <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mt-4">
                    <p className="text-sm font-semibold text-indigo-900 mb-2">Projected Growth:</p>
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
                  className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
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

export default HomeServiceGrowthBlueprint;