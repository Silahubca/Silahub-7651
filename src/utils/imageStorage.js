// Image storage utilities for production
export class ImageStorage {
  constructor() {
    this.storageKey = 'blog_images';
  }

  // Save image to localStorage (development)
  saveToLocalStorage(imageData) {
    try {
      const existingImages = this.getStoredImages();
      existingImages.push(imageData);
      localStorage.setItem(this.storageKey, JSON.stringify(existingImages));
      return true;
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      return false;
    }
  }

  // Get all stored images
  getStoredImages() {
    try {
      return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    } catch (error) {
      console.error('Error reading from localStorage:', error);
      return [];
    }
  }

  // Delete image
  deleteImage(filename) {
    try {
      const existingImages = this.getStoredImages();
      const filteredImages = existingImages.filter(img => img.filename !== filename);
      localStorage.setItem(this.storageKey, JSON.stringify(filteredImages));
      return true;
    } catch (error) {
      console.error('Error deleting image:', error);
      return false;
    }
  }

  // For production: Upload to server
  async uploadToServer(file) {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/upload-image.php', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const result = await response.json();
      return {
        success: true,
        url: result.url,
        filename: result.filename
      };
    } catch (error) {
      console.error('Upload error:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  // Compress image before upload
  compressImage(file, maxWidth = 1200, quality = 0.8) {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();

      img.onload = () => {
        // Calculate new dimensions
        let { width, height } = img;
        if (width > maxWidth) {
          height = (height * maxWidth) / width;
          width = maxWidth;
        }

        // Set canvas size
        canvas.width = width;
        canvas.height = height;

        // Draw and compress
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob(resolve, 'image/jpeg', quality);
      };

      img.src = URL.createObjectURL(file);
    });
  }
}

export default new ImageStorage();