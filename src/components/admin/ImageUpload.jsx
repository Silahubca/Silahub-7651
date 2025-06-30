import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiUpload, FiImage, FiX, FiLoader } = FiIcons;

const ImageUpload = ({ onImageSelect, currentImage = null }) => {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState(currentImage);
  const [dragActive, setDragActive] = useState(false);

  const handleFileSelect = async (file) => {
    if (!file || !file.type.startsWith('image/')) {
      alert('Please select a valid image file');
      return;
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Image size must be less than 5MB');
      return;
    }

    setIsUploading(true);

    try {
      // Convert to base64 for localStorage storage
      const base64 = await convertToBase64(file);
      
      // Create a unique filename
      const timestamp = Date.now();
      const filename = `${timestamp}_${file.name}`;
      
      // Store in localStorage (for demo) - in production, upload to server
      const imageData = {
        filename,
        base64,
        size: file.size,
        type: file.type,
        uploadedAt: new Date().toISOString()
      };

      // Save to localStorage
      const existingImages = JSON.parse(localStorage.getItem('blog_images') || '[]');
      existingImages.push(imageData);
      localStorage.setItem('blog_images', JSON.stringify(existingImages));

      // Set preview and notify parent
      setPreview(base64);
      onImageSelect({
        url: base64,
        filename,
        alt: file.name
      });

    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Error uploading image. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = (error) => reject(error);
    });
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleInputChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleFileSelect(e.target.files[0]);
    }
  };

  const removeImage = () => {
    setPreview(null);
    onImageSelect(null);
  };

  return (
    <div className="space-y-4">
      {preview ? (
        // Image Preview
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative"
        >
          <img
            src={preview}
            alt="Preview"
            className="w-full h-48 object-cover rounded-lg border border-gray-300"
          />
          <button
            onClick={removeImage}
            className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
          >
            <SafeIcon icon={FiX} className="w-4 h-4" />
          </button>
        </motion.div>
      ) : (
        // Upload Area
        <div
          className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            dragActive
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-300 hover:border-gray-400'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept="image/*"
            onChange={handleInputChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            disabled={isUploading}
          />
          
          {isUploading ? (
            <div className="flex flex-col items-center">
              <SafeIcon icon={FiLoader} className="w-8 h-8 text-blue-500 animate-spin mb-2" />
              <p className="text-gray-600">Uploading image...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <SafeIcon icon={FiImage} className="w-12 h-12 text-gray-400 mb-4" />
              <p className="text-gray-600 mb-2">
                Drag and drop an image here, or click to select
              </p>
              <p className="text-sm text-gray-500">
                Supports JPG, PNG, GIF up to 5MB
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ImageUpload;