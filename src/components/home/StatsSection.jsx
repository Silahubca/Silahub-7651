import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiUsers, FiTrendingUp, FiAward, FiTarget } = FiIcons;

const StatsSection = () => {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  const stats = [
    {
      icon: FiUsers,
      number: 500,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Home service businesses trust us'
    },
    {
      icon: FiTrendingUp,
      number: 250,
      suffix: '%',
      label: 'Average ROI',
      description: 'Return on marketing investment'
    },
    {
      icon: FiAward,
      number: 98,
      suffix: '%',
      label: 'Client Retention',
      description: 'Clients stay with us long-term'
    },
    {
      icon: FiTarget,
      number: 15000,
      suffix: '+',
      label: 'Leads Generated',
      description: 'Quality leads for our clients'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-silahub-primary to-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Proven Results That Speak for Themselves
          </h2>
          <p className="text-xl text-silahub-light max-w-3xl mx-auto">
            We've helped hundreds of home service businesses across Calgary and beyond achieve 
            remarkable growth through strategic digital marketing.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <div className="bg-white/20 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={stat.icon} className="w-8 h-8 text-white" />
                </div>
                <div className="mb-2">
                  <Counter 
                    end={stat.number} 
                    suffix={stat.suffix} 
                    duration={2000} 
                    start={inView} 
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {stat.label}
                </h3>
                <p className="text-silahub-light text-sm">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <blockquote className="text-xl text-white italic mb-6">
              "Silahub Technologies transformed our plumbing business. We went from 10 leads per month 
              to over 100 qualified leads. Their team understands home service businesses like no other agency."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
                alt="Client"
                className="w-12 h-12 rounded-full"
              />
              <div className="text-left">
                <div className="text-white font-semibold">Mike Johnson</div>
                <div className="text-silahub-light text-sm">Johnson Plumbing, Calgary</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Counter component with animation
const Counter = ({ end, suffix = '', duration = 2000, start = false }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return (
    <div className="text-4xl font-bold text-white">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

export default StatsSection;