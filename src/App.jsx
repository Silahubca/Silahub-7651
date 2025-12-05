import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Error Boundary
import ErrorBoundary from './components/common/ErrorBoundary';
import LazyWrapper from './components/common/LazyWrapper';

// Eagerly load Header and Footer for better UX
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Pricing = lazy(() => import('./pages/Pricing'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));

// Lazy load service pages
const SEOCalgary = lazy(() => import('./pages/services/SEOCalgary'));
const GoogleAdsCalgary = lazy(() => import('./pages/services/GoogleAdsCalgary'));
const ContentMarketingCalgary = lazy(() => import('./pages/services/ContentMarketingCalgary'));
const FacebookAdsCalgary = lazy(() => import('./pages/services/FacebookAdsCalgary'));
const SocialMediaManagementCalgary = lazy(() => import('./pages/services/SocialMediaManagementCalgary'));
const WebDesignCalgary = lazy(() => import('./pages/services/WebDesignCalgary'));
const ReputationManagementCalgary = lazy(() => import('./pages/services/ReputationManagementCalgary'));
const BrandingService = lazy(() => import('./pages/services/BrandingService'));
const GoogleMapsSEO = lazy(() => import('./pages/services/GoogleMapsSEO'));
const GoogleLocalServiceAds = lazy(() => import('./pages/services/GoogleLocalServiceAds'));

// Lazy load legal pages
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

// Lazy load landing pages
const HVACMarketingBlueprint = lazy(() => import('./pages/landing/HVACMarketingBlueprint'));
const PlumbingMarketingBlueprint = lazy(() => import('./pages/landing/PlumbingMarketingBlueprint'));
const ElectricalMarketingBlueprint = lazy(() => import('./pages/landing/ElectricalMarketingBlueprint'));
const CleaningServiceGrowthBlueprint = lazy(() => import('./pages/landing/CleaningServiceGrowthBlueprint'));
const LandscapingGrowthBlueprint = lazy(() => import('./pages/landing/LandscapingGrowthBlueprint'));
const RoofingGrowthBlueprint = lazy(() => import('./pages/landing/RoofingGrowthBlueprint'));
const HomeServiceGrowthBlueprint = lazy(() => import('./pages/landing/HomeServiceGrowthBlueprint'));

// Lazy load admin pages
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'));
const BlogManager = lazy(() => import('./pages/admin/BlogManager'));
const SEOManager = lazy(() => import('./pages/admin/SEOManager'));
const LeadManager = lazy(() => import('./pages/admin/LeadManager'));
const ImportWizard = lazy(() => import('./pages/admin/ImportWizard'));
const PDFFinder = lazy(() => import('./pages/admin/PDFFinder'));
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'));
import AuthGuard from './components/admin/AuthGuard';

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

    // Performance optimization: Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);

      // Preload critical images
      const preloadImage = (src) => {
        const img = new Image();
        img.src = src;
      };
      preloadImage('https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751267972532-Silahub%20Technologies%20-%20Wordmark.png');
    };

    preloadCriticalResources();
  }, []);

  const LoadingFallback = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  );

  return (
    <ErrorBoundary>
      <SEOProvider>
        <BlogProvider>
          <LeadProvider>
            <Router>
              <div className="min-h-screen bg-white">
                <ScrollToTop />
                <Header />
                <main className="relative">
                  <Suspense fallback={<LoadingFallback />}>
                    <Routes>
                      {/* Main Pages */}
                      <Route path="/" element={<LazyWrapper><Home /></LazyWrapper>} />
                      <Route path="/services" element={<LazyWrapper><Services /></LazyWrapper>} />
                      <Route path="/pricing" element={<LazyWrapper><Pricing /></LazyWrapper>} />
                      <Route path="/case-studies" element={<LazyWrapper><CaseStudies /></LazyWrapper>} />
                      <Route path="/portfolio" element={<LazyWrapper><Portfolio /></LazyWrapper>} />
                      <Route path="/about-us" element={<LazyWrapper><About /></LazyWrapper>} />
                      <Route path="/contact-us" element={<LazyWrapper><Contact /></LazyWrapper>} />
                      <Route path="/blog" element={<LazyWrapper><Blog /></LazyWrapper>} />
                      <Route path="/blog/:slug" element={<LazyWrapper><BlogPost /></LazyWrapper>} />

                      {/* Service Pages */}
                      <Route path="/services/seo-calgary" element={<LazyWrapper><SEOCalgary /></LazyWrapper>} />
                      <Route path="/services/google-ads-calgary" element={<LazyWrapper><GoogleAdsCalgary /></LazyWrapper>} />
                      <Route path="/services/content-marketing-calgary" element={<LazyWrapper><ContentMarketingCalgary /></LazyWrapper>} />
                      <Route path="/services/facebook-ads-calgary" element={<LazyWrapper><FacebookAdsCalgary /></LazyWrapper>} />
                      <Route path="/services/social-media-management-calgary" element={<LazyWrapper><SocialMediaManagementCalgary /></LazyWrapper>} />
                      <Route path="/services/web-design-calgary" element={<LazyWrapper><WebDesignCalgary /></LazyWrapper>} />
                      <Route path="/services/reputation-management-calgary" element={<LazyWrapper><ReputationManagementCalgary /></LazyWrapper>} />
                      <Route path="/services/branding-service" element={<LazyWrapper><BrandingService /></LazyWrapper>} />
                      <Route path="/services/google-maps-seo" element={<LazyWrapper><GoogleMapsSEO /></LazyWrapper>} />
                      <Route path="/services/google-local-service-ads" element={<LazyWrapper><GoogleLocalServiceAds /></LazyWrapper>} />

                      {/* Legal Pages */}
                      <Route path="/privacy-policy" element={<LazyWrapper><Privacy /></LazyWrapper>} />
                      <Route path="/terms-and-condition" element={<LazyWrapper><Terms /></LazyWrapper>} />

                      {/* Landing Pages */}
                      <Route path="/hvac-marketing-blueprint" element={<LazyWrapper><HVACMarketingBlueprint /></LazyWrapper>} />
                      <Route path="/plumbing-marketing-blueprint" element={<LazyWrapper><PlumbingMarketingBlueprint /></LazyWrapper>} />
                      <Route path="/electrical-marketing-blueprint" element={<LazyWrapper><ElectricalMarketingBlueprint /></LazyWrapper>} />
                      <Route path="/cleaning-service-growth-blueprint" element={<LazyWrapper><CleaningServiceGrowthBlueprint /></LazyWrapper>} />
                      <Route path="/landscaping-growth-blueprint" element={<LazyWrapper><LandscapingGrowthBlueprint /></LazyWrapper>} />
                      <Route path="/roofing-growth-blueprint" element={<LazyWrapper><RoofingGrowthBlueprint /></LazyWrapper>} />
                      <Route path="/home-service-growth-blueprint" element={<LazyWrapper><HomeServiceGrowthBlueprint /></LazyWrapper>} />

                      {/* Admin Pages */}
                      <Route path="/admin/login" element={<LazyWrapper><AdminLogin /></LazyWrapper>} />
                      <Route path="/admin" element={<AuthGuard><LazyWrapper><AdminDashboard /></LazyWrapper></AuthGuard>} />
                      <Route path="/admin/blog" element={<AuthGuard><LazyWrapper><BlogManager /></LazyWrapper></AuthGuard>} />
                      <Route path="/admin/seo" element={<AuthGuard><LazyWrapper><SEOManager /></LazyWrapper></AuthGuard>} />
                      <Route path="/admin/leads" element={<AuthGuard><LazyWrapper><LeadManager /></LazyWrapper></AuthGuard>} />
                      <Route path="/admin/import" element={<AuthGuard><LazyWrapper><ImportWizard /></LazyWrapper></AuthGuard>} />
                      <Route path="/admin/pdfs" element={<AuthGuard><LazyWrapper><PDFFinder /></LazyWrapper></AuthGuard>} />
                    </Routes>
                  </Suspense>
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
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)', 
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
    </ErrorBoundary>
  );
}

export default App;