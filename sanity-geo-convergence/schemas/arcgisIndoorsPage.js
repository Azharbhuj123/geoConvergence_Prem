import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'arcgisIndoorsPage',
  title: 'ArcGIS Indoors Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'hero', title: 'Hero', type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'subtitle', type: 'text' }),
        defineField({ name: 'button1', type: 'object', fields: [{ name: 'text', type: 'string' }, { name: 'link', type: 'string' }] }),
        defineField({ name: 'button2', type: 'object', fields: [{ name: 'text', type: 'string' }, { name: 'link', type: 'string' }] }),
        defineField({ name: 'backgroundImage', type: 'image', options: { hotspot: true } })
      ]
    }),
    defineField({
      name: 'solutions', title: 'Solution Blocks', type: 'array',
      of: [
        {
          type: 'object', fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'description', type: 'text' }),
            defineField({ name: 'button', type: 'object', fields: [{ name: 'text', type: 'string' }, { name: 'link', type: 'string' }] }),
            defineField({ name: 'image', type: 'image', options: { hotspot: true } })
          ]
        }
      ]
    }),
    defineField({
      name: 'finalCta', title: 'Final CTA', type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'subtitle', type: 'text' }),
        defineField({ name: 'backgroundImage', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'button1', type: 'object', fields: [{ name: 'text', type: 'string' }, { name: 'link', type: 'string' }] }),
        defineField({ name: 'button2', type: 'object', fields: [{ name: 'text', type: 'string' }, { name: 'link', type: 'string' }] })
      ]
    })
  ]
})
