import React,{useEffect} from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesOverview from '../components/home/ServicesOverview';
import InteractiveROICalculator from '../components/home/InteractiveROICalculator';
import StatsSection from '../components/home/StatsSection';
import BeforeAfterShowcase from '../components/home/BeforeAfterShowcase';
import VideoTestimonials from '../components/home/VideoTestimonials';
import LocalPresenceMap from '../components/home/LocalPresenceMap';
import CaseStudiesPreview from '../components/home/CaseStudiesPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';
import LeadMagnetModal from '../components/leads/LeadMagnetModal';
import LiveChatWidget from '../components/home/LiveChatWidget';

const Home=()=>{
  // Set page title and SEO meta tags
  useEffect(()=>{
    document.title='Silahub Technologies - Digital Marketing Agency Calgary | SEO,Google Ads,Web Design';
    const metaDescription=document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content','Calgary\'s premier digital marketing agency for home service businesses. Expert SEO,Google Ads,Facebook Ads,website design & more. Get your free consultation today!');
    }
  },[]);
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <InteractiveROICalculator />
      <StatsSection />
      <BeforeAfterShowcase />
      <VideoTestimonials />
      <LocalPresenceMap />
      <CaseStudiesPreview />
      <TestimonialsSection />
      <CTASection />
      <LeadMagnetModal />
      <LiveChatWidget />
    </>
  );
};
export default Home;