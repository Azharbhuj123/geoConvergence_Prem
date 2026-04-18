import axios from 'axios'
import { client } from './sanity'

export const api = axios.create({
  baseURL: 'http://localhost:3000/api',
})

export const fetchLandingPage = async () => {
  const query = `*[_type == "landingPage"][0]{
    "hero": hero,
    "services": services,
    "stats": stats,
    "featuredProducts": featuredProducts,
    "testimonials": testimonials,
    "finalCta": finalCta
  }`

  return await client.fetch(query)
}

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