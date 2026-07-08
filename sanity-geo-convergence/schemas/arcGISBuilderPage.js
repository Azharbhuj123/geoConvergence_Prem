import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'arcGISBuilderPage',
  title: 'ArcGIS Builder Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'], // Only one document allowed

  fields: [
    // ==================== HERO SECTION ====================
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Main Title' }),
        defineField({ name: 'subtitle', type: 'text', title: 'Subtitle' }),
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
      ]
    }),
    // ==================== SOLUTIONS ====================
    defineField({
      name: 'firstSolution', title: 'First Solution Block', type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({ name: 'image', type: 'image', options: { hotspot: true } })
      ]
    }),
    // ==================== FEATURED PRODUCTS ====================
    defineField({
      name: 'featuredProducts',
      title: 'Featured Products',
      type: 'object',
      fields: [
        defineField({ name: 'sectionTitle', type: 'string' }),
        defineField({ name: 'sectionSubtitle', type: 'text' }),
        defineField({
          name: 'button',
          type: 'object',
          title: 'Primary Button',
          fields: [
            { name: 'text', type: 'string' },
            { name: 'link', type: 'string' }
          ]
        }),
        defineField({
          name: 'cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', type: 'string' }),
                defineField({ name: 'description', type: 'text' }),
                defineField({ name: 'link', type: 'string' }),
                defineField({
                  name: 'image',
                  type: 'image',
                  options: { hotspot: true }
                })
              ]
            }
          ],
          validation: Rule => Rule.min(1).max(6)
        })
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
      ]
    })
  ],

  preview: {
    select: {
      title: 'hero.title'
    }
  }
})
