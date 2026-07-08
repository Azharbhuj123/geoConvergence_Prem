const fallbackImage = {
  _type: 'image',
  asset: {_ref: 'image-c955cfd6715d317da550e3d38bf9c631911364a5-1440x872-png'},
}

export const facilitEasePageData = {
  navbar: {
    ctaText: 'Request My Facility',
    ctaLink: '/contact',
  },
  hero: {
    title: 'Simple indoor mapping for safer, smarter spaces',
    subtitle:
      'FacilitEase helps people know where to go, how to stay safe, and how to make the most of their space - without a huge tech lift or budget.',
    primaryBtnText: 'See How It Works',
    primaryBtnLink: '#getting-started',
    secondBtnText: 'Get a Demo',
    secondBtnLink: '#faq',
    backgroundImage: fallbackImage,
  },
  whyFacilitEase: {
    sectionTitle: 'Why FacilitEase?',
    subtitle: 'Our platform is designed for real-world safety, clarity, and ease of use.',
    cards: [
      {
        title: 'Fast & Easy Setup',
        description:
          'Get your building mapped and ready to use in weeks, not months. No complicated rollout or downtime.',
      },
      {
        title: 'No Expertise Needed',
        description:
          'Anyone can use FacilitEase - no GIS or IT background required. Simple, intuitive tools for every team.',
      },
      {
        title: 'Safer Spaces for Everyone',
        description:
          'Make emergency drills and daily navigation easier and safer for students, staff, patients, and visitors.',
      },
      {
        title: 'Affordable for Any Budget',
        description:
          "Smart indoor mapping shouldn't be a luxury. Our pricing works for schools, clinics, small businesses and beyond.",
      },
      {
        title: 'Ongoing Support',
        description:
          "We're here to help you every step of the way, from setup to daily use. Real people, real answers, whenever you need them.",
      },
      {
        title: 'Flexible for Your Needs',
        description:
          'Built to fit schools, healthcare, small businesses and beyond - adaptable for any building or team size as you grow.',
      },
    ],
  },
  startYourJourney: {
    title: 'Start Your Journey Today and Discover Effortless, Smarter Indoor Mapping Solutions',
    description:
      'FacilitEase helps your team launch indoor mapping quickly with practical support, simple tools, and a path that scales as your facility needs grow.',
    buttonText: 'Schedule a Call',
    buttonLink: '/contact',
    image: fallbackImage,
  },
  whatsIncluded: {
    sectionTitle: "What's Included?",
    subTitle: 'Map, analyze, and optimize your indoor spaces with precision',
    cards: [
      {title: 'Indoor Viewer', description: 'See your building at a glance', image: fallbackImage},
      {title: 'Space Planner', description: 'Make the most of every square foot', image: fallbackImage},
      {
        title: 'Floor Plan Editor',
        description: 'Edit and create indoor floor plans with ease',
        image: fallbackImage,
      },
      {title: 'Reserv Assist', description: 'Book rooms and resources in seconds', image: fallbackImage},
      {title: 'Scenario Planner', description: 'Be ready for anything', image: fallbackImage},
      {
        title: 'Indoors Mobile',
        description: 'Navigate your building with the mobile app',
        image: fallbackImage,
      },
    ],
  },
  facilitEaseInAction: {
    title: 'FacilitEase in action',
    description:
      'Step-by-step walkthrough of signing up, onboarding and using FacilitEase - No technical expertise required',
    image: fallbackImage,
  },
  solutionsForEverySpace: {
    sectionTitle: 'Solutions for Every Space',
    subTitle:
      'FacilitEase is built for organizations that need safer, smarter, and simpler ways to manage their spaces - without a big tech lift or budget.',
    cards: [
      {
        title: 'K-12 Schools',
        description: 'Safer, easier navigation for students and staff',
        image: fallbackImage,
      },
      {
        title: 'Healthcare',
        description: 'Better patient experience and emergency readiness',
        image: fallbackImage,
      },
      {
        title: 'Small Enterprises',
        description: 'Streamlined onboarding and space management',
        image: fallbackImage,
      },
      {
        title: 'Community & Public Spaces',
        description: 'Flexible for any public-facing building',
        image: fallbackImage,
      },
    ],
  },
  gettingStarted: {
    sectionTitle: 'Getting started is easy',
    subTitle: 'FacilitEase makes it easy to handle all your indoor mapping tasks',
    steps: [
      {
        title: 'Upload Your Floor Plans',
        description:
          'Upload your existing building floor plans securely through our portal. No special formatting needed.',
      },
      {
        title: 'Map Configuration',
        description:
          'Our team digitizes your plans and customizes interactive maps, labeling rooms, exits, and key areas.',
      },
      {
        title: 'Review and Approve',
        description:
          'Preview your digital maps and request any changes to ensure accuracy and usability.',
      },
      {
        title: 'Deployment',
        description:
          'Once approved, your maps are published and accessible via web, mobile, or integrated with your existing systems.',
      },
      {
        title: 'Ongoing Updates',
        description:
          'Easily update your maps as your facility changes. Our support team is available to assist.',
      },
    ],
  },
  plansAndPricing: {
    sectionTitle: 'Plans & Pricing',
    subTitle: 'Find the right plan for your organisation',
    plans: [
      {
        planName: 'Small Governments & K-12 Education',
        description: 'For schools, small enterprises and public facilities',
        price: '$10k',
        priceSuffix: '/Per Year',
        features: [
          'ArcGIS Indoors License',
          'Interactive & space planning',
          'Quick team onboarding',
          'Secure data management',
          'Ongoing support & updates',
        ],
        ctaText: 'Contact Us',
        ctaLink: '/contact',
      },
      {
        planName: 'Esri Customers with ArcGIS License',
        description: 'For organizations already using Esri',
        price: '$7.5k',
        priceSuffix: '/Per Year',
        features: [
          'ArcGIS Indoors integration',
          'Custom map configuration',
          'Team & data management',
          'Ongoing support & updates',
        ],
        ctaText: 'Contact Us',
        ctaLink: '/contact',
      },
      {
        planName: 'Custom Plans',
        description: 'For healthcare networks, large campuses, or complex needs',
        price: 'Contact Us',
        isCustom: true,
        features: [
          'Bespoke implementation',
          'Advanced integrations',
          'Scalable features',
          'Dedicated support',
        ],
        ctaText: 'Contact Us',
        ctaLink: '/contact',
      },
    ],
  },
  faq: {
    sectionTitle: 'Your questions answered',
    questions: [
      {
        question: 'Is FacilitEase suitable for small business?',
        answer:
          'Yes! FacilitEase is designed for organizations of all sizes, including small businesses. The platform is easy to set up, requires no specialized IT team, and helps streamline navigation, safety planning, and space management - making it a great fit for small offices, retail spaces, and more.',
      },
      {
        question: 'Do you offer a free trial?',
        answer:
          'Contact us to discuss pilot options and the best way to evaluate FacilitEase for your facility.',
      },
      {
        question: 'Do I get an ArcGIS Indoors license with my plan?',
        answer:
          'Plans can include ArcGIS Indoors licensing or integrate with your existing Esri licensing, depending on your organization.',
      },
      {
        question: 'How do I get started with FacilitEase?',
        answer:
          'Start by scheduling a call, then share your floor plans so the team can configure your first indoor maps.',
      },
      {
        question: 'Is my data secure on FacilitEase?',
        answer:
          'Facility data is handled through secure workflows designed for controlled access, updates, and ongoing support.',
      },
    ],
  },
  ctaSection: {
    sectionTitle: 'Your Indoor Mapping Hosting Solution Awaits',
    subTitle: 'Join businesses using FacilitEase to save time, improve and efficiency of hosting',
    namePlaceholder: 'Enter your first name',
    lastNamePlaceholder: 'Enter your last name',
    emailPlaceholder: 'Enter your email name',
    phonePlaceholder: 'Phone number',
    messagePlaceholder: 'Enter your message name',
    submitBtnText: 'Submit',
  },
  footer: {
    partnerLabel: 'Powered By',
    brandTitle: 'FacilitEase',
    copyright: 'Copyright © 2026 geoConvergence. All Rights Reserved.',
    socialLinks: [
      {platform: 'LinkedIn', url: 'https://www.linkedin.com/company/geoconvergence'},
      {platform: 'YouTube', url: 'https://www.youtube.com'},
      {platform: 'X', url: 'https://x.com'},
    ],
  },
}
