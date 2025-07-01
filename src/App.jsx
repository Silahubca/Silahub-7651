import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import CaseStudies from './pages/CaseStudies';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import AdminDashboard from './pages/admin/AdminDashboard';
import BlogManager from './pages/admin/BlogManager';
import SEOManager from './pages/admin/SEOManager';
import LeadManager from './pages/admin/LeadManager';

// Service Pages
import SEOCalgary from './pages/services/SEOCalgary';
import GoogleAdsCalgary from './pages/services/GoogleAdsCalgary';
import ContentMarketingCalgary from './pages/services/ContentMarketingCalgary';
import FacebookAdsCalgary from './pages/services/FacebookAdsCalgary';
import SocialMediaManagementCalgary from './pages/services/SocialMediaManagementCalgary';
import WebDesignCalgary from './pages/services/WebDesignCalgary';
import ReputationManagementCalgary from './pages/services/ReputationManagementCalgary';
import BrandingService from './pages/services/BrandingService';
import GoogleMapsSEO from './pages/services/GoogleMapsSEO';
import GoogleLocalServiceAds from './pages/services/GoogleLocalServiceAds';

// Contexts
import { LeadProvider } from './contexts/LeadContext';
import { BlogProvider } from './contexts/BlogContext';
import { SEOProvider } from './contexts/SEOContext';

function App() {
  useEffect(() => {
    // Initialize any necessary app-level functionality
    console.log('Silahub Technologies App loaded successfully');
    
    // Set initial theme/design preferences
    document.documentElement.style.setProperty('--primary-color', '#4B154B');
    document.documentElement.style.setProperty('--secondary-color', '#EFCECF');
  }, []);

  return (
    <SEOProvider>
      <BlogProvider>
        <LeadProvider>
          <Router>
            <div className="min-h-screen bg-white">
              <ScrollToTop />
              <Header />
              <main className="relative">
                <Routes>
                  {/* Main Pages */}
                  <Route path="/" element={<Home />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/pricing" element={<Pricing />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:slug" element={<BlogPost />} />
                  
                  {/* Service Pages */}
                  <Route path="/services/seo-calgary" element={<SEOCalgary />} />
                  <Route path="/services/google-ads-calgary" element={<GoogleAdsCalgary />} />
                  <Route path="/services/content-marketing-calgary" element={<ContentMarketingCalgary />} />
                  <Route path="/services/facebook-ads-calgary" element={<FacebookAdsCalgary />} />
                  <Route path="/services/social-media-management-calgary" element={<SocialMediaManagementCalgary />} />
                  <Route path="/services/web-design-calgary" element={<WebDesignCalgary />} />
                  <Route path="/services/reputation-management-calgary" element={<ReputationManagementCalgary />} />
                  <Route path="/services/branding-service" element={<BrandingService />} />
                  <Route path="/services/google-maps-seo" element={<GoogleMapsSEO />} />
                  <Route path="/services/google-local-service-ads" element={<GoogleLocalServiceAds />} />
                  
                  {/* Admin Pages */}
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/admin/blog" element={<BlogManager />} />
                  <Route path="/admin/seo" element={<SEOManager />} />
                  <Route path="/admin/leads" element={<LeadManager />} />
                </Routes>
              </main>
              <Footer />
              
              {/* Toast Notifications */}
              <Toaster 
                position="top-right"
                toastOptions={{
                  duration: 4000,
                  style: {
                    background: '#4B154B',
                    color: '#fff',
                    borderRadius: '12px',
                    padding: '16px',
                    fontWeight: '500',
                  },
                  success: {
                    iconTheme: {
                      primary: '#EFCECF',
                      secondary: '#4B154B',
                    },
                  },
                }}
              />
            </div>
          </Router>
        </LeadProvider>
      </BlogProvider>
    </SEOProvider>
  );
}

export default App;