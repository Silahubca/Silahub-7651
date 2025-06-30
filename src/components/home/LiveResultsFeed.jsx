import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiTrendingUp, FiMapPin, FiClock, FiDollarSign } = FiIcons;

const LiveResultsFeed = () => {
  const [currentResult, setCurrentResult] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const liveResults = [
    {
      client: "Calgary Plumbing Pro",
      achievement: "Reached #1 for 'Calgary plumber'",
      metric: "+300% leads",
      timeAgo: "2 hours ago",
      location: "Kensington"
    },
    {
      client: "Elite HVAC Services",
      achievement: "Generated $15K in new revenue",
      metric: "450% ROAS",
      timeAgo: "4 hours ago", 
      location: "Beltline"
    },
    {
      client: "ProClean Calgary",
      achievement: "Booked solid for next 3 weeks",
      metric: "+250% bookings",
      timeAgo: "6 hours ago",
      location: "Mission"
    },
    {
      client: "Calgary Roofing Co.",
      achievement: "Won $50K commercial contract",
      metric: "From Google Ads",
      timeAgo: "8 hours ago",
      location: "Downtown"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentResult((prev) => (prev + 1) % liveResults.length);
        setIsVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const result = liveResults[currentResult];

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-sm">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.8 }}
            className="bg-white rounded-xl shadow-2xl p-4 border-l-4 border-green-500"
          >
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <SafeIcon icon={FiTrendingUp} className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-xs font-medium text-green-600">LIVE RESULT</span>
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  {result.client}
                </h4>
                <p className="text-gray-600 text-xs mb-2">
                  {result.achievement}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiMapPin} className="w-3 h-3" />
                    <span>{result.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full font-medium">
                      {result.metric}
                    </span>
                    <span>{result.timeAgo}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LiveResultsFeed;