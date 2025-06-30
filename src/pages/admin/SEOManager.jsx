import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useSEO } from '../../contexts/SEOContext';

const { FiTrendingUp, FiTarget, FiSearch, FiBarChart3, FiPlus, FiEdit, FiTrash2 } = FiIcons;

const SEOManager = () => {
  const { seoData, addKeyword, updateKeyword, deleteKeyword, getSEOScore } = useSEO();
  const [showKeywordForm, setShowKeywordForm] = useState(false);
  const [keywordFormData, setKeywordFormData] = useState({
    keyword: '',
    targetUrl: '',
    currentRanking: '',
    searchVolume: '',
    difficulty: ''
  });

  const seoScore = getSEOScore();

  const handleKeywordSubmit = (e) => {
    e.preventDefault();
    addKeyword(keywordFormData);
    setKeywordFormData({
      keyword: '',
      targetUrl: '',
      currentRanking: '',
      searchVolume: '',
      difficulty: ''
    });
    setShowKeywordForm(false);
  };

  const seoMetrics = [
    {
      title: 'SEO Score',
      value: `${seoScore}%`,
      change: '+5%',
      icon: FiTrendingUp,
      color: 'bg-green-500'
    },
    {
      title: 'Keywords Tracked',
      value: seoData.keywords.length,
      change: '+3 this month',
      icon: FiSearch,
      color: 'bg-blue-500'
    },
    {
      title: 'Top 10 Rankings',
      value: seoData.rankings?.filter(r => r.position <= 10).length || 0,
      change: '+2',
      icon: FiTarget,
      color: 'bg-purple-500'
    },
    {
      title: 'Pages Optimized',
      value: seoData.pages?.filter(p => p.optimized).length || 0,
      change: '+1',
      icon: FiBarChart3,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">SEO Manager</h1>
            <p className="text-gray-600">Monitor and manage your SEO performance</p>
          </div>
        </div>

        {/* SEO Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {seoMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{metric.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
                  <p className="text-sm text-green-600">{metric.change}</p>
                </div>
                <div className={`${metric.color} p-3 rounded-lg`}>
                  <SafeIcon icon={metric.icon} className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Keywords Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-900">Keyword Tracking</h2>
            <button
              onClick={() => setShowKeywordForm(true)}
              className="bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-flex items-center space-x-2"
            >
              <SafeIcon icon={FiPlus} className="w-4 h-4" />
              <span>Add Keyword</span>
            </button>
          </div>

          {seoData.keywords.length === 0 ? (
            <div className="p-12 text-center">
              <SafeIcon icon={FiSearch} className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No keywords tracked yet. Add your first keyword!</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Keyword
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Current Ranking
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Search Volume
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Difficulty
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {seoData.keywords.map((keyword, index) => (
                    <tr key={keyword.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{keyword.keyword}</div>
                          <div className="text-sm text-gray-500">{keyword.targetUrl}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          keyword.currentRanking <= 3 ? 'bg-green-100 text-green-800' :
                          keyword.currentRanking <= 10 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          #{keyword.currentRanking}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {keyword.searchVolume}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          keyword.difficulty === 'Low' ? 'bg-green-100 text-green-800' :
                          keyword.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {keyword.difficulty}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-primary-600 hover:text-primary-900 mr-3">
                          <SafeIcon icon={FiEdit} className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => deleteKeyword(keyword.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Keyword Form Modal */}
        {showKeywordForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-md w-full">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">Add New Keyword</h2>
              </div>
              
              <form onSubmit={handleKeywordSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Keyword</label>
                  <input
                    type="text"
                    value={keywordFormData.keyword}
                    onChange={(e) => setKeywordFormData({ ...keywordFormData, keyword: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="e.g., Calgary plumber"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Target URL</label>
                  <input
                    type="url"
                    value={keywordFormData.targetUrl}
                    onChange={(e) => setKeywordFormData({ ...keywordFormData, targetUrl: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="https://example.com/page"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Ranking</label>
                    <input
                      type="number"
                      value={keywordFormData.currentRanking}
                      onChange={(e) => setKeywordFormData({ ...keywordFormData, currentRanking: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="1-100"
                      min="1"
                      max="100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Search Volume</label>
                    <input
                      type="number"
                      value={keywordFormData.searchVolume}
                      onChange={(e) => setKeywordFormData({ ...keywordFormData, searchVolume: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="1000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                  <select
                    value={keywordFormData.difficulty}
                    onChange={(e) => setKeywordFormData({ ...keywordFormData, difficulty: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select Difficulty</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>

                <div className="flex justify-end space-x-4 pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setShowKeywordForm(false);
                      setKeywordFormData({
                        keyword: '',
                        targetUrl: '',
                        currentRanking: '',
                        searchVolume: '',
                        difficulty: ''
                      });
                    }}
                    className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Add Keyword
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SEOManager;