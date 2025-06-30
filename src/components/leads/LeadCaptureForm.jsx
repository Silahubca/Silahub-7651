import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useLead } from '../../contexts/LeadContext';

const { FiUser, FiMail, FiPhone, FiBriefcase, FiLoader } = FiIcons;

const LeadCaptureForm = ({ 
  source = 'general', 
  ctaText = 'Get Started', 
  className = '', 
  showBusiness = true, 
  showPhone = true 
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addLead } = useLead();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Add lead to context
      await addLead({
        ...data,
        source,
        timestamp: new Date().toISOString(),
        status: 'new'
      });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      toast.success('Thank you! We\'ll contact you within 24 hours.');
      reset();

      // Track conversion if gtag is available
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
          value: 1.0,
          currency: 'CAD'
        });
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit(onSubmit)}
      className={className}
    >
      {/* Name Field */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SafeIcon icon={FiUser} className="h-5 w-5 text-gray-400" />
        </div>
        <input
          {...register('name', {
            required: 'Name is required',
            minLength: { value: 2, message: 'Name must be at least 2 characters' }
          })}
          type="text"
          placeholder="Your Full Name"
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-silahub-primary focus:border-transparent transition-all duration-200"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <SafeIcon icon={FiMail} className="h-5 w-5 text-gray-400" />
        </div>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Please enter a valid email address'
            }
          })}
          type="email"
          placeholder="Your Email Address"
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-silahub-primary focus:border-transparent transition-all duration-200"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {/* Phone Field */}
      {showPhone && (
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SafeIcon icon={FiPhone} className="h-5 w-5 text-gray-400" />
          </div>
          <input
            {...register('phone', {
              required: 'Phone number is required',
              pattern: {
                value: /^[+]?[1-9][\d]{0,15}$/,
                message: 'Please enter a valid phone number'
              }
            })}
            type="tel"
            placeholder="Your Phone Number"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-silahub-primary focus:border-transparent transition-all duration-200"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
          )}
        </div>
      )}

      {/* Business Type Field */}
      {showBusiness && (
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SafeIcon icon={FiBriefcase} className="h-5 w-5 text-gray-400" />
          </div>
          <select
            {...register('businessType', { required: 'Please select your business type' })}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-silahub-primary focus:border-transparent transition-all duration-200 appearance-none bg-white"
          >
            <option value="">Select Your Business Type</option>
            <option value="plumbing">Plumbing</option>
            <option value="hvac">HVAC</option>
            <option value="electrical">Electrical</option>
            <option value="roofing">Roofing</option>
            <option value="landscaping">Landscaping</option>
            <option value="cleaning">Cleaning Services</option>
            <option value="handyman">Handyman Services</option>
            <option value="painting">Painting</option>
            <option value="flooring">Flooring</option>
            <option value="pest-control">Pest Control</option>
            <option value="other">Other</option>
          </select>
          {errors.businessType && (
            <p className="mt-1 text-sm text-red-600">{errors.businessType.message}</p>
          )}
        </div>
      )}

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-silahub-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center space-x-2"
      >
        {isSubmitting ? (
          <>
            <SafeIcon icon={FiLoader} className="w-5 h-5 animate-spin" />
            <span>Submitting...</span>
          </>
        ) : (
          <span>{ctaText}</span>
        )}
      </motion.button>
    </motion.form>
  );
};

export default LeadCaptureForm;