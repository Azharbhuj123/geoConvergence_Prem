import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'digitalTwinsPage',
  title: 'Digital Twins Page',
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
      name: 'firstSolution', title: 'First Solution Block', type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({ name: 'image', type: 'image', options: { hotspot: true } })
      ]
    }),
    defineField({
      name: 'coreValues', title: 'Core Values', type: 'object',
      fields: [
        defineField({ name: 'sectionTitle', type: 'string' }),
        defineField({ name: 'subTitle', type: 'text' }),
        defineField({
          name: 'cards', type: 'array', of: [
            { type: 'object', fields: [defineField({ name: 'title', type: 'string' }), defineField({ name: 'description', type: 'text' }), defineField({ name: 'iconImage', type: 'image', options: { hotspot: true } })] }
          ]
        })
      ]
    }),
    // defineField({
    //   name: 'howItWorks', title: 'How It Works (Services)', type: 'object',
    //   fields: [
    //     defineField({ name: 'sectionTitle', type: 'string' }),
    //     defineField({ name: 'sectionSubtitle', type: 'text' }),
    //     defineField({
    //       name: 'cards', type: 'array', of: [
    //         { type: 'object', fields: [defineField({ name: 'title', type: 'string' }), defineField({ name: 'image', type: 'image', options: { hotspot: true } })] }
    //       ]
    //     })
    //   ]
    // }),
    defineField({
      name: 'secondSolution', title: 'Second Solution Block', type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({ name: 'description2', type: 'text' }),
        defineField({ name: 'image', type: 'image', options: { hotspot: true } })
      ]
    }),
    defineField({
      name: 'useCases', title: 'Use Cases (Services)', type: 'object',
      fields: [
        defineField({ name: 'sectionTitle', type: 'string' }),
        defineField({ name: 'sectionSubtitle', type: 'text' }),
        defineField({
          name: 'cards', type: 'array', of: [
            { type: 'object', fields: [defineField({ name: 'title', type: 'string' }), defineField({ name: 'image', type: 'image', options: { hotspot: true } })] }
          ]
        })
      ]
    }),
    defineField({
      name: 'systemIntegrations',
      title: 'System Integrations',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string', title: 'Section Title' }),
        defineField({ name: 'subtitle', type: 'text', title: 'Subtitle (small text under title)' }),
        defineField({
          name: 'points',
          title: 'Bullet Points',
          type: 'array',
          of: [{ type: 'string' }]
        }),
        defineField({
          name: 'logos',
          title: 'Integration Logos (up to 11)',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'name', type: 'string', title: 'Logo Name / Alt Text' }),
                defineField({ name: 'image', type: 'image', title: 'Logo Image', options: { hotspot: true } })
              ],
              preview: {
                select: { title: 'name', media: 'image' }
              }
            }
          ],
          validation: (Rule) => Rule.max(11)
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

