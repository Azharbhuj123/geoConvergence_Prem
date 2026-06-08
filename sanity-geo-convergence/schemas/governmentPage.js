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
        defineField({ name: 'button2', type: 'object', fields: [{ name: 'text', type: 'string' }, { name: 'link', type: 'string' }] }),
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
                defineField({ name: 'description', type: 'text' }),
                defineField({ name: 'image', type: 'image' }),
                defineField({
                  name: 'button',
                  title: 'Button',
                  type: 'object',
                  fields: [
                    defineField({ name: 'text', type: 'string', title: 'Button Text' }),
                    defineField({ name: 'popupSlug', type: 'string', title: 'Popup Slug' })
                  ]
                })
              ]
            }
          ]
        }),
      ]
    }),
    // ==================== LOGO SLIDER ====================
    defineField({
      name: 'logoSlider',
      title: 'Logo Slider',
      type: 'object',
      fields: [
        defineField({
          name: 'cards',
          title: 'Slider Logos',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'title', type: 'string', title: 'Title' }),
                defineField({ name: 'subtitle', type: 'string', title: 'Subtitle' }),
                defineField({
                  name: 'logo',
                  type: 'image',
                  title: 'Logo',
                  options: { hotspot: true }
                })
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'subtitle',
                  media: 'logo'
                }
              }
            }
          ],
          validation: Rule => Rule.min(2)
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
                defineField({ name: 'image', type: 'image' }),
                defineField({
                  name: 'button',
                  title: 'Button',
                  type: 'object',
                  fields: [
                    defineField({ name: 'text', type: 'string', title: 'Button Text' }),
                    defineField({ name: 'popupSlug', type: 'string', title: 'Popup Slug' })
                  ]
                })
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
