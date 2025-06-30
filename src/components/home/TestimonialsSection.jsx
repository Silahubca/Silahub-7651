import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiStar, FiQuote } = FiIcons;

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Mike Johnson',
      company: 'Johnson Plumbing',
      location: 'Calgary, AB',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: "Silahub Technologies completely transformed our online presence. We went from 10 leads per month to over 100 qualified leads. Their team understands home service businesses like no other agency.",
      results: "10x increase in monthly leads"
    },
    {
      id: 2,
      name: 'Sarah Mitchell',
      company: 'Elite HVAC Services',
      location: 'Calgary, AB',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: "The ROI on our marketing spend has been incredible. Silahub's Google Ads management brought us consistent, high-quality leads year-round, not just during peak seasons.",
      results: "300% ROI improvement"
    },
    {
      id: 3,
      name: 'David Chen',
      company: 'ProClean Services',
      location: 'Calgary, AB',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: "Our website conversion rate improved dramatically after Silahub redesigned it. The new site not only looks professional but actually converts visitors into customers.",
      results: "250% conversion rate increase"
    },
    {
      id: 4,
      name: 'Jennifer Walsh',
      company: 'Walsh Electrical',
      location: 'Calgary, AB',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      rating: 5,
      text: "The team at Silahub is responsive, knowledgeable, and delivers results. Our local SEO rankings have never been better, and we're getting calls from customers who found us online.",
      results: "#1 local SEO rankings"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what home service business owners across Calgary 
            are saying about their experience with Silahub Technologies.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 relative hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary-100">
                <SafeIcon icon={FiQuote} className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Results Badge */}
              <div className="bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6 inline-block">
                {testimonial.results}
              </div>

              {/* Client Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.company}</div>
                  <div className="text-gray-500 text-xs">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-gray-600 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">4.9/5</div>
                <div className="text-gray-600 text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
                <div className="text-gray-600 text-sm">Client Retention</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-gray-600 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;