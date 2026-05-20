import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'governmentPage',
  title: 'Government Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'], // Only one document allowed

  fields: [
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Main Title' }),
        defineField({ name: 'subtitle', type: 'text', title: 'Subtitle' }),
        defineField({
          name: 'button1',
          type: 'object',
          title: 'Primary Button',
          fields: [
            {
              name: 'text',
              type: 'string'
            },
            {
              name: 'pdfFile',
              title: 'PDF File',
              type: 'file',
              options: {
                accept: '.pdf'
              }
            }
          ]
        }),
        defineField({
          name: 'backgroundImage',
          type: 'image',
          title: 'Background Image',
          options: { hotspot: true }
        }),
      ]
    }),

    defineField({
      name: 'certifications',
      title: 'Certifications',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'subtitle', type: 'text' }),
        defineField({
          name: 'items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'name', type: 'string' }),
                defineField({ name: 'image', type: 'image' })
              ]
            }
          ]
        }),
      ]
    }),

    defineField({
      name: 'contractVehicles',
      title: 'Contract Vehicles',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'subtitle', type: 'text' }),
        defineField({
          name: 'vehicles',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'name', type: 'string' }),
                defineField({ name: 'description', type: 'text' }),
                defineField({ name: 'image', type: 'image' })
              ]
            }
          ]
        })
      ]
    }),
    // ==================== Events ====================
    defineField({
      name: 'events',
      title: 'Events',
      type: 'object',
      fields: [
        defineField({
          name: 'cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', type: 'string' }),
                defineField({ name: 'listItems', type: 'array', of: [{ type: 'string' }], title: 'List Items' }),
                defineField({ name: 'image', type: 'image' })
              ]
            }
          ]
        }),
      ]
    }),

    // ==================== FINAL CTA ====================
    defineField({
      name: 'finalCta',
      title: 'Final Call to Action',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'subtitle', type: 'text' }),
        defineField({
          name: 'backgroundImage',
          type: 'image',
          title: 'Background Image',
          options: { hotspot: true }
        }),
        defineField({
          name: 'button1',
          type: 'object',
          title: 'Primary Button',
          fields: [
            { name: 'text', type: 'string' },
            { name: 'link', type: 'string' }
          ]
        }),
        defineField({
          name: 'button2',
          type: 'object',
          title: 'Secondary Button',
          fields: [
            { name: 'text', type: 'string' },
            { name: 'link', type: 'string' }
          ]
        })
      ]
    })
  ],

  preview: {
    select: {
      title: 'hero.title'
    }
  }
})
