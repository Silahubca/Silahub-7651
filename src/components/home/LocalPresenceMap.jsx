import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiMapPin, FiUsers, FiTrendingUp, FiStar } = FiIcons;

const LocalPresenceMap = () => {
  const serviceAreas = [
    { name: "Downtown Calgary", clients: 45, growth: "+25%", x: "50%", y: "45%" },
    { name: "Kensington", clients: 32, growth: "+18%", x: "45%", y: "40%" },
    { name: "Hillhurst", clients: 28, growth: "+22%", x: "44%", y: "42%" },
    { name: "Beltline", clients: 38, growth: "+30%", x: "51%", y: "48%" },
    { name: "Inglewood", clients: 25, growth: "+15%", x: "55%", y: "50%" },
    { name: "Mission", clients: 35, growth: "+20%", x: "48%", y: "52%" },
    { name: "Bridgeland", clients: 22, growth: "+12%", x: "52%", y: "38%" },
    { name: "Eau Claire", clients: 18, growth: "+28%", x: "49%", y: "43%" }
  ];

  const stats = [
    { icon: FiUsers, value: "500+", label: "Active Clients", color: "text-blue-600" },
    { icon: FiMapPin, value: "25+", label: "Calgary Areas", color: "text-green-600" },
    { icon: FiTrendingUp, value: "85%", label: "Market Coverage", color: "text-purple-600" },
    { icon: FiStar, value: "4.9/5", label: "Client Rating", color: "text-yellow-600" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <SafeIcon icon={FiMapPin} className="w-4 h-4" />
            <span>Calgary Local Domination</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Serving Home Service Businesses Across Calgary
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We have active clients in every major Calgary neighborhood, helping local businesses dominate their service areas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Calgary Market Presence</h3>
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white rounded-lg p-4 shadow-sm">
                <div className={`w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center`}>
                  <SafeIcon icon={stat.icon} className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Interactive Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Calgary Map Background */}
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl overflow-hidden">
              {/* Simplified Calgary outline */}
              <svg className="w-full h-full" viewBox="0 0 400 300">
                <path
                  d="M50 50 L350 50 L350 250 L50 250 Z M100 100 L120 80 L140 100 L160 90 L180 110 L200 100 L220 120 L240 110 L260 130 L280 120 L300 140 L320 130 L340 150"
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  opacity="0.3"
                />
              </svg>

              {/* Service Area Dots */}
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="absolute group cursor-pointer"
                  style={{ left: area.x, top: area.y, transform: 'translate(-50%, -50%)' }}
                >
                  {/* Animated Pulse */}
                  <div className="absolute inset-0 bg-silahub-primary rounded-full animate-ping opacity-20"></div>
                  
                  {/* Main Dot */}
                  <div className="w-4 h-4 bg-silahub-primary rounded-full border-2 border-white shadow-lg group-hover:scale-125 transition-transform"></div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-white rounded-lg shadow-xl p-3 z-10 min-w-max">
                    <div className="font-semibold text-gray-900">{area.name}</div>
                    <div className="text-sm text-gray-600">{area.clients} clients</div>
                    <div className="text-sm text-green-600 font-medium">{area.growth} growth</div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                  </div>
                </motion.div>
              ))}

              {/* Legend */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center space-x-2 text-sm">
                  <div className="w-3 h-3 bg-silahub-primary rounded-full"></div>
                  <span className="text-gray-700">Active Service Areas</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Success Stories */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Local Success Stories</h3>
            
            {[
              { area: "Kensington", business: "Elite Plumbing", result: "300% lead increase" },
              { area: "Beltline", business: "ProClean Services", result: "5x revenue growth" },
              { area: "Mission", business: "Calgary HVAC Pro", result: "#1 local ranking" }
            ].map((story, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-silahub-primary">
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiMapPin} className="w-5 h-5 text-silahub-primary mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">{story.business}</div>
                    <div className="text-gray-600 text-sm">{story.area}</div>
                    <div className="text-green-600 text-sm font-medium">{story.result}</div>
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-r from-silahub-primary to-primary-800 rounded-lg p-6 text-white">
              <h4 className="font-bold mb-2">Ready to Dominate Your Area?</h4>
              <p className="text-sm opacity-90 mb-4">Join 500+ Calgary businesses growing with our proven strategies.</p>
              <button className="bg-white text-silahub-primary px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">
                Get Area Analysis
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocalPresenceMap;