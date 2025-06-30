import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useLead } from '../../contexts/LeadContext';
import { useBlog } from '../../contexts/BlogContext';
import { useSEO } from '../../contexts/SEOContext';

const { FiUsers, FiFileText, FiTrendingUp, FiSettings, FiBarChart3, FiTarget } = FiIcons;

const AdminDashboard = () => {
  const { getLeadStats } = useLead();
  const { posts } = useBlog();
  const { getSEOScore } = useSEO();

  const leadStats = getLeadStats();
  const seoScore = getSEOScore();

  const dashboardStats = [
    {
      title: 'Total Leads',
      value: leadStats.total,
      change: '+12%',
      icon: FiUsers,
      color: 'bg-blue-500'
    },
    {
      title: 'Blog Posts',
      value: posts.length,
      change: '+3 this month',
      icon: FiFileText,
      color: 'bg-green-500'
    },
    {
      title: 'SEO Score',
      value: `${seoScore}%`,
      change: '+5%',
      icon: FiTrendingUp,
      color: 'bg-purple-500'
    },
    {
      title: 'Conversion Rate',
      value: `${leadStats.conversionRate}%`,
      change: '+2.5%',
      icon: FiTarget,
      color: 'bg-orange-500'
    }
  ];

  const quickActions = [
    {
      title: 'Manage Leads',
      description: 'View and manage all leads',
      icon: FiUsers,
      link: '/admin/leads',
      color: 'bg-blue-50 text-blue-600 border-blue-200'
    },
    {
      title: 'Blog Manager',
      description: 'Create and edit blog posts',
      icon: FiFileText,
      link: '/admin/blog',
      color: 'bg-green-50 text-green-600 border-green-200'
    },
    {
      title: 'SEO Manager',
      description: 'Manage SEO settings',
      icon: FiTrendingUp,
      link: '/admin/seo',
      color: 'bg-purple-50 text-purple-600 border-purple-200'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your website content and monitor performance</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {dashboardStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600">{stat.change}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <SafeIcon icon={stat.icon} className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={action.link}
                  className={`block p-6 rounded-xl border-2 hover:shadow-md transition-all ${action.color}`}
                >
                  <SafeIcon icon={action.icon} className="w-8 h-8 mb-3" />
                  <h3 className="text-lg font-semibold mb-2">{action.title}</h3>
                  <p className="text-sm opacity-75">{action.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="bg-blue-100 p-2 rounded-full">
                <SafeIcon icon={FiUsers} className="w-4 h-4 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">New lead received</p>
                <p className="text-xs text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="bg-green-100 p-2 rounded-full">
                <SafeIcon icon={FiFileText} className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Blog post published</p>
                <p className="text-xs text-gray-500">1 day ago</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className="bg-purple-100 p-2 rounded-full">
                <SafeIcon icon={FiTrendingUp} className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">SEO ranking improved</p>
                <p className="text-xs text-gray-500">3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;