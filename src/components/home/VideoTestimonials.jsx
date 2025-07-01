import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPlay, FiX, FiStar, FiMapPin, FiFacebook, FiInstagram, FiLinkedin, FiYoutube, FiTwitter } = FiIcons;

const VideoTestimonials = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Mike Johnson",
      company: "Johnson Plumbing",
      location: "Calgary, AB",
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=200&fit=crop&crop=face",
      videoId: "dQw4w9WgXcQ", // YouTube video ID
      quote: "Silahub helped us go from 10 leads per month to over 100. Our business has never been stronger.",
      result: "10x Lead Increase",
      rating: 5
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      company: "Elite HVAC Services",
      location: "Calgary, AB",
      thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=200&fit=crop&crop=face",
      videoId: "dQw4w9WgXcQ",
      quote: "The ROI on our marketing spend has been incredible. We're booking months in advance now.",
      result: "300% ROI Improvement",
      rating: 5
    },
    {
      id: 3,
      name: "David Chen",
      company: "ProClean Services",
      location: "Calgary, AB",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=face",
      videoId: "dQw4w9WgXcQ",
      quote: "Our website conversion rate improved dramatically. We're the go-to cleaning service in Calgary now.",
      result: "250% Conversion Increase",
      rating: 5
    }
  ];

  const socialLinks = [
    {
      name: 'Follow us on Facebook',
      icon: FiFacebook,
      url: 'https://www.facebook.com/silahubtechnologies'
    },
    {
      name: 'Follow us on Instagram',
      icon: FiInstagram,
      url: 'https://www.instagram.com/silahubtechnologies'
    },
    {
      name: 'Connect on LinkedIn',
      icon: FiLinkedin,
      url: 'https://www.linkedin.com/company/silahubtechnologies'
    },
    {
      name: 'Subscribe on YouTube',
      icon: FiYoutube,
      url: 'https://www.youtube.com/@silahubtechnologies'
    },
    {
      name: 'Follow on X',
      icon: FiTwitter,
      url: 'https://x.com/silahubtech'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <SafeIcon icon={FiPlay} className="w-4 h-4" />
            <span>Video Success Stories</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hear From Real Calgary Business Owners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch authentic video testimonials from home service businesses that have transformed their growth with our digital marketing strategies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
              onClick={() => setActiveVideo(testimonial)}
            >
              {/* Video Thumbnail */}
              <div className="relative overflow-hidden">
                <img
                  src={testimonial.thumbnail}
                  alt={testimonial.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <SafeIcon icon={FiPlay} className="w-8 h-8 text-silahub-primary ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                  {testimonial.result}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.company}</div>
                  <div className="flex items-center text-gray-500 text-xs mt-1">
                    <SafeIcon icon={FiMapPin} className="w-3 h-3 mr-1" />
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Media Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Stay Connected with Silahub
            </h3>
            <p className="text-gray-600 mb-6">
              Follow us on social media for the latest digital marketing tips, success stories, and industry insights.
            </p>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group"
                  aria-label={social.name}
                >
                  <SafeIcon 
                    icon={social.icon} 
                    className="w-6 h-6 text-gray-600 group-hover:text-silahub-primary transition-colors" 
                  />
                </a>
              ))}
              {/* TikTok Link */}
              <a
                href="https://www.tiktok.com/@silahub.technolog"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group"
                aria-label="Follow us on TikTok"
              >
                <span className="text-gray-600 group-hover:text-silahub-primary transition-colors font-bold text-lg">
                  TT
                </span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Video Modal */}
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
            <div className="relative w-full max-w-4xl">
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
              >
                <SafeIcon icon={FiX} className="w-8 h-8" />
              </button>
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo.videoId}?autoplay=1`}
                  title={`${activeVideo.name} Testimonial`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="bg-white rounded-b-lg p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={activeVideo.thumbnail}
                    alt={activeVideo.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{activeVideo.name}</div>
                    <div className="text-gray-600 text-sm">{activeVideo.company}</div>
                  </div>
                  <div className="ml-auto bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {activeVideo.result}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoTestimonials;