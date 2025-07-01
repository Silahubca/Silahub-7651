import React from 'react';
import { Link } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiPhone, FiMail, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiYoutube } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Search Engine Optimization (SEO)', href: '/services/seo-calgary' },
    { name: 'Google Ads Management', href: '/services/google-ads-calgary' },
    { name: 'Facebook Ads Management', href: '/services/facebook-ads-calgary' },
    { name: 'Social Media Management', href: '/services/social-media-management-calgary' },
    { name: 'Website Design & Development', href: '/services/web-design-calgary' },
    { name: 'Reputation Management', href: '/services/reputation-management-calgary' },
    { name: 'Content Marketing', href: '/services/content-marketing-calgary' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: FiFacebook,
      url: 'https://www.facebook.com/silahubtechnologies'
    },
    {
      name: 'Instagram',
      icon: FiInstagram,
      url: 'https://www.instagram.com/silahubtechnologies'
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      url: 'https://www.linkedin.com/company/silahubtechnologies'
    },
    {
      name: 'YouTube',
      icon: FiYoutube,
      url: 'https://www.youtube.com/@silahubtechnologies'
    },
    {
      name: 'X (Twitter)',
      icon: FiTwitter,
      url: 'https://x.com/silahubtech'
    }
  ];

  // Handle link clicks to ensure proper scrolling
  const handleLinkClick = () => {
    // Small delay to ensure route change happens first
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751268017774-Silahub%20Technologies%20-%20White%20Primary%20Logo.png"
                alt="Silahub Technologies"
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed">
              Calgary's premier digital marketing agency specializing in home service businesses and contractors. We help you grow your business with proven digital marketing strategies.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-silahub-secondary transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <SafeIcon icon={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
            {/* TikTok Link (using external icon since react-icons doesn't have TikTok) */}
            <div className="mt-2">
              <a
                href="https://www.tiktok.com/@silahub.technolog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-silahub-secondary transition-colors text-sm flex items-center space-x-2"
                aria-label="Follow us on TikTok"
              >
                <div className="w-9 h-9 bg-gray-800 rounded-lg hover:bg-gray-700 flex items-center justify-center transition-colors">
                  <span className="text-sm font-bold">TT</span>
                </div>
                <span>Follow us on TikTok</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.href}
                    onClick={handleLinkClick}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    onClick={handleLinkClick}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Admin Link - Hidden in production */}
            <div className="mt-4 pt-4 border-t border-gray-800">
              <Link
                to="/admin"
                onClick={handleLinkClick}
                className="text-gray-500 hover:text-gray-400 transition-colors text-xs"
              >
                Admin Dashboard
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiPhone} className="w-5 h-5 text-silahub-secondary mt-0.5" />
                <div>
                  <p className="text-white font-medium">825-288-8332</p>
                  <p className="text-gray-400 text-sm">Call us anytime</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMail} className="w-5 h-5 text-silahub-secondary mt-0.5" />
                <div>
                  <p className="text-white font-medium">hello@silahub.com</p>
                  <p className="text-gray-400 text-sm">Email us 24/7</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="w-5 h-5 text-silahub-secondary mt-0.5" />
                <div>
                  <p className="text-white font-medium">Calgary, Alberta</p>
                  <p className="text-gray-400 text-sm">Serving Canada & USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Silahub Technologies. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy"
                onClick={handleLinkClick}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                onClick={handleLinkClick}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;