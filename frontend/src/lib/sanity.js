import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'gino2rbl',
  dataset: 'production',
  apiVersion: '2026-04-17',
  useCdn: false,                // Development ke liye false
  token: import.meta.env.VITE_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  if (!source) return ""
  if (typeof source === "string") return source
  if (source?.asset?.url) return source.asset.url

  return builder
    .image(source)
    .auto('format')
    .width(1920)
    .quality(85)
    .url()
}

export function fileUrl(source) {
  if (!source?.asset?._ref) return ""

  const ref = source.asset._ref
    .replace('file-', '')
    .replace('-pdf', '.pdf')

  return `https://cdn.sanity.io/files/gino2rbl/production/${ref}`
}
