import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiAward, FiStar, FiShield, FiTrendingUp } = FiIcons;

const CalgaryCertifications = () => {
  const certifications = [
    {
      name: "Google Partner",
      description: "Premier Google Ads certified partner",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=80&h=80&fit=crop",
      year: "2024",
      level: "Premier"
    },
    {
      name: "Facebook Marketing Partner",
      description: "Official Facebook advertising partner",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=80&h=80&fit=crop",
      year: "2024", 
      level: "Certified"
    },
    {
      name: "BBB A+ Rating",
      description: "Better Business Bureau accredited",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop",
      year: "2024",
      level: "A+ Rating"
    },
    {
      name: "Calgary Chamber of Commerce",
      description: "Proud member supporting local business",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=80&h=80&fit=crop",
      year: "2024",
      level: "Member"
    }
  ];

  const awards = [
    {
      title: "Top 3 Digital Agency Calgary",
      organization: "Calgary Business Journal",
      year: "2024",
      icon: FiAward
    },
    {
      title: "Best Local SEO Company",
      organization: "Alberta Business Awards",
      year: "2023",
      icon: FiStar
    },
    {
      title: "Client Satisfaction Excellence", 
      organization: "ServiceTitan Reviews",
      year: "2024",
      icon: FiTrendingUp
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Certified & Award-Winning Calgary Agency
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our certifications and awards prove our commitment to excellence and results for Calgary businesses.
          </p>
        </motion.div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Industry Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="relative mb-4">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-16 h-16 rounded-lg mx-auto object-cover"
                  />
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    {cert.year}
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-gray-600 text-sm mb-2">{cert.description}</p>
                <span className="inline-block bg-silahub-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                  {cert.level}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Recent Awards & Recognition</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <SafeIcon icon={award.icon} className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-2">{award.title}</h4>
                    <p className="text-gray-600 text-sm mb-2">{award.organization}</p>
                    <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                      {award.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Trusted by 500+ Calgary Businesses
            </h3>
            <p className="text-gray-600 mb-6">
              Our certifications and awards are backed by real results for real Calgary businesses.
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiShield} className="w-4 h-4" />
                <span>Fully Insured & Bonded</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiStar} className="w-4 h-4" />
                <span>4.9/5 Average Rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiAward} className="w-4 h-4" />
                <span>Award-Winning Service</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CalgaryCertifications;