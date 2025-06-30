import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import LeadCaptureForm from './LeadCaptureForm';

const { FiX, FiDownload, FiTrendingUp } = FiIcons;

const LeadMagnetModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if modal has been shown before
    const modalShown = localStorage.getItem('silahub_lead_magnet_shown');
    if (modalShown) {
      setHasShown(true);
      return;
    }

    // Show modal after 15 seconds or on exit intent
    const timer = setTimeout(() => {
      if (!hasShown) {
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem('silahub_lead_magnet_shown', 'true');
      }
    }, 15000);

    // Exit intent detection
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem('silahub_lead_magnet_shown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleFormSuccess = () => {
    // Form submitted successfully, close modal
    setTimeout(() => {
      setIsOpen(false);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
          onClick={handleClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto relative"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
            >
              <SafeIcon icon={FiX} className="w-6 h-6" />
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-8 pb-6 rounded-t-2xl">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-white/20 p-3 rounded-lg">
                  <SafeIcon icon={FiDownload} className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-2">
                FREE Marketing Checklist
              </h3>
              <p className="text-center text-primary-100">
                "10 Ways to Double Your Leads in 30 Days"
              </p>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="text-center mb-6">
                <p className="text-gray-600 mb-4">
                  Get our proven checklist that has helped 500+ home service businesses 
                  dramatically increase their lead generation.
                </p>
                
                {/* Benefits */}
                <div className="text-left space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <SafeIcon icon={FiTrendingUp} className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">10 proven lead generation strategies</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <SafeIcon icon={FiTrendingUp} className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Step-by-step implementation guide</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <SafeIcon icon={FiTrendingUp} className="w-3 h-3 text-green-600" />
                    </div>
                    <span className="text-gray-700">Bonus: ROI tracking templates</span>
                  </div>
                </div>
              </div>

              {/* Lead Form */}
              <LeadCaptureForm 
                source="lead-magnet-modal"
                ctaText="Get My Free Checklist"
                className="space-y-4"
                showBusiness={false}
                showPhone={false}
                onSuccess={handleFormSuccess}
              />

              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LeadMagnetModal;