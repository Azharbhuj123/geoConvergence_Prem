import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'whyPage',
  title: 'Why Page',
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
        })
      ]
    }),

    defineField({
      name: 'solutionBlock',
      title: 'Our Expertise Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({
          name: 'highlightText',
          type: 'string'
        }),
        defineField({
          name: 'listItems',
          type: 'array',
          of: [{ type: 'string' }]
        }),
        defineField({
          name: 'button',
          type: 'object',
          fields: [
            { name: 'text', type: 'string' },
            { name: 'link', type: 'string' }
          ]
        }),
        defineField({
          name: 'image',
          type: 'image',
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
        defineField({
          name: 'button',
          type: 'object',
          fields: [
            { name: 'text', type: 'string' },
            { name: 'link', type: 'string' }
          ]
        })
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

    defineField({
      name: 'caseStudies',
      title: 'Case Studies',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'subtitle', type: 'text' }),
        defineField({
          name: 'studies',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', type: 'string' }),
                defineField({ name: 'description', type: 'text' }),
                defineField({ name: 'image', type: 'image' }),
                defineField({ name: 'link', type: 'string' })
              ]
            }
          ]
        })
      ]
    }),

    defineField({
      name: 'teamLeadership',
      title: 'Team And Leadership',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'subtitle', type: 'text' }),
        defineField({
          name: 'members',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'name', type: 'string' }),
                defineField({ name: 'position', type: 'string' }),
                defineField({ name: 'image', type: 'image' })
              ]
            }
          ]
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
