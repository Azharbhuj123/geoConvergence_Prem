import axios from "axios";
import { client } from "./sanity";

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const fetchLandingPage = async () => {
  const query = `*[_type == "landingPage"][0]{
    "hero": hero,
    "services": services,
    "logoSlider": logoSlider,
    "projectsMap": projectsMap,
    "stats": stats,
    "clients": clients,
    "featuredProducts": featuredProducts,
    "events": events,
    "testimonials": testimonials,
    "finalCta": finalCta
  }`;

  return await client.fetch(query);
};

export const fetchSolutionsPage = async () => {
  const query = `*[_type == "solutionsPage"][0]{
    hero,
    servicesIntro,
    solutions[]{
      title,
      description,
      button,
      image
    },
    finalCta
  }`;
  return client.fetch(query);
};
export const fetchProductPage = async () => {
  const query = `*[_type == "productPage"][0]{
    hero,
    servicesIntro,
    howItWorks,
    events,
    finalCta
  }`;
  return client.fetch(query);
};

export const fetchScan2Twin = async () => {
  const query = `*[_type == "scan2Twin"][0]{
    hero,
    whatIs,
    transforming,
    howItWorks,
    why,
    useCases,
    events,
    finalCta
  }`;
  return client.fetch(query);
};

export const fetchIndoorMapsPage = async () => {
  const query = `*[_type == "indoorMapsPage"][0]{
    hero,
    whatIs,
    howItWorks,
    keyFeatures,
    useCases,
    capabilities,
    imageGallery,
    finalCta
  }`;
  return client.fetch(query);
};

export const fetchCareerPage = async () => {
  const query = `*[_type == "careerPage"][0]{
    hero,
    keyFeatures,
    meetTheTeam,
    coreValues,
    openPositions{
      sectionTitle,
      sectionSubtitle,
      jobs[]{
        title,
        "slug": slug.current,
        type,
        location,
        salary,
        description
      }
    },
    finalCta
  }`;
  return client.fetch(query);
};

export const fetchLidarScanningPage = async () => {
  const query = `*[_type == "lidarScanningPage"][0]{
    hero, meetTheTeam, coreValues, servicesDescription, services, solutions, stats, finalCta
  }`;
  return client.fetch(query);
};

export const fetchThreeDModelingPage = async () => {
  const query = `*[_type == "threeDModelingPage"][0]{
    hero, meetTheTeam, coreValues, solutions, finalCta
  }`;
  return client.fetch(query);
};

export const fetchArcGisIndoorsPage = async () => {
  const query = `*[_type == "arcgisIndoorsPage"][0]{
    hero, solutions, coreValues, howItWorks, keyServices, stats, capabilitiesSection, facilityFeaturesSection,  finalCta
  }`;
  return client.fetch(query);
};

export const fetchArcGisEnterprisePage = async () => {
  const query = `*[_type == "arcgisEnterprisePage"][0]{
    hero, coreValues, howItWorks, keyServices, stats, capabilitiesSection, facilityFeaturesSection,  finalCta
  }`;
  return client.fetch(query);
};

export const fetchArcGisDevelopmentPage = async () => {
  const query = `*[_type == "arcgisDevelopmentPage"][0]{
    hero, solutions, coreValues, facilityFeaturesSection, finalCta
  }`;
  return client.fetch(query);
};

export const fetchDigitalTwinsPage = async () => {
  const query = `*[_type == "digitalTwinsPage"][0]{
    hero, firstSolution, coreValues, howItWorks, secondSolution, useCases, systemIntegrations, finalCta
  }`;
  return client.fetch(query);
};

export const fetchReservAssistPage = async () => {
  const query = `*[_type == "reservAssistPage"][0]{
    hero, firstSolution, coreValues, howItWorks, secondSolution, useCases, imageGallery, finalCta
  }`;
  return client.fetch(query);
};

export const fetchGeoPrinterPage = async () => {
  const query = `*[_type == "geoPrinterPage"][0]{
    hero, firstSolution, coreValues, howItWorks, secondSolution, useCases, imageGallery, finalCta
  }`;
  return client.fetch(query);
};

export const fetchScenarioPlannerPage = async () => {
  const query = `*[_type == "scenarioPlannerPage"][0]{
    hero, firstSolution, coreValues, howItWorks, secondSolution, useCases, keyFeatures, finalCta
  }`;
  return client.fetch(query);
};

export const fetchFacilitEasePage = async () => {
  const imageProjection = `{
    ...,
    asset->{_id, _ref, url}
  }`;

  const query = `*[_type == "facilitEasePage"][0]{
    navbar{
      logo${imageProjection},
      ctaText,
      ctaLink
    },
    hero{
      title,
      subtitle,
      primaryBtnText,
      primaryBtnLink,
      secondBtnText,
      secondBtnLink,
      backgroundImage${imageProjection}
    },
    whyFacilitEase{
      sectionTitle,
      subtitle,
      cards[]{
        title,
        description,
        icon${imageProjection}
      }
    },
    startYourJourney{
      title,
      description,
      buttonText,
      buttonLink,
      image${imageProjection}
    },
    whatsIncluded{
      sectionTitle,
      subTitle,
      cards[]{
        title,
        description,
        link,
        image${imageProjection}
      }
    },
    facilitEaseInAction{
      title,
      description,
      buttonText,
      buttonLink,
      image${imageProjection}
    },
    solutionsForEverySpace{
      sectionTitle,
      subTitle,
      cards[]{
        title,
        description,
        link,
        image${imageProjection}
      }
    },
    gettingStarted{
      sectionTitle,
      subTitle,
      steps[]{
        title,
        description,
        icon${imageProjection}
      }
    },
    plansAndPricing{
      sectionTitle,
      subTitle,
      plans[]{
        planName,
        price,
        priceSuffix,
        description,
        isCustom,
        isHighlighted,
        features[],
        ctaText,
        ctaLink
      }
    },
    faq{
      sectionTitle,
      subTitle,
      questions[]{
        question,
        answer
      }
    },
    ctaSection{
      sectionTitle,
      subTitle,
      namePlaceholder,
      lastNamePlaceholder,
      emailPlaceholder,
      phonePlaceholder,
      messagePlaceholder,
      submitBtnText,
      backgroundImage${imageProjection}
    },
    footer{
      logo${imageProjection},
      brandTitle,
      partnerLabel,
      copyright,
      socialLinks[]{
        platform,
        url,
        icon${imageProjection}
      },
      partnerLogos[]{
        name,
        link,
        logo${imageProjection}
      },
      buttons[]{
        text,
        link
      }
    }
  }`;

  return client.fetch(query);
};

export const connectArcGISPage = async () => {
  const query = `*[_type == "connectArcGISPage"][0]{
    "hero": hero,
    "firstSolution": firstSolution, 
    "featuredProducts": featuredProducts,
    "finalCta": finalCta
  }`;

  return await client.fetch(query);
};
export const cartinuumPage = async () => {
  const query = `*[_type == "cartinuumPage"][0]{
    "hero": hero,
    "firstSolution": firstSolution, 
    "featuredProducts": featuredProducts,
    "finalCta": finalCta
  }`;

  return await client.fetch(query);
};
export const arcGISBuilderPage = async () => {
  const query = `*[_type == "arcGISBuilderPage"][0]{
    "hero": hero,
    "firstSolution": firstSolution, 
    "featuredProducts": featuredProducts,
    "finalCta": finalCta
  }`;

  return await client.fetch(query);
};

export const fetchRoomReservPage = async () => {
  const query = `*[_type == "roomReservPage"][0]{
    hero, firstSolution, coreValues, howItWorks, keyFeatures, useCases, finalCta
  }`;
  return client.fetch(query);
};

export const fetchBlogPage = async () => {
  const query = `*[_type == "blogPage"][0]{
    posts[] {
      id,
      category,
      title,
      excerpt,
      date,
      "image": image.asset->url,
      tag,
      "slug": slug.current
    },
    popularTags,
    recentPosts[] {
      id,
      title,
      date,
      "image": image.asset->url,
      "slug": slug.current
    }
  }`;

  return client.fetch(query);
};

export const fetchBlogDetails = async (slug) => {
  const query = `*[_type == "blogDetails" && slug.current == $slug][0]{
    heroTitle,
    sectionTitle,
    title,
    endTitle,
    summary,
    articleTitle,
    "galleryImages": galleryImages[] {
      "src": image.asset->url,
      alt
    },
    "inlineImage": inlineImage.asset->url,
    inlineImageAlt,
    inlineImageAfterSection,
    intro,
    sections[] {
      heading,
      paras
    }
  }`;
  return client.fetch(query, { slug });
};

export const fetchCareerDetails = async (slug) => {
  const query = `*[_type == "careerDetails" && slug.current == $slug][0]{
    title,
    tabData,
    tabs,
    stats,
    applyItems
  }`;
  return client.fetch(query, { slug });
};

export const fetchWhyPage = async () => {
  const query = `*[_type == "whyPage"][0]{
    hero,
    solutionBlock,
    certifications,
    contractVehicles,
    caseStudies,
    teamLeadership,
    finalCta
  }`;
  return client.fetch(query);
};

export const fetchGovernmentPage = async () => {
  const query = `*[_type == "governmentPage"][0]{
    hero,
    certifications,
    "logoSlider": logoSlider,
    contractVehicles,
    events,  
    finalCta
  }`;
  return client.fetch(query);
};

export const submitContactForm = async (formData) => {
  return await client.create({
    _type: 'contactSubmission',
    fullName: formData.firstName,
    lastName: formData.lastName,
    email: formData.email,
    phone: formData.phone,
    message: formData.message,
    createdAt: new Date().toISOString()
  });
};

export const subscribeNewsletter = async (email) => {
  // Check for duplicate
  const query = `*[_type == "newsletterSubscription" && email == $email][0]`;
  const existing = await client.fetch(query, { email });
  if (existing) {
    throw new Error("Already subscribed");
  }

  return await client.create({
    _type: 'newsletterSubscription',
    email,
    createdAt: new Date().toISOString()
  });
};

export const fetchSiteSettings = async () => {
  const query = `*[_type == "siteSettings"][0]{
    passwordEnabled,
    passwordHash
  }`;
  return client.fetch(query);
};

