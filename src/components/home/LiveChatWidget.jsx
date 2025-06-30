import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiMessageCircle, FiX, FiSend, FiUser, FiBot } = FiIcons;

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm here to help you grow your Calgary business. What digital marketing questions do you have?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickQuestions = [
    "How much does SEO cost?",
    "Can you help with Google Ads?",
    "Do you work with contractors?",
    "What's included in your packages?"
  ];

  const handleSendMessage = (text = inputMessage) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: getBotResponse(text),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const getBotResponse = (userText) => {
    const text = userText.toLowerCase();
    
    if (text.includes('seo') || text.includes('search')) {
      return "Our SEO services start at $1,500/month and include local optimization, keyword research, and monthly reporting. Would you like me to connect you with our SEO specialist?";
    } else if (text.includes('google ads') || text.includes('ppc')) {
      return "Google Ads management starts at $1,200/month plus your ad spend. We typically see 3-5x ROI for Calgary contractors. Shall I schedule a free audit?";
    } else if (text.includes('cost') || text.includes('price')) {
      return "Our packages start at $500/month for reputation management up to $3,997/month for our complete solution. Would you like a custom quote for your business?";
    } else if (text.includes('contractor') || text.includes('home service')) {
      return "Absolutely! We specialize exclusively in home service businesses - plumbers, HVAC, electrical, roofing, and more. We've helped 500+ Calgary contractors grow their business.";
    } else {
      return "I'd love to help you with that! For detailed answers, let me connect you with one of our Calgary marketing experts. Click 'Get Free Consultation' to schedule a call.";
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-silahub-primary text-white w-16 h-16 rounded-full shadow-2xl hover:bg-primary-700 transition-colors z-50 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isOpen ? { scale: 0 } : { scale: 1 }}
      >
        <SafeIcon icon={FiMessageCircle} className="w-8 h-8" />
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
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
            className="fixed bottom-6 right-6 w-96 h-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-silahub-primary to-primary-800 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiUser} className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-semibold">Silahub Support</div>
                  <div className="text-xs opacity-75">Usually responds in minutes</div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white"
              >
                <SafeIcon icon={FiX} className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-silahub-primary text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Questions */}
            <div className="p-4 border-t">
              <div className="grid grid-cols-2 gap-2 mb-4">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(question)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
                />
                <button
                  onClick={() => handleSendMessage()}
                  className="bg-silahub-primary text-white px-3 py-2 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <SafeIcon icon={FiSend} className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LiveChatWidget;