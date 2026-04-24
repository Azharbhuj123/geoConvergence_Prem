import axios from "axios";
import { client } from "./sanity";

export const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const fetchLandingPage = async () => {
  const query = `*[_type == "landingPage"][0]{
    "hero": hero,
    "services": services,
    "stats": stats,
    "featuredProducts": featuredProducts,
    "testimonials": testimonials,
    "finalCta": finalCta
  }`;

  return await client.fetch(query);
};

export const fetchSolutionsPage = async () => {
  const query = `*[_type == "solutionsPage"][0]{
    hero,
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
    finalCta
  }`;
  return client.fetch(query);
};

export const fetchCareerPage = async () => {
  const query = `*[_type == "careerPage"][0]{
    hero,
    easySteps,
    meetTheTeam,
    coreValues,
    openPositions,
    finalCta
  }`;
  return client.fetch(query);
};

export const fetchLidarScanningPage = async () => {
  const query = `*[_type == "lidarScanningPage"][0]{
    hero, meetTheTeam, coreValues, servicesDescription, solutions, stats, finalCta
  }`;
  return client.fetch(query);
};

export const fetchThreeDModelingPage = async () => {
  const query = `*[_type == "threeDModelingPage"][0]{
    hero, whatIs, coreValues, solutions, finalCta
  }`;
  return client.fetch(query);
};

export const fetchArcGisIndoorsPage = async () => {
  const query = `*[_type == "arcgisIndoorsPage"][0]{
    hero, solutions, finalCta
  }`;
  return client.fetch(query);
};

export const fetchDigitalTwinsPage = async () => {
  const query = `*[_type == "digitalTwinsPage"][0]{
    hero, firstSolution, coreValues, howItWorks, secondSolution, useCases, finalCta
  }`;
  return client.fetch(query);
};

export const fetchReservAssistPage = async () => {
  const query = `*[_type == "reservAssistPage"][0]{
    hero, firstSolution, coreValues, howItWorks, secondSolution, useCases, finalCta
  }`;
  return client.fetch(query);
};

export const fetchGeoPrinterPage = async () => {
  const query = `*[_type == "geoPrinterPage"][0]{
    hero, firstSolution, coreValues, howItWorks, secondSolution, useCases, finalCta
  }`;
  return client.fetch(query);
};

export const fetchScenarioPlannerPage = async () => {
  const query = `*[_type == "scenarioPlannerPage"][0]{
    hero, firstSolution, coreValues, howItWorks, secondSolution, useCases, finalCta
  }`;
  return client.fetch(query);
};

export const fetchRoomReservPage = async () => {
  const query = `*[_type == "roomReservPage"][0]{
    hero, firstSolution, coreValues, howItWorks, secondSolution, useCases, finalCta
  }`;
  return client.fetch(query);
};

export const fetchBlogPage = async () => {
  const query = `*[_type == "blog"][0]{
    title,
    blog {
      posts[] {
        id, category, title, excerpt, date, "image": image.asset->url, tag
      },
      popularTags,
      recentPosts[] {
        id, title, date, "image": image.asset->url
      }
    }
  }`;
  return client.fetch(query);
};

export const fetchBlogDetails = async (slug) => {
  const query = `*[_type == "blogDetails" && slug.current == $slug][0]{
    title,
    "galleryImages": galleryImages[] {
      "image": image.asset->url,
      alt
    },
    "inlineImage": inlineImage.asset->url,
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
