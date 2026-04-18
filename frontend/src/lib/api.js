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