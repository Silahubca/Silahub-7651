import React, { createContext, useContext, useState, useEffect } from 'react';

const SEOContext = createContext();

export const useSEO = () => {
  const context = useContext(SEOContext);
  if (!context) {
    throw new Error('useSEO must be used within a SEOProvider');
  }
  return context;
};

export const SEOProvider = ({ children }) => {
  const [seoData, setSeoData] = useState({
    keywords: [],
    rankings: [],
    competitors: [],
    pages: []
  });
  const [isLoading, setIsLoading] = useState(false);

  // Load SEO data from localStorage on mount
  useEffect(() => {
    const savedSeoData = localStorage.getItem('silahub_seo_data');
    if (savedSeoData) {
      setSeoData(JSON.parse(savedSeoData));
    }
  }, []);

  // Save SEO data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('silahub_seo_data', JSON.stringify(seoData));
  }, [seoData]);

  const addKeyword = (keywordData) => {
    const newKeyword = {
      id: Date.now().toString(),
      ...keywordData,
      createdAt: new Date().toISOString()
    };
    
    setSeoData(prev => ({
      ...prev,
      keywords: [newKeyword, ...prev.keywords]
    }));
    
    return newKeyword;
  };

  const updateKeyword = (keywordId, updates) => {
    setSeoData(prev => ({
      ...prev,
      keywords: prev.keywords.map(keyword => 
        keyword.id === keywordId 
          ? { ...keyword, ...updates, updatedAt: new Date().toISOString() }
          : keyword
      )
    }));
  };

  const deleteKeyword = (keywordId) => {
    setSeoData(prev => ({
      ...prev,
      keywords: prev.keywords.filter(keyword => keyword.id !== keywordId)
    }));
  };

  const addRanking = (rankingData) => {
    const newRanking = {
      id: Date.now().toString(),
      ...rankingData,
      date: new Date().toISOString()
    };
    
    setSeoData(prev => ({
      ...prev,
      rankings: [newRanking, ...prev.rankings]
    }));
    
    return newRanking;
  };

  const updatePageSEO = (pageId, seoUpdates) => {
    setSeoData(prev => ({
      ...prev,
      pages: prev.pages.map(page => 
        page.id === pageId 
          ? { ...page, ...seoUpdates, updatedAt: new Date().toISOString() }
          : page
      )
    }));
  };

  const getSEOScore = () => {
    // Calculate overall SEO score based on various factors
    const factors = {
      keywordCount: seoData.keywords.length,
      pageOptimization: seoData.pages.filter(page => page.optimized).length,
      rankingImprovements: seoData.rankings.filter(ranking => ranking.position <= 10).length
    };
    
    let score = 0;
    if (factors.keywordCount > 0) score += 25;
    if (factors.pageOptimization > 0) score += 35;
    if (factors.rankingImprovements > 0) score += 40;
    
    return Math.min(score, 100);
  };

  const value = {
    seoData,
    isLoading,
    addKeyword,
    updateKeyword,
    deleteKeyword,
    addRanking,
    updatePageSEO,
    getSEOScore
  };

  return (
    <SEOContext.Provider value={value}>
      {children}
    </SEOContext.Provider>
  );
};