import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'reservAssistPage',
  title: 'ReservAssist Page',
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
        defineField({ name: 'listItems', type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
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
    defineField({
      name: 'howItWorks', title: 'How It Works (Services)', type: 'object',
      fields: [
        defineField({ name: 'sectionTitle', type: 'string' }),
        defineField({ name: 'sectionSubtitle', type: 'text' }),
        defineField({
          name: 'cards', type: 'array', of: [
            { type: 'object', fields: [defineField({ name: 'title', type: 'string' }), defineField({ name: 'description', type: 'text' }), defineField({ name: 'image', type: 'image', options: { hotspot: true } })] }
          ]
        })
      ]
    }),
    defineField({
      name: 'secondSolution', title: 'Second Solution Block', type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({ name: 'listItems', type: 'array', of: [{ type: 'string' }] }),
        defineField({ name: 'image', type: 'image', options: { hotspot: true } })
      ]
    }),
    // defineField({
    //   name: 'useCases', title: 'Use Cases (Services)', type: 'object',
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
      name: 'imageGallery',
      title: 'Image Gallery',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Section Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Section Subtitle', type: 'text' }),
        defineField({
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'image', title: 'Image', type: 'image', options: { hotspot: true } }),
                defineField({ name: 'alt', title: 'Alt Text', type: 'string' }),
                defineField({ name: 'caption', title: 'Caption', type: 'string' })
              ],
              preview: {
                select: {
                  title: 'caption',
                  subtitle: 'alt',
                  media: 'image'
                },
                prepare({ title, subtitle, media }) {
                  return {
                    title: title || subtitle || 'Gallery image',
                    subtitle,
                    media
                  }
                }
              }
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
