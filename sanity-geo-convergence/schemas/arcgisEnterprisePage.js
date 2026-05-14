import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'arcgisEnterprisePage',
  title: 'ArcGIS Enterprise Page',
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
      name: 'coreValues',
      title: 'Core Values',
      type: 'object',
      fields: [
        defineField({
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
        }),
        defineField({
          name: 'cards',
          title: 'Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                }),
                defineField({
                  name: 'iconImage',
                  title: 'Icon Image',
                  type: 'image',
                  options: { hotspot: true }
                })
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'facilityFeaturesSection',
      title: 'Facility Features Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({
          name: 'cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', type: 'string' }),
                defineField({ name: 'description', type: 'text' }),
                defineField({
                  name: 'icon',
                  type: 'string',
                  description: 'Lucide icon name (e.g. Building2, LayoutGrid, Compass, ShieldCheck, Database, Settings)'
                })
              ]
            }
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
        defineField({ name: 'button1', type: 'object', fields: [{ name: 'text', type: 'string' }, { name: 'link', type: 'string' }] }),
        defineField({ name: 'button2', type: 'object', fields: [{ name: 'text', type: 'string' }, { name: 'link', type: 'string' }] })
      ]
    })
  ]
})
