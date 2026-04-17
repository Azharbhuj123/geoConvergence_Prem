import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'landingPage',
  title: 'Landing Page',
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
    }),

    // ==================== SERVICES / THREE CARDS ====================
    defineField({
      name: 'services',
      title: 'Services Section',
      type: 'object',
      fields: [
        defineField({ name: 'sectionTitle', type: 'string' }),
        defineField({ name: 'sectionSubtitle', type: 'text' }),
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

    // ==================== STATS SECTION ====================
    defineField({
      name: 'stats',
      title: 'Stats / Counter Section',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'number', type: 'string' }),
            defineField({ name: 'label', type: 'string' })
          ]
        }
      ]
    }),

    // ==================== FEATURED PRODUCTS ====================
    defineField({
      name: 'featuredProducts',
      title: 'Featured Products',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'subtitle', type: 'string' }),
            defineField({ name: 'description', type: 'text' }),
            defineField({ name: 'image', type: 'image' }),
            defineField({ name: 'buttonText', type: 'string', initialValue: 'Learn More' }),
            defineField({ name: 'link', type: 'string' })
          ]
        }
      ]
    }),

    // ==================== TESTIMONIALS ====================
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', type: 'string' }),
            defineField({ name: 'position', type: 'string' }),
            defineField({ name: 'quote', type: 'text' }),
            defineField({ name: 'image', type: 'image' })
          ]
        }
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
        defineField({ name: 'buttonText', type: 'string' }),
        defineField({ name: 'buttonLink', type: 'string' })
      ]
    })
  ],

  preview: {
    select: {
      title: 'hero.title'
    }
  }
})