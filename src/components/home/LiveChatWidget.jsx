import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiMessageCircle, FiX, FiSend, FiUser, FiBot, FiPhone, FiMail, FiCalendar, FiStar } = FiIcons;

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 Hi! I'm Alex from Silahub Technologies. I'm here to help you grow your Calgary home service business. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
      type: 'greeting'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef(null);

  // Top questions and answers
  const quickQuestions = [
    { text: "How much does SEO cost?", category: "pricing" },
    { text: "Do you work with contractors?", category: "services" },
    { text: "What's your ROI guarantee?", category: "guarantee" },
    { text: "How long for results?", category: "results" },
    { text: "Are you Calgary based?", category: "location" },
    { text: "Free consultation available?", category: "consultation" }
  ];

  const cannedResponses = {
    pricing: {
      "How much does SEO cost?": "Our SEO services start at $1,500/month with no setup fees. We also offer Google Ads ($1,200+/month) and Facebook Ads ($1,000+/month). Would you like a free audit to see what's best for your business?",
      "What are your payment terms?": "All our services are month-to-month with no long-term contracts. You can cancel anytime with 30 days notice. We offer a 100% satisfaction guarantee.",
      "Do you offer discounts?": "Yes! Our Complete Marketing Solution saves you $4,203/month compared to buying services separately. Get all our services for just $4,997/month."
    },
    services: {
      "Do you work with contractors?": "Absolutely! We specialize exclusively in home service businesses - plumbers, HVAC, electricians, roofers, cleaners, and more. We've helped 500+ Calgary contractors grow their businesses.",
      "Do you design websites?": "Yes! We create professional, mobile-optimized websites that convert visitors into customers. Starting at $967 one-time setup plus $99/month hosting.",
      "What marketing services do you offer?": "We offer SEO, Google Ads, Facebook Ads, social media management, content marketing, reputation management, and branding services - everything your home service business needs."
    },
    guarantee: {
      "What's your ROI guarantee?": "We guarantee measurable improvements within 90 days or get your money back. Average ROI across our clients is 5x within 6 months. Plus, we offer 24/7 support and monthly strategy sessions.",
      "Do you guarantee #1 rankings?": "While we can't guarantee specific rankings (Google doesn't allow this), we do guarantee significant improvements in your online visibility, website traffic, and lead generation through proven strategies."
    },
    results: {
      "How long for results?": "Most clients see improved website traffic within 30 days. SEO rankings typically improve within 3-6 months, Google Ads generate leads immediately. We've helped clients increase leads by 200-500% in the first year.",
      "What kind of results do you get?": "Our clients average 5x ROI, 300% more leads, and $50K-$200K additional annual revenue. We track everything with detailed monthly reports."
    },
    location: {
      "Are you Calgary based?": "Definitely! We're based in Calgary and specialize in helping local home service businesses dominate their market. We understand the Calgary market better than anyone.",
      "Do you serve other areas?": "While we specialize in Calgary, we work with home service businesses across Alberta and select markets in the USA. Our local expertise gives Calgary businesses a significant advantage."
    },
    consultation: {
      "Free consultation available?": "Yes! We offer free marketing audits and consultations. During our 30-minute call, we'll analyze your current marketing and provide custom recommendations with no obligation.",
      "How do I get started?": "Simply reply to this message or call us at 825-288-8332. We'll schedule your free consultation and start growing your business today!"
    },
    general: [
      {
        question: "Tell me more about Silahub",
        answer: "We're Calgary's premier digital marketing agency specializing in home service businesses. Founded with technical expertise, we've helped 500+ contractors grow their businesses with proven strategies in SEO, Google Ads, and more."
      },
      {
        question: "Why choose Silahub over other agencies?",
        answer: "We specialize exclusively in home service businesses, understand your unique challenges, offer transparent pricing with no long-term contracts, and guarantee results. Plus, we're local to Calgary!"
      },
      {
        question: "What makes you different?",
        answer: "Our founder has 15+ years of technical experience, we focus exclusively on home service businesses, offer month-to-month service, and provide guaranteed ROI. Most importantly, we've helped 500+ Calgary businesses succeed."
      }
    ]
  };

  // Auto-show modal after 20 seconds
  useEffect(() => {
    const modalShown = localStorage.getItem('silahub_chat_shown');
    if (modalShown) {
      setHasShown(true);
      return;
    }

    const timer = setTimeout(() => {
      if (!hasShown && !isOpen) {
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem('silahub_chat_shown', 'true');
      }
    }, 20000); // 20 seconds

    // Exit intent detection
    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !hasShown && !isOpen) {
        setIsOpen(true);
        setHasShown(true);
        localStorage.setItem('silahub_chat_shown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown, isOpen]);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (text = inputMessage.trim()) => {
    if (!text) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date(),
      type: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setShowQuickReplies(false);

    // Show typing indicator
    setIsTyping(true);

    // Simulate response delay
    setTimeout(() => {
      setIsTyping(false);

      // Get appropriate response
      const response = getSmartResponse(text);

      const botMessage = {
        id: Date.now() + 1,
        text: response,
        sender: 'bot',
        timestamp: new Date(),
        type: 'response',
        hasCallToAction: shouldShowCallToAction(text)
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1500 + Math.random() * 1000); // Variable delay for more natural feel
  };

  const getSmartResponse = (userInput) => {
    const input = userInput.toLowerCase();

    // Check for exact matches first
    for (const category of Object.values(cannedResponses)) {
      if (typeof category === 'object') {
        for (const [question, answer] of Object.entries(category)) {
          if (input.includes(question.toLowerCase().replace(/[?.!]/g, ''))) {
            return answer;
          }
        }
      }
    }

    // Check for keywords
    const keywordResponses = {
      seo: cannedResponses.pricing["How much does SEO cost?"],
      cost: cannedResponses.pricing["What are your payment terms?"],
      price: cannedResponses.pricing["What are your payment terms?"],
      money: cannedResponses.pricing["What are your payment terms?"],
      guarantee: cannedResponses.guarantee["What's your ROI guarantee?"],
      results: cannedResponses.results["How long for results?"],
      calgary: cannedResponses.location["Are you Calgary based?"],
      local: cannedResponses.location["Are you Calgary based?"],
      free: cannedResponses.consultation["Free consultation available?"],
      consultation: cannedResponses.consultation["Free consultation available?"],
      contact: cannedResponses.consultation["How do I get started?"],
      website: "We design professional websites starting at $967 setup + $99/month. Want me to connect you with our web design specialist?",
      google: "Google Ads start at $1,200/month. We typically see 3-5x ROI for Calgary contractors. Would you like a free account audit?",
      ads: "We manage Google Ads and Facebook Ads. Starting at $1,000/month with industry-leading results. Free audit available!",
      lead: "We generate qualified leads through SEO, Google Ads, and content marketing. Average 300% lead increase for our clients.",
      contractor: cannedResponses.services["Do you work with contractors?"],
      plumber: "We specialize in plumbing marketing! We help plumbers get more emergency calls and higher-paying jobs.",
      hvac: "HVAC businesses love our services! We help capture year-round leads and dominate local search.",
      electrician: "Electrical contractors see great results with our marketing. We focus on high-value panel upgrades and rewiring jobs.",
      roofing: "Roofing contractors thrive with our storm response and lead generation strategies. 280% average lead increase.",
      cleaning: "Cleaning businesses grow fast with our commercial targeting and premium positioning strategies.",
      hello: "Hi there! 👋 I'd love to help you grow your home service business. What specific questions do you have about digital marketing?",
      hi: "Hello! 😊 Thanks for reaching out. I'm here to help you dominate your local Calgary market. What can I help you with today?",
      help: "I'm here to help! I can answer questions about our services, pricing, results, or schedule a free consultation. What would you like to know?"
    };

    // Check for keywords in input
    for (const [keyword, response] of Object.entries(keywordResponses)) {
      if (input.includes(keyword)) {
        return response;
      }
    }

    // Random helpful responses
    const helpfulResponses = [
      "I'd love to learn more about your business! Can you tell me what type of home service you provide? (plumbing, HVAC, electrical, roofing, cleaning, etc.)",
      "That's a great question! For the most accurate answer, I'd recommend scheduling a free consultation where we can discuss your specific situation. Would you like me to arrange that?",
      "We're Calgary's leading digital marketing agency for home service businesses. We've helped over 500 contractors grow their businesses. What specific goal are you working towards?",
      "Thanks for your interest! We specialize in helping home service businesses get more leads and customers. Would you like to hear about our most popular service packages?",
      "Great to connect with you! We're seeing amazing results with Calgary businesses - typically 300% more leads within 6 months. What type of results are you looking for?"
    ];

    return helpfulResponses[Math.floor(Math.random() * helpfulResponses.length)];
  };

  const shouldShowCallToAction = (userInput) => {
    const input = userInput.toLowerCase();
    const ctaTriggers = ['cost', 'price', 'how much', 'pricing', 'quote', 'consultation', 'free', 'audit', 'results', 'guarantee', 'roi'];

    return ctaTriggers.some(trigger => input.includes(trigger));
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-white w-16 h-16 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isOpen ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }}
      >
        <SafeIcon icon={FiMessageCircle} className="w-8 h-8" />
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
          1
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiBot} className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-bold">Alex - Silahub Support</div>
                  <div className="text-xs opacity-90 flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    Online now
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <SafeIcon icon={FiX} className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-white text-gray-800 shadow-sm'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <div className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-primary-100' : 'text-gray-500'
                    }`}>
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {showQuickReplies && messages.length <= 1 && (
              <div className="p-4 border-t border-gray-200 bg-white">
                <p className="text-sm text-gray-600 mb-3 font-medium">Popular questions:</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickQuestions.slice(0, 6).map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(question.text)}
                      className="text-xs bg-gray-100 hover:bg-primary-100 text-gray-700 hover:text-primary-700 px-3 py-2 rounded-lg transition-colors"
                    >
                      {question.text}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Contact CTA */}
            {messages.some(msg => msg.hasCallToAction) && (
              <div className="p-4 border-t border-gray-200 bg-gradient-to-r from-green-50 to-blue-50">
                <div className="flex items-center space-x-3 mb-3">
                  <SafeIcon icon={FiStar} className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium text-gray-900">Ready to get started?</span>
                </div>
                <div className="flex space-x-2">
                  <a
                    href="tel:8252888332"
                    className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                  >
                    <SafeIcon icon={FiPhone} className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                  <a
                    href="mailto:hello@silahub.com"
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    <SafeIcon icon={FiMail} className="w-4 h-4" />
                    <span>Email Us</span>
                  </a>
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputMessage.trim()}
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <SafeIcon icon={FiSend} className="w-4 h-4" />
                </button>
              </div>
              <div className="text-xs text-gray-500 mt-2 text-center">
                We typically respond within 2 minutes during business hours
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveChatWidget;