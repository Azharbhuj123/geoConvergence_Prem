import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'gino2rbl',
  dataset: 'production',
  apiVersion: '2026-04-17',
  useCdn: false,                // Development ke liye false
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder
    .image(source)
    .auto('format')
    .width(1920)
    .quality(85)
    .url()
}