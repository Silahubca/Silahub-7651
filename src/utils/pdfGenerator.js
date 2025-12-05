import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export class BlueprintPDFGenerator {
  constructor(blueprintType, userData, roasResults) {
    this.blueprintType = blueprintType;
    this.userData = userData;
    this.roasResults = roasResults;
    this.doc = new jsPDF();
    this.pageWidth = this.doc.internal.pageSize.getWidth();
    this.pageHeight = this.doc.internal.pageSize.getHeight();
    this.margin = 20;
    this.currentY = this.margin;
    this.lineHeight = 7;
  }

  // Generate the complete PDF
  async generatePDF() {
    this.setupDocument();
    this.addTitlePage();
    this.addExecutiveSummary();
    this.addPersonalizedResults();
    this.addGrowthStrategies();
    this.addImplementationGuide();
    this.addSuccessStories();
    this.addCallToAction();
    this.addFooter();

    return this.doc;
  }

  setupDocument() {
    // Set font
    this.doc.setFont('helvetica', 'normal');
  }

  addTitlePage() {
    this.doc.addPage();
    this.currentY = this.margin;

    // Add Silahub logo placeholder
    this.doc.setFontSize(24);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('SILAHUB TECHNOLOGIES', this.pageWidth / 2, this.currentY, { align: 'center' });
    this.currentY += 20;

    // Main title
    this.doc.setFontSize(28);
    this.doc.setFont('helvetica', 'bold');
    const title = this.getBlueprintTitle();
    this.doc.text(title, this.pageWidth / 2, this.currentY, { align: 'center' });
    this.currentY += 20;

    // Subtitle
    this.doc.setFontSize(16);
    this.doc.setFont('helvetica', 'normal');
    this.doc.text('Your Complete Growth Strategy Guide', this.pageWidth / 2, this.currentY, { align: 'center' });
    this.currentY += 30;

    // Date
    this.doc.setFontSize(12);
    this.doc.text(`Generated on: ${new Date().toLocaleDateString()}`, this.pageWidth / 2, this.currentY, { align: 'center' });
    this.currentY += 20;

    // For user
    if (this.userData.name) {
      this.doc.text(`Prepared for: ${this.userData.name}`, this.pageWidth / 2, this.currentY, { align: 'center' });
      this.currentY += 20;
    }

    // Disclaimer
    this.doc.setFontSize(10);
    this.doc.setFont('helvetica', 'italic');
    this.doc.text('Confidential: This document contains proprietary strategies and should not be shared without permission.', this.margin, this.pageHeight - 30);
  }

  addExecutiveSummary() {
    this.doc.addPage();
    this.currentY = this.margin;

    this.doc.setFontSize(20);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('EXECUTIVE SUMMARY', this.margin, this.currentY);
    this.currentY += 15;

    this.doc.setFontSize(12);
    this.doc.setFont('helvetica', 'normal');
    const summary = this.getExecutiveSummary();
    const lines = this.doc.splitTextToSize(summary, this.pageWidth - 2 * this.margin);
    this.doc.text(lines, this.margin, this.currentY);
  }

  addPersonalizedResults() {
    this.doc.addPage();
    this.currentY = this.margin;

    this.doc.setFontSize(20);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('YOUR PERSONALIZED RESULTS', this.margin, this.currentY);
    this.currentY += 15;

    this.doc.setFontSize(14);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('ROI Analysis Based on Your Business Data', this.margin, this.currentY);
    this.currentY += 10;

    // Current situation
    this.doc.setFontSize(12);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('Current Situation:', this.margin, this.currentY);
    this.currentY += 8;
    this.doc.setFont('helvetica', 'normal');
    this.doc.text(`Monthly Revenue: $${this.userData.monthlyRevenue || 0}`, this.margin + 10, this.currentY);
    this.currentY += 6;
    this.doc.text(`Monthly Leads: ${this.userData.currentLeads || 0}`, this.margin + 10, this.currentY);
    this.currentY += 6;
    this.doc.text(`Average Job Value: $${this.userData.avgJobValue || 0}`, this.margin + 10, this.currentY);
    this.currentY += 15;

    // Projected results
    this.doc.setFontSize(12);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('Projected Results (6 Months):', this.margin, this.currentY);
    this.currentY += 8;
    this.doc.setFont('helvetica', 'normal');
    this.doc.text(`Monthly Leads: ${Math.round(this.roasResults.projectedLeads)} (${Math.round(this.roasResults.projectedLeads - (this.userData.currentLeads || 0))} increase)`, this.margin + 10, this.currentY);
    this.currentY += 6;
    this.doc.text(`Monthly Revenue: $${Math.round(this.roasResults.projectedRevenue).toLocaleString()}`, this.margin + 10, this.currentY);
    this.currentY += 6;
    this.doc.text(`Marketing ROI: ${this.roasResults.roas.toFixed(1)}x`, this.margin + 10, this.currentY);
    this.currentY += 6;
    this.doc.text(`Annual Growth: $${Math.round(this.roasResults.annualGrowth).toLocaleString()}`, this.margin + 10, this.currentY);
  }

  addGrowthStrategies() {
    this.doc.addPage();
    this.currentY = this.margin;

    this.doc.setFontSize(20);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('PROVEN GROWTH STRATEGIES', this.margin, this.currentY);
    this.currentY += 15;

    const strategies = this.getGrowthStrategies();
    strategies.forEach((strategy, index) => {
      if (this.currentY > this.pageHeight - 50) {
        this.doc.addPage();
        this.currentY = this.margin;
      }

      this.doc.setFontSize(14);
      this.doc.setFont('helvetica', 'bold');
      this.doc.text(`${index + 1}. ${strategy.title}`, this.margin, this.currentY);
      this.currentY += 10;

      this.doc.setFontSize(12);
      this.doc.setFont('helvetica', 'normal');
      const lines = this.doc.splitTextToSize(strategy.description, this.pageWidth - 2 * this.margin);
      this.doc.text(lines, this.margin, this.currentY);
      this.currentY += lines.length * this.lineHeight + 10;

      if (strategy.steps) {
        this.doc.setFontSize(11);
        this.doc.setFont('helvetica', 'italic');
        strategy.steps.forEach((step, stepIndex) => {
          if (this.currentY > this.pageHeight - 30) {
            this.doc.addPage();
            this.currentY = this.margin;
          }
          this.doc.text(`• ${step}`, this.margin + 10, this.currentY);
          this.currentY += 6;
        });
        this.currentY += 5;
      }
    });
  }

  addImplementationGuide() {
    this.doc.addPage();
    this.currentY = this.margin;

    this.doc.setFontSize(20);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('IMPLEMENTATION GUIDE', this.margin, this.currentY);
    this.currentY += 15;

    this.doc.setFontSize(14);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('Month-by-Month Action Plan', this.margin, this.currentY);
    this.currentY += 10;

    const implementation = this.getImplementationGuide();
    implementation.forEach((month, index) => {
      if (this.currentY > this.pageHeight - 50) {
        this.doc.addPage();
        this.currentY = this.margin;
      }

      this.doc.setFontSize(13);
      this.doc.setFont('helvetica', 'bold');
      this.doc.text(`Month ${month.month}: ${month.focus}`, this.margin, this.currentY);
      this.currentY += 8;

      this.doc.setFontSize(11);
      this.doc.setFont('helvetica', 'normal');
      month.tasks.forEach(task => {
        if (this.currentY > this.pageHeight - 30) {
          this.doc.addPage();
          this.currentY = this.margin;
        }
        this.doc.text(`• ${task}`, this.margin + 10, this.currentY);
        this.currentY += 6;
      });
      this.currentY += 8;
    });
  }

  addSuccessStories() {
    this.doc.addPage();
    this.currentY = this.margin;

    this.doc.setFontSize(20);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('SUCCESS STORIES', this.margin, this.currentY);
    this.currentY += 15;

    this.doc.setFontSize(14);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('Real Results from Similar Businesses', this.margin, this.currentY);
    this.currentY += 10;

    const stories = this.getSuccessStories();
    stories.forEach((story, index) => {
      if (this.currentY > this.pageHeight - 50) {
        this.doc.addPage();
        this.currentY = this.margin;
      }

      this.doc.setFontSize(12);
      this.doc.setFont('helvetica', 'bold');
      this.doc.text(story.business, this.margin, this.currentY);
      this.currentY += 8;

      this.doc.setFontSize(11);
      this.doc.setFont('helvetica', 'normal');
      this.doc.text(`"${story.quote}"`, this.margin + 10, this.currentY);
      this.currentY += 8;

      this.doc.text(`Result: ${story.result}`, this.margin + 10, this.currentY);
      this.currentY += 8;

      this.doc.text(`Timeframe: ${story.timeframe}`, this.margin + 10, this.currentY);
      this.currentY += 12;
    });
  }

  addCallToAction() {
    this.doc.addPage();
    this.currentY = this.margin;

    this.doc.setFontSize(20);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('NEXT STEPS', this.margin, this.currentY);
    this.currentY += 20;

    this.doc.setFontSize(14);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('Ready to Implement This Blueprint?', this.margin, this.currentY);
    this.currentY += 15;

    this.doc.setFontSize(12);
    this.doc.setFont('helvetica', 'normal');
    const ctaText = `Congratulations on taking the first step toward transforming your ${this.blueprintType} business! This blueprint contains everything you need to achieve the results we've outlined.

To get started:
1. Schedule your free consultation with our team
2. Review your current marketing efforts
3. Begin implementing the strategies outlined in Month 1
4. Track your progress and adjust as needed

Contact Information:
Email: hello@silahub.com
Phone: 825-288-8332
Website: https://silahub.com

We look forward to helping you achieve these results!`;

    const lines = this.doc.splitTextToSize(ctaText, this.pageWidth - 2 * this.margin);
    this.doc.text(lines, this.margin, this.currentY);
    this.currentY += lines.length * this.lineHeight + 10;

    // Add signature
    this.doc.setFontSize(12);
    this.doc.setFont('helvetica', 'bold');
    this.doc.text('Best regards,', this.margin, this.currentY);
    this.currentY += 10;
    this.doc.text('Silahub Technologies Team', this.margin, this.currentY);
  }

  addFooter() {
    const totalPages = this.doc.internal.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      this.doc.setPage(i);
      this.doc.setFontSize(8);
      this.doc.setFont('helvetica', 'normal');
      this.doc.text(`Page ${i} of ${totalPages}`, this.pageWidth - 30, this.pageHeight - 10);
      this.doc.text('Silahub Technologies - Confidential', this.margin, this.pageHeight - 10);
    }
  }

  getBlueprintTitle() {
    const titles = {
      'cleaning-service': 'Cleaning Service Growth Blueprint',
      'landscaping': 'Landscaping Growth Blueprint',
      'hvac': 'HVAC Marketing Blueprint',
      'plumbing': 'Plumbing Marketing Blueprint',
      'electrical': 'Electrical Marketing Blueprint',
      'roofing': 'Roofing Growth Blueprint',
      'home-service': 'Home Service Growth Blueprint'
    };
    return titles[this.blueprintType] || 'Growth Blueprint';
  }

  getExecutiveSummary() {
    const summaries = {
      'cleaning-service': `This comprehensive blueprint reveals the exact strategies that have helped 250+ cleaning service businesses stop competing on price and start attracting high-paying commercial clients. You'll learn how to position your services as premium offerings, implement automated referral systems, and generate consistent leads year-round.`,
      'landscaping': `Discover how to transform your seasonal landscaping business into a year-round revenue generator. This blueprint includes proven strategies for targeting commercial properties, expanding into snow removal and maintenance services, and building premium positioning that commands higher prices.`,
      'hvac': `Learn the precise marketing strategies that help HVAC companies capture more emergency calls and generate year-round revenue. From SEO optimization for emergency keywords to seasonal campaign management, this blueprint provides everything you need to dominate your local HVAC market.`,
      'plumbing': `This blueprint reveals the strategies that help plumbing businesses stop chasing low-value jobs and start attracting high-paying emergency repairs and replacements. Learn how to optimize for emergency keywords and position your services as premium offerings.`,
      'electrical': `Discover how electrical contractors can land high-value panel upgrades and commercial projects instead of low-paying outlet repairs. This blueprint includes strategies for safety positioning, commercial targeting, and premium service offerings.`,
      'roofing': `Stop relying on storm chasers and learn how to generate your own exclusive leads. This blueprint reveals strategies for storm response marketing, commercial building targeting, and building trust with insurance companies.`,
      'home-service': `This comprehensive guide covers the marketing strategies that work for all types of home service businesses. From lead generation to customer retention, you'll learn the complete system for growing your business online.`
    };
    return summaries[this.blueprintType] || 'This blueprint provides proven strategies for growing your business.';
  }

  getGrowthStrategies() {
    const strategies = {
      'cleaning-service': [
        {
          title: 'Commercial Client Targeting',
          description: 'Shift your focus from residential cleaning to high-value commercial contracts. Office buildings, retail spaces, and medical facilities offer consistent revenue and higher profit margins.',
          steps: [
            'Research commercial properties in your area',
            'Create commercial service packages',
            'Develop relationships with property managers',
            'Offer maintenance contracts for steady income'
          ]
        },
        {
          title: 'Premium Service Positioning',
          description: 'Position your cleaning services as premium offerings that business owners can trust with their most important assets.',
          steps: [
            'Highlight eco-friendly cleaning methods',
            'Invest in professional branding',
            'Offer guaranteed service levels',
            'Provide detailed cleaning reports'
          ]
        },
        {
          title: 'Lead Generation Systems',
          description: 'Implement automated systems to generate consistent leads from multiple sources.',
          steps: [
            'Optimize website for local SEO',
            'Set up Google My Business profile',
            'Create lead magnets and email sequences',
            'Develop referral partner program'
          ]
        }
      ],
      'landscaping': [
        {
          title: 'Commercial Property Focus',
          description: 'Target office complexes, retail centers, and HOA communities for high-value, recurring projects.',
          steps: [
            'Build commercial portfolio',
            'Develop landscape maintenance contracts',
            'Create commercial service packages',
            'Network with property managers'
          ]
        },
        {
          title: 'Year-Round Service Expansion',
          description: 'Add snow removal, indoor plant maintenance, and seasonal services to generate year-round revenue.',
          steps: [
            'Obtain snow removal certifications',
            'Offer indoor plant care services',
            'Provide seasonal cleanup packages',
            'Create maintenance subscription plans'
          ]
        },
        {
          title: 'Premium Design Services',
          description: 'Position your business as a landscape design expert that creates beautiful, functional outdoor spaces.',
          steps: [
            'Develop design portfolio',
            'Create 3D renderings for clients',
            'Offer consultation services',
            'Partner with architects and builders'
          ]
        }
      ],
      // Add similar detailed strategies for other niches
      'hvac': [
        {
          title: 'Emergency Call Optimization',
          description: 'Optimize your online presence to capture more emergency HVAC calls when customers need help most.',
          steps: [
            'Rank for emergency HVAC keywords',
            'Set up 24/7 call tracking',
            'Create emergency response protocols',
            'Partner with property managers'
          ]
        },
        {
          title: 'Seasonal Campaign Management',
          description: 'Run targeted campaigns during peak seasons while maintaining visibility year-round.',
          steps: [
            'Plan seasonal marketing calendars',
            'Adjust campaigns for demand fluctuations',
            'Focus on preventive maintenance',
            'Build email lists for nurturing'
          ]
        }
      ],
      'plumbing': [
        {
          title: 'Emergency Response Focus',
          description: 'Position your business as the go-to plumber for emergency situations when speed and reliability matter most.',
          steps: [
            'Optimize for emergency keywords',
            'Set up 24/7 emergency response',
            'Develop emergency service packages',
            'Build relationships with property managers'
          ]
        },
        {
          title: 'High-Value Service Offerings',
          description: 'Expand beyond basic repairs to offer comprehensive plumbing solutions.',
          steps: [
            'Add water heater replacement services',
            'Offer drain cleaning and camera inspection',
            'Provide whole-home plumbing audits',
            'Create maintenance service agreements'
          ]
        }
      ],
      'electrical': [
        {
          title: 'Panel Upgrade Specialization',
          description: 'Focus on high-value electrical panel upgrades and rewiring projects instead of small repairs.',
          steps: [
            'Obtain electrical inspection certifications',
            'Create panel upgrade packages',
            'Partner with home inspectors',
            'Offer electrical safety audits'
          ]
        },
        {
          title: 'Commercial Electrical Focus',
          description: 'Target commercial properties for electrical installations, upgrades, and maintenance contracts.',
          steps: [
            'Build commercial electrical portfolio',
            'Obtain commercial electrical licenses',
            'Network with commercial property managers',
            'Develop maintenance service agreements'
          ]
        }
      ],
      'roofing': [
        {
          title: 'Exclusive Lead Generation',
          description: 'Build your own lead generation systems instead of relying on shared leads from aggregators.',
          steps: [
            'Optimize for roofing-related keywords',
            'Create storm damage landing pages',
            'Develop insurance claim assistance process',
            'Build relationships with adjusters'
          ]
        },
        {
          title: 'Commercial Roofing Focus',
          description: 'Target commercial buildings for large-scale roofing projects and maintenance contracts.',
          steps: [
            'Develop commercial roofing expertise',
            'Create commercial service packages',
            'Network with commercial property owners',
            'Obtain commercial roofing certifications'
          ]
        }
      ],
      'home-service': [
        {
          title: 'Local SEO Domination',
          description: 'Establish your business as the local expert for your home service specialty.',
          steps: [
            'Optimize Google My Business profile',
            'Build local citation portfolio',
            'Create location-specific content',
            'Focus on local keywords'
          ]
        },
        {
          title: 'Customer Retention Systems',
          description: 'Turn one-time customers into lifelong clients with maintenance and retention programs.',
          steps: [
            'Create maintenance service agreements',
            'Implement customer loyalty programs',
            'Send regular maintenance reminders',
            'Offer priority scheduling for returning customers'
          ]
        }
      ]
    };
    return strategies[this.blueprintType] || [];
  }

  getImplementationGuide() {
    return [
      {
        month: 1,
        focus: 'Foundation Setup',
        tasks: [
          'Optimize Google My Business profile',
          'Set up basic website analytics',
          'Create initial content calendar',
          'Research local competitors',
          'Set up lead tracking systems'
        ]
      },
      {
        month: 2,
        focus: 'Content and SEO',
        tasks: [
          'Publish 4-6 pieces of local content',
          'Optimize website for target keywords',
          'Build initial local citation profile',
          'Set up social media profiles',
          'Create lead magnets'
        ]
      },
      {
        month: 3,
        focus: 'Lead Generation',
        tasks: [
          'Launch initial marketing campaigns',
          'Set up review generation systems',
          'Implement lead nurturing sequences',
          'Start local networking efforts',
          'Monitor and analyze early results'
        ]
      },
      {
        month: 4,
        focus: 'Optimization and Scale',
        tasks: [
          'Optimize campaigns based on data',
          'Expand content marketing efforts',
          'Implement advanced targeting strategies',
          'Scale successful marketing channels',
          'Plan for next growth phase'
        ]
      }
    ];
  }

  getSuccessStories() {
    const stories = {
      'cleaning-service': [
        {
          business: 'Sparkle Clean Pro',
          quote: 'We went from residential only to 70% commercial clients. Our revenue tripled in 8 months.',
          result: '300% revenue increase',
          timeframe: '8 months'
        },
        {
          business: 'Elite Cleaning Services',
          quote: 'Commercial contracts provide the stability we needed. No more feast or famine cycles.',
          result: '400% lead increase',
          timeframe: '6 months'
        }
      ],
      'landscaping': [
        {
          business: 'Green Thumb Landscaping',
          quote: 'Adding snow removal was a game-changer. We now have year-round revenue streams.',
          result: '220% lead increase',
          timeframe: '10 months'
        },
        {
          business: 'Premier Grounds',
          quote: 'Commercial properties are our bread and butter now. Much more stable than residential.',
          result: '$280K additional annual revenue',
          timeframe: '12 months'
        }
      ],
      // Add similar stories for other niches
      'hvac': [
        {
          business: 'Arctic Comfort HVAC',
          quote: 'Emergency calls increased 300% after optimizing for HVAC keywords.',
          result: '300% emergency call increase',
          timeframe: '6 months'
        }
      ],
      'plumbing': [
        {
          business: 'Johnson Plumbing Co.',
          quote: 'We went from $200 jobs to $800+ emergency repairs consistently.',
          result: '300% average job value increase',
          timeframe: '8 months'
        }
      ],
      'electrical': [
        {
          business: 'Spark Electrical Solutions',
          quote: 'Panel upgrades now make up 60% of our business. Much higher margins.',
          result: '400% revenue increase',
          timeframe: '9 months'
        }
      ],
      'roofing': [
        {
          business: 'Apex Roofing Systems',
          quote: 'We stopped relying on door knockers. Leads come to us 24/7 now.',
          result: '350% lead increase',
          timeframe: '7 months'
        }
      ],
      'home-service': [
        {
          business: 'Reliable Home Pros',
          quote: 'Local SEO transformed our business. We\'re now the go-to experts in our area.',
          result: '250% lead increase',
          timeframe: '6 months'
        }
      ]
    };
    return stories[this.blueprintType] || [];
  }

  // Download method
  downloadPDF(filename) {
    this.doc.save(filename);
  }
}

// Helper function to generate and download PDF
export const generateBlueprintPDF = async (blueprintType, userData, roasResults, filename) => {
  const generator = new BlueprintPDFGenerator(blueprintType, userData, roasResults);
  const pdf = await generator.generatePDF();
  generator.downloadPDF(filename);
};