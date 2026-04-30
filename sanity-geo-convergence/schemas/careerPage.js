import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'careerPage',
  title: 'Career Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],

  fields: [
    // ==================== HERO SECTION ====================
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Main Title' }),
        defineField({
          name: 'backgroundImage',
          type: 'image',
          title: 'Background Image',
          options: { hotspot: true }
        })
      ]
    }),
    // ==================== meetTheTeam ====================
    defineField({
      name: 'meetTheTeam', title: 'Meet The Team Block', type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({ name: 'listItems', type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'image', type: 'image', options: { hotspot: true } })
      ]
    }),
    // ==================== EASY STEPS ====================
    defineField({
      name: 'keyFeatures',
      title: 'Key Features / Stats',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({
          name: 'cards', type: 'array', of: [
            { type: 'object', fields: [defineField({ name: 'number', type: 'string' }), defineField({ name: 'label', type: 'string', }), defineField({ name: 'iconImage', type: 'image', options: { hotspot: true } })] }
          ]
        })
      ]
    }),


    // ==================== CORE VALUES ====================
    defineField({
      name: 'coreValues',
      title: 'Core Values',
      type: 'object',
      fields: [
        defineField({ name: 'sectionTitle', type: 'string' }),
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
                  name: 'iconImage',
                  type: 'image',
                  options: { hotspot: true }
                })
              ]
            }
          ]
        })
      ]
    }),

    // ==================== OPEN POSITIONS ====================
    defineField({
      name: 'openPositions',
      title: 'Open Positions',
      type: 'object',
      fields: [
        defineField({ name: 'sectionTitle', type: 'string' }),
        defineField({ name: 'sectionSubtitle', type: 'text' }),
        defineField({
          name: 'jobs',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', type: 'string' }),
                defineField({ name: 'type', type: 'string' }),
                defineField({ name: 'location', type: 'string' }),
                defineField({ name: 'salary', type: 'string' }),
                defineField({ name: 'description', type: 'text' })
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
