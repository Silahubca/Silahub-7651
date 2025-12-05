import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiMenu, FiX, FiPhone, FiMail, FiMapPin } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleResize = () => {
      // Close mobile menu on resize to desktop
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about-us' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact-us' },
  ];

  // Handle link clicks to ensure proper scrolling
  const handleLinkClick = () => {
    setIsMenuOpen(false);
    // Small delay to ensure route change happens first
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      {/* Top Bar - Hidden on mobile for cleaner look */}
      <div className="bg-primary-600 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:8255581832" className="flex items-center space-x-2 hover:text-primary-100 transition-colors" aria-label="Call us">
                <SafeIcon icon={FiPhone} className="w-4 h-4" />
                <span>825 558 1832</span>
              </a>
              <a href="mailto:hello@silahub.com" className="flex items-center space-x-2 hover:text-primary-100 transition-colors" aria-label="Email us">
                <SafeIcon icon={FiMail} className="w-4 h-4" />
                <span>hello@silahub.com</span>
              </a>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                <span>Calgary, Alberta</span>
              </div>
            </div>
            <div className="text-primary-100">Serving Calgary, Alberta & USA</div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' : 'bg-white'}`}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" onClick={handleLinkClick} className="flex items-center focus-ring" aria-label="Silahub Technologies Home">
              <img src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751267972532-Silahub%20Technologies%20-%20Wordmark.png" alt="Silahub Technologies" className="h-8 lg:h-10 w-auto" loading="eager" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8" role="navigation">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleLinkClick}
                  className={`font-medium transition-colors duration-200 hover:text-primary-600 focus-ring ${location.pathname === item.href ? 'text-primary-600' : 'text-gray-700'}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact-us" onClick={handleLinkClick} className="bg-primary-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 focus-ring">
                Get Free Quote
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus-ring" aria-label="Toggle menu" aria-expanded={isMenuOpen}>
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="md:hidden bg-white border-t border-gray-200 overflow-hidden">
              <div className="px-4 py-4 space-y-4">
                <div className="pb-4 border-b border-gray-200 md:hidden">
                  <a href="tel:8255581832" className="flex items-center space-x-2 text-primary-600 hover:text-primary-700">
                    <SafeIcon icon={FiPhone} className="w-4 h-4" />
                    <span>825 558 1832</span>
                  </a>
                </div>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={handleLinkClick}
                    className={`block font-medium transition-colors duration-200 hover:text-primary-600 focus-ring py-2 ${location.pathname === item.href ? 'text-primary-600' : 'text-gray-700'}`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link to="/contact-us" onClick={handleLinkClick} className="block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-primary-700 transition-colors duration-200 focus-ring mt-4">
                  Get Free Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;