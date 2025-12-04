import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiTrendingUp,FiUsers,FiDollarSign,FiCalendar,FiMapPin}=FiIcons;

const CaseStudies=()=> {
  // Set page title and meta description
  React.useEffect(()=> {
    document.title='Case Studies - Home Service Marketing Success Stories | Silahub Technologies';
    const metaDescription=document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content','See real results from Calgary home service businesses. Case studies showing dramatic increases in leads,revenue,and online visibility through our proven digital marketing strategies.');
    }
  },[]);

  const caseStudies=[
    {
      id: 1,
      title: 'Calgary Plumbing Co.',
      industry: 'Plumbing Services',
      location: 'Calgary,AB',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=400&fit=crop',
      duration: '6 months',
      challenge: 'Calgary Plumbing Co. was struggling with low online visibility and inconsistent lead generation. They were getting only 10-15 leads per month and losing business to competitors who ranked higher in search results.',
      solution: 'We implemented a comprehensive digital marketing strategy including local SEO optimization,Google Ads campaigns,and website redesign with conversion optimization.',
      results: [
        {metric: 'Monthly Leads',before: '10-15',after: '100+',improvement: '400%',icon: FiUsers},
        {metric: 'Monthly Revenue',before: '$25K',after: '$75K',improvement: '+$50K',icon: FiDollarSign},
        {metric: 'Website Traffic',before: '500',after: '2000',improvement: '300%',icon: FiTrendingUp},
        {metric: 'Google Ranking',before: 'Page 3',after: '#1',improvement: 'Top 3',icon: FiTrendingUp}
      ],
      testimonial: {
        text: "Silahub completely transformed our online presence. We went from 10 leads per month to over 100 qualified leads. The results speak for themselves.",
        author: "Mike Johnson",
        position: "Owner,Calgary Plumbing Co."
      },
      services: ['Local SEO','Google Ads','Website Redesign','Reputation Management']
    },
    {
      id: 2,
      title: 'Elite HVAC Services',
      industry: 'HVAC & Heating',
      location: 'Calgary,AB',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=400&fit=crop',
      duration: '8 months',
      challenge: 'Elite HVAC was experiencing seasonal business fluctuations with poor conversion rates during off-peak months. Their cost per lead was too high,making it difficult to maintain profitability.',
      solution: 'We developed a year-round marketing strategy with seasonal campaign adjustments,landing page optimization,and targeted Facebook advertising to maintain consistent lead flow.',
      results: [
        {metric: 'Conversion Rate',before: '2.5%',after: '8.8%',improvement: '+250%',icon: FiTrendingUp},
        {metric: 'Cost Per Lead',before: '$150',after: '$60',improvement: '-60%',icon: FiDollarSign},
        {metric: 'Market Share',before: '15%',after: '50%',improvement: '+35%',icon: FiUsers},
        {metric: 'Year-Round Revenue',before: 'Seasonal',after: 'Consistent',improvement: 'Stable',icon: FiCalendar}
      ],
      testimonial: {
        text: "Working with Silahub was a game-changer. We now get consistent,high-quality leads year-round instead of just during peak seasons. Our business is more stable and profitable than ever.",
        author: "Sarah Mitchell",
        position: "General Manager,Elite HVAC Services"
      },
      services: ['Google Ads','Facebook Ads','Conversion Optimization','Seasonal Campaigns']
    },
    {
      id: 3,
      title: 'ProClean Services',
      industry: 'Cleaning Services',
      location: 'Calgary,AB',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop',
      duration: '4 months',
      challenge: 'ProClean was facing intense competition in the Calgary cleaning market with low brand recognition. They needed to differentiate themselves and build a strong local presence.',
      solution: 'We focused on brand development,social media marketing,and reputation management to establish ProClean as the premium cleaning service in Calgary.',
      results: [
        {metric: 'Brand Awareness',before: '5%',after: '45%',improvement: '+180%',icon: FiTrendingUp},
        {metric: 'Social Engagement',before: '50/month',after: '300/month',improvement: '+500%',icon: FiUsers},
        {metric: 'Monthly Bookings',before: '25',after: '105',improvement: '+320%',icon: FiCalendar},
        {metric: 'Customer Retention',before: '60%',after: '85%',improvement: '+25%',icon: FiUsers}
      ],
      testimonial: {
        text: "Our brand is now recognized throughout Calgary. Customer loyalty has never been higher,and we're getting referrals from customers who found us through social media. Silahub helped us stand out in a crowded market.",
        author: "David Chen",
        position: "Founder,ProClean Services"
      },
      services: ['Brand Development','Social Media Management','Reputation Management','Content Marketing']
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 initial={{opacity: 0,y: 20}} animate={{opacity: 1,y: 0}} className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" >
            Real Results from Real Businesses
          </motion.h1>
          <motion.p initial={{opacity: 0,y: 20}} animate={{opacity: 1,y: 0}} transition={{delay: 0.1}} className="text-xl text-gray-600 max-w-3xl mx-auto" >
            See how we've helped home service businesses across Calgary achieve remarkable growth through strategic digital marketing. These are real results from real clients.
          </motion.p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {caseStudies.map((study,index)=> (
              <motion.div key={study.id} initial={{opacity: 0,y: 30}} whileInView={{opacity: 1,y: 0}} viewport={{once: true}} transition={{delay: index * 0.1}} className="bg-white rounded-2xl shadow-xl overflow-hidden" >
                {/* Header */}
                <div className="relative">
                  <img src={study.image} alt={study.title} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="bg-primary-600 px-3 py-1 rounded-full text-sm font-medium"> {study.industry} </span>
                      <div className="flex items-center space-x-1">
                        <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                        <span className="text-sm">{study.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                        <span className="text-sm">{study.duration}</span>
                      </div>
                    </div>
                    <h2 className="text-3xl font-bold">{study.title}</h2>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  {/* Challenge & Solution */}
                  <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">The Challenge</h3>
                      <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Our Solution</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{study.solution}</p>
                      <div className="flex flex-wrap gap-2">
                        {study.services.map((service,serviceIndex)=> (
                          <span key={serviceIndex} className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium" >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Results */}
                  <div className="mb-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Results Achieved</h3>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                      {study.results.map((result,resultIndex)=> (
                        <div key={resultIndex} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow" >
                          <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                            <SafeIcon icon={result.icon} className="w-6 h-6 text-primary-600" />
                          </div>
                          <div className="text-2xl font-bold text-primary-600 mb-2"> {result.improvement} </div>
                          <div className="text-sm font-medium text-gray-900 mb-1"> {result.metric} </div>
                          <div className="text-xs text-gray-500"> {result.before} → {result.after} </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Testimonial */}
                  <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8">
                    <blockquote className="text-lg text-gray-700 mb-6 italic leading-relaxed"> "{study.testimonial.text}" </blockquote>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                        {study.testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900"> {study.testimonial.author} </div>
                        <div className="text-gray-600 text-sm"> {study.testimonial.position} </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{opacity: 0,y: 20}} whileInView={{opacity: 1,y: 0}} viewport={{once: true}} >
            <h2 className="text-3xl font-bold text-white mb-6"> Ready to Be Our Next Success Story? </h2>
            <p className="text-xl text-primary-100 mb-8"> Get your free marketing audit and discover how we can help you achieve similar results. </p>
            <a href="/contact-us" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center space-x-2" >
              <SafeIcon icon={FiTrendingUp} className="w-5 h-5" />
              <span>Get Your Free Audit</span>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default CaseStudies;