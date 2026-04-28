import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'scan2Twin',
  title: 'Scan2Twin Page',
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
          name: 'button1',
          type: 'object',
          title: 'Primary Button',
          fields: [
            { name: 'text', type: 'string' },
            { name: 'link', type: 'string' }
          ]
        }),
        defineField({
          name: 'backgroundImage',
          type: 'image',
          title: 'Background Image',
          options: { hotspot: true }
        })
      ]
    }),

    // ==================== WHAT IS SCAN2TWIN ====================
    defineField({
      name: 'whatIs',
      title: 'What is Scan2Twin',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({
          name: 'description',
          type: 'array',
          of: [{ type: 'string' }]
        }),
        defineField({
          name: 'image',
          type: 'image',
          options: { hotspot: true }
        })
      ]
    }),

    // ==================== EVENTS ====================
    defineField({
      name: 'events',
      title: 'Transforming Physical to Digital',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({
          name: 'cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'image', type: 'image' })
              ]
            }
          ]
        }),
      ]
    }),

    // ==================== HOW IT WORKS ====================
    defineField({
      name: 'howItWorks',
      title: 'How It Works',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'subtitle', type: 'text' }),
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

    // ==================== WHY SCAN2TWIN ====================
    defineField({
      name: 'why',
      title: 'Why Scan2Twin',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({
          name: 'description',
          type: 'array',
          of: [{ type: 'string' }]
        }),
        defineField({
          name: 'buttonText',
          type: 'object',
          title: 'Primary Button',
          fields: [
            { name: 'text', type: 'string' },
            { name: 'link', type: 'string' }
          ]
        }),
        defineField({
          name: 'highlightText',
          type: 'string',
          title: 'Highlight Text'
        }),
        defineField({
          name: 'listItems',
          type: 'array',
          title: 'List Items',
          of: [{ type: 'string' }]
        }),
        defineField({
          name: 'image',
          type: 'image',
          options: { hotspot: true }
        })
      ]
    }),

    // ==================== USE CASES ====================
    defineField({
      name: 'useCases',
      title: 'Use Cases',
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
