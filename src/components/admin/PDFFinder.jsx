import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { generateBlueprintPDF } from '../../utils/pdfGenerator';
import PDFStorage from '../../utils/pdfStorage';

const { FiDownload, FiFileText, FiSearch, FiRefreshCw, FiTrash2 } = FiIcons;

const PDFFinder = () => {
  const pdfStorage = PDFStorage;
  const [generatedPDFs, setGeneratedPDFs] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  // Load previously generated PDFs from localStorage
  useEffect(() => {
    const savedPDFs = pdfStorage.getStoredPDFs();
    setGeneratedPDFs(savedPDFs);
  }, []);

  // Save generated PDFs to localStorage
  const saveGeneratedPDF = (pdfData) => {
    pdfStorage.saveGeneratedPDF(pdfData);
    setGeneratedPDFs(pdfStorage.getStoredPDFs());
  };

  // Generate sample PDF data for demonstration
  const sampleLeadData = {
    name: 'John Smith',
    email: 'john@example.com',
    company: 'ABC Services',
    monthlyRevenue: 50000,
    currentLeads: 25,
    avgJobValue: 800,
    serviceArea: 'Calgary, AB'
  };

  const sampleRoasResults = {
    monthlyAdSpend: 0,
    projectedLeads: 87.5,
    projectedRevenue: 70000,
    roas: 3.5,
    annualGrowth: 240000
  };

  const generateSamplePDFs = async () => {
    setIsGenerating(true);
    const blueprintTypes = [
      'cleaning-service',
      'landscaping',
      'hvac',
      'plumbing',
      'electrical',
      'roofing',
      'home-service'
    ];

    for (const type of blueprintTypes) {
      try {
        await generateBlueprintPDF(type, sampleLeadData, sampleRoasResults, `${type}-blueprint.pdf`);
        
        const pdfData = {
          id: Date.now() + Math.random(),
          type,
          filename: `${type}-blueprint.pdf`,
          generatedAt: new Date().toISOString(),
          leadData: sampleLeadData,
          roasResults: sampleRoasResults
        };
        
        saveGeneratedPDF(pdfData);
      } catch (error) {
        console.error(`Error generating ${type} PDF:`, error);
      }
    }

    setIsGenerating(false);
  };

  // Load PDFs from all possible storage keys (legacy support)
  const loadAllPDFs = () => {
    const allPDFs = [];
    const blueprintTypes = ['cleaning-service', 'landscaping', 'hvac', 'plumbing', 'electrical', 'roofing', 'home-service'];
    
    // Load from new unified storage
    const unifiedPDFs = pdfStorage.getStoredPDFs();
    allPDFs.push(...unifiedPDFs);
    
    // Load from legacy storage keys
    blueprintTypes.forEach(type => {
      try {
        const legacyKey = `${type}_blueprint_leads`;
        const legacyData = JSON.parse(localStorage.getItem(legacyKey) || '[]');
        
        legacyData.forEach(lead => {
          if (lead.roasProjections) {
            allPDFs.push({
              id: Date.now() + Math.random(),
              type,
              filename: `${type}-blueprint.pdf`,
              generatedAt: lead.timestamp || new Date().toISOString(),
              leadData: lead,
              roasResults: lead.roasProjections
            });
          }
        });
      } catch (error) {
        console.error(`Error loading legacy ${type} PDFs:`, error);
      }
    });
    
    // Remove duplicates based on ID
    const uniquePDFs = allPDFs.filter((pdf, index, self) => 
      self.findIndex(p => p.id === pdf.id) === index
    );
    
    // Update unified storage
    localStorage.setItem('generated_pdfs', JSON.stringify(uniquePDFs));
    
    return uniquePDFs;
  };

  // Load all PDFs on mount
  useEffect(() => {
    const allPDFs = loadAllPDFs();
    setGeneratedPDFs(allPDFs);
  }, []);

  const blueprintTitles = {
    'cleaning-service': 'Cleaning Service Growth Blueprint',
    'landscaping': 'Landscaping Growth Blueprint',
    'hvac': 'HVAC Marketing Blueprint',
    'plumbing': 'Plumbing Marketing Blueprint',
    'electrical': 'Electrical Marketing Blueprint',
    'roofing': 'Roofing Growth Blueprint',
    'home-service': 'Home Service Growth Blueprint'
  };

  const deletePDF = (pdfId) => {
    if (window.confirm('Are you sure you want to delete this PDF record?')) {
      pdfStorage.deletePDF(pdfId);
      setGeneratedPDFs(pdfStorage.getStoredPDFs());
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Growth Blueprint PDFs</h1>
          <p className="text-gray-600 mb-6">
            Here you can find all the Growth Blueprint PDFs that have been generated.
            PDFs are automatically created when users submit the lead forms on each blueprint page.
          </p>
          
          {/* How PDFs Work */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
            <div className="flex items-start space-x-3">
              <SafeIcon icon={FiFileText} className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">How PDFs Are Generated</h3>
                <ul className="text-blue-800 space-y-1 text-sm">
                  <li>• PDFs are created automatically when users fill out lead forms</li>
                  <li>• Each PDF is personalized with the user's business data</li>
                  <li>• PDFs include custom ROI calculations and strategies</li>
                  <li>• Files download directly to the user's browser</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Generate Sample PDFs */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">Generate Sample PDFs</h2>
            <button
              onClick={generateSamplePDFs}
              disabled={isGenerating}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {isGenerating ? (
                <>
                  <SafeIcon icon={FiRefreshCw} className="w-4 h-4 animate-spin" />
                  <span>Generating...</span>
                </>
              ) : (
                <>
                  <SafeIcon icon={FiDownload} className="w-4 h-4" />
                  <span>Generate All PDFs</span>
                </>
              )}
            </button>
          </div>
          <p className="text-gray-600 text-sm">
            Click here to generate sample PDFs for all blueprint types using demo data.
            This will download 7 PDFs to your browser's download folder.
          </p>
        </div>

        {/* Generated PDFs List */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Generated PDFs</h2>
          
          {generatedPDFs.length === 0 ? (
            <div className="text-center py-12">
              <SafeIcon icon={FiFileText} className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No PDFs Generated Yet</h3>
              <p className="text-gray-600 mb-4">
                PDFs are created when users submit the lead forms on blueprint pages.
              </p>
              <button
                onClick={generateSamplePDFs}
                className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700"
              >
                Generate Sample PDFs
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {generatedPDFs.map((pdf, index) => (
                <motion.div
                  key={pdf.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary-100 p-3 rounded-lg">
                        <SafeIcon icon={FiFileText} className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {blueprintTitles[pdf.type]}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Generated: {new Date(pdf.generatedAt).toLocaleDateString()} • 
                          For: {pdf.leadData?.name || 'Sample User'} • 
                          Revenue: ${pdf.roasResults?.annualGrowth?.toLocaleString() || 0}/year
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => generateBlueprintPDF(pdf.type, pdf.leadData, pdf.roasResults, pdf.filename)}
                        className="bg-primary-600 text-white px-3 py-2 rounded-lg hover:bg-primary-700 text-sm flex items-center space-x-2"
                      >
                        <SafeIcon icon={FiDownload} className="w-4 h-4" />
                        <span>Download</span>
                      </button>
                      <button
                        onClick={() => deletePDF(pdf.id)}
                        className="bg-red-50 text-red-600 px-3 py-2 rounded-lg hover:bg-red-100 text-sm flex items-center space-x-2"
                      >
                        <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Clear All Button */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={() => {
                    if (window.confirm('Are you sure you want to delete all PDF records?')) {
                      localStorage.removeItem('generated_pdfs');
                      setGeneratedPDFs([]);
                    }
                  }}
                  className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 text-sm"
                >
                  Clear All Records
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Where to Find PDFs */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">
          <div className="flex items-start space-x-3">
            <SafeIcon icon={FiSearch} className="w-6 h-6 text-green-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-green-900 mb-2">Where to Find Downloaded PDFs</h3>
              <ul className="text-green-800 space-y-1 text-sm">
                <li><strong>Browser Downloads:</strong> PDFs download automatically to your browser's default download folder</li>
                <li><strong>Check Downloads Folder:</strong> Usually located at Downloads/ on your computer</li>
                <li><strong>File Names:</strong> PDFs are named like "cleaning-service-growth-blueprint.pdf"</li>
                <li><strong>Browser Settings:</strong> Check your browser's download settings if files aren't appearing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Blueprint URLs */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mt-8">
          <div className="flex items-start space-x-3">
            <SafeIcon icon={FiFileText} className="w-6 h-6 text-purple-600 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Blueprint Pages & URLs</h3>
              <p className="text-purple-800 text-sm mb-3">Visit these pages to generate PDFs:</p>
              <ul className="text-purple-800 space-y-1 text-sm">
                <li>• <a href="/cleaning-service-growth-blueprint" className="hover:underline">Cleaning Service Blueprint</a></li>
                <li>• <a href="/landscaping-growth-blueprint" className="hover:underline">Landscaping Growth Blueprint</a></li>
                <li>• <a href="/hvac-marketing-blueprint" className="hover:underline">HVAC Marketing Blueprint</a></li>
                <li>• <a href="/plumbing-marketing-blueprint" className="hover:underline">Plumbing Marketing Blueprint</a></li>
                <li>• <a href="/electrical-marketing-blueprint" className="hover:underline">Electrical Marketing Blueprint</a></li>
                <li>• <a href="/roofing-growth-blueprint" className="hover:underline">Roofing Growth Blueprint</a></li>
                <li>• <a href="/home-service-growth-blueprint" className="hover:underline">Home Service Growth Blueprint</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFFinder;