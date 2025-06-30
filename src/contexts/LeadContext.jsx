import React, { createContext, useContext, useState, useEffect } from 'react';

const LeadContext = createContext();

export const useLead = () => {
  const context = useContext(LeadContext);
  if (!context) {
    throw new Error('useLead must be used within a LeadProvider');
  }
  return context;
};

export const LeadProvider = ({ children }) => {
  const [leads, setLeads] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load leads from localStorage on mount
  useEffect(() => {
    const savedLeads = localStorage.getItem('silahub_leads');
    if (savedLeads) {
      setLeads(JSON.parse(savedLeads));
    }
  }, []);

  // Save leads to localStorage whenever leads change
  useEffect(() => {
    localStorage.setItem('silahub_leads', JSON.stringify(leads));
  }, [leads]);

  const addLead = async (leadData) => {
    setIsLoading(true);
    try {
      const newLead = {
        id: Date.now().toString(),
        ...leadData,
        createdAt: new Date().toISOString(),
        status: 'new',
        notes: []
      };
      
      setLeads(prev => [newLead, ...prev]);
      
      // Here you would typically send to your backend
      // await api.createLead(newLead);
      
      return newLead;
    } catch (error) {
      console.error('Error adding lead:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateLead = (leadId, updates) => {
    setLeads(prev => prev.map(lead => 
      lead.id === leadId 
        ? { ...lead, ...updates, updatedAt: new Date().toISOString() }
        : lead
    ));
  };

  const deleteLead = (leadId) => {
    setLeads(prev => prev.filter(lead => lead.id !== leadId));
  };

  const addNote = (leadId, note) => {
    setLeads(prev => prev.map(lead => 
      lead.id === leadId 
        ? { 
            ...lead, 
            notes: [...lead.notes, {
              id: Date.now().toString(),
              text: note,
              createdAt: new Date().toISOString()
            }],
            updatedAt: new Date().toISOString()
          }
        : lead
    ));
  };

  const getLeadStats = () => {
    const total = leads.length;
    const newLeads = leads.filter(lead => lead.status === 'new').length;
    const contacted = leads.filter(lead => lead.status === 'contacted').length;
    const qualified = leads.filter(lead => lead.status === 'qualified').length;
    const converted = leads.filter(lead => lead.status === 'converted').length;
    
    return {
      total,
      new: newLeads,
      contacted,
      qualified,
      converted,
      conversionRate: total > 0 ? Math.round((converted / total) * 100) : 0
    };
  };

  const value = {
    leads,
    isLoading,
    addLead,
    updateLead,
    deleteLead,
    addNote,
    getLeadStats
  };

  return (
    <LeadContext.Provider value={value}>
      {children}
    </LeadContext.Provider>
  );
};