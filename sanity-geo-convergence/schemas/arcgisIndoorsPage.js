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
        defineField({ name: 'backgroundImage', type: 'image', options: { hotspot: true } })
      ]
    }),
    defineField({
      name: 'coreValues', title: 'Core Values', type: 'object',
      fields: [
        defineField({ name: 'sectionTitle', type: 'string' }),
        defineField({
          name: 'cards', type: 'array', of: [
            { type: 'object', fields: [ defineField({ name: 'title', type: 'string' }), defineField({ name: 'description', type: 'text' }), defineField({ name: 'iconColor', type: 'string' }) ] }
          ]
        })
      ]
    }),
    defineField({
      name: 'servicesDescription', title: 'Services Description', type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text' })
      ]
    }),
    defineField({
      name: 'solutions', title: 'Solution Blocks', type: 'array',
      of: [
        { type: 'object', fields: [
          defineField({ name: 'title', type: 'string' }),
          defineField({ name: 'description', type: 'text' }),
          defineField({ name: 'buttonText', type: 'string' }),
          defineField({ name: 'image', type: 'image', options: { hotspot: true } })
        ] }
      ]
    }),
    defineField({
      name: 'stats', title: 'Stats', type: 'object',
      fields: [
        defineField({ name: 'sectionTitle', type: 'string' }),
        defineField({ name: 'sectionSubtitle', type: 'text' }),
        defineField({
          name: 'cards', type: 'array', of: [
            { type: 'object', fields: [ defineField({ name: 'number', type: 'string' }), defineField({ name: 'label', type: 'string' }) ] }
          ]
        })
      ]
    }),
    defineField({
      name: 'finalCta', title: 'Final CTA', type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'subtitle', type: 'text' }),
        defineField({ name: 'backgroundImage', type: 'image', options: { hotspot: true } }),
        defineField({ name: 'button1', type: 'object', fields: [ { name: 'text', type: 'string' }, { name: 'link', type: 'string' } ] }),
        defineField({ name: 'button2', type: 'object', fields: [ { name: 'text', type: 'string' }, { name: 'link', type: 'string' } ] })
      ]
    })
  ]
})
