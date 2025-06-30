import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import { useLead } from '../../contexts/LeadContext';

const { FiUsers, FiMail, FiPhone, FiCalendar, FiTag, FiMessageSquare, FiEdit, FiTrash2, FiTrendingUp } = FiIcons;

const LeadManager = () => {
  const { leads, updateLead, deleteLead, addNote, getLeadStats } = useLead();
  const [selectedLead, setSelectedLead] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [newNote, setNewNote] = useState('');

  const leadStats = getLeadStats();

  const statusColors = {
    new: 'bg-blue-100 text-blue-800',
    contacted: 'bg-yellow-100 text-yellow-800',
    qualified: 'bg-purple-100 text-purple-800',
    converted: 'bg-green-100 text-green-800',
    lost: 'bg-red-100 text-red-800'
  };

  const filteredLeads = filterStatus === 'all' 
    ? leads 
    : leads.filter(lead => lead.status === filterStatus);

  const handleStatusChange = (leadId, newStatus) => {
    updateLead(leadId, { status: newStatus });
  };

  const handleAddNote = (leadId) => {
    if (newNote.trim()) {
      addNote(leadId, newNote.trim());
      setNewNote('');
    }
  };

  const stats = [
    { title: 'Total Leads', value: leadStats.total, icon: FiUsers, color: 'bg-blue-500' },
    { title: 'New Leads', value: leadStats.new, icon: FiTag, color: 'bg-green-500' },
    { title: 'Qualified', value: leadStats.qualified, icon: FiUsers, color: 'bg-purple-500' },
    { title: 'Conversion Rate', value: `${leadStats.conversionRate}%`, icon: FiTrendingUp, color: 'bg-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Lead Manager</h1>
          <p className="text-gray-600">Manage and track your leads</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
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
                </div>
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <SafeIcon icon={stat.icon} className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Leads List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900">All Leads</h2>
                  <select
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="all">All Status</option>
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="qualified">Qualified</option>
                    <option value="converted">Converted</option>
                    <option value="lost">Lost</option>
                  </select>
                </div>
              </div>

              {filteredLeads.length === 0 ? (
                <div className="p-12 text-center">
                  <SafeIcon icon={FiUsers} className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No leads found.</p>
                </div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {filteredLeads.map((lead, index) => (
                    <motion.div
                      key={lead.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`p-6 hover:bg-gray-50 transition-colors cursor-pointer ${
                        selectedLead?.id === lead.id ? 'bg-primary-50 border-r-4 border-primary-600' : ''
                      }`}
                      onClick={() => setSelectedLead(lead)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">
                            {lead.name}
                          </h3>
                          <div className="space-y-1 mb-3">
                            <div className="flex items-center text-sm text-gray-600">
                              <SafeIcon icon={FiMail} className="w-4 h-4 mr-2" />
                              {lead.email}
                            </div>
                            {lead.phone && (
                              <div className="flex items-center text-sm text-gray-600">
                                <SafeIcon icon={FiPhone} className="w-4 h-4 mr-2" />
                                {lead.phone}
                              </div>
                            )}
                          </div>
                          <div className="flex items-center space-x-3 text-sm text-gray-500">
                            <div className="flex items-center">
                              <SafeIcon icon={FiCalendar} className="w-4 h-4 mr-1" />
                              {new Date(lead.createdAt).toLocaleDateString()}
                            </div>
                            <div className="flex items-center">
                              <SafeIcon icon={FiTag} className="w-4 h-4 mr-1" />
                              {lead.businessType || 'Not specified'}
                            </div>
                          </div>
                        </div>
                        <div className="ml-4">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${statusColors[lead.status]}`}>
                            {lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Lead Details */}
          <div className="space-y-6">
            {selectedLead ? (
              <>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Lead Details</h3>
                    <button
                      onClick={() => deleteLead(selectedLead.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <SafeIcon icon={FiTrash2} className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <p className="text-sm text-gray-900">{selectedLead.name}</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <p className="text-sm text-gray-900">{selectedLead.email}</p>
                    </div>

                    {selectedLead.phone && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <p className="text-sm text-gray-900">{selectedLead.phone}</p>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Business Type</label>
                      <p className="text-sm text-gray-900">{selectedLead.businessType || 'Not specified'}</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Source</label>
                      <p className="text-sm text-gray-900">{selectedLead.source}</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                      <select
                        value={selectedLead.status}
                        onChange={(e) => handleStatusChange(selectedLead.id, e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="qualified">Qualified</option>
                        <option value="converted">Converted</option>
                        <option value="lost">Lost</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Created</label>
                      <p className="text-sm text-gray-900">
                        {new Date(selectedLead.createdAt).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Notes Section */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Notes</h3>
                  
                  <div className="space-y-4 mb-4">
                    {selectedLead.notes && selectedLead.notes.length > 0 ? (
                      selectedLead.notes.map((note, index) => (
                        <div key={note.id} className="bg-gray-50 rounded-lg p-3">
                          <p className="text-sm text-gray-900 mb-2">{note.text}</p>
                          <p className="text-xs text-gray-500">
                            {new Date(note.createdAt).toLocaleString()}
                          </p>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500">No notes yet.</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <textarea
                      value={newNote}
                      onChange={(e) => setNewNote(e.target.value)}
                      placeholder="Add a note..."
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <button
                      onClick={() => handleAddNote(selectedLead.id)}
                      disabled={!newNote.trim()}
                      className="w-full bg-primary-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      Add Note
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
                <SafeIcon icon={FiUsers} className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Select a lead to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadManager;