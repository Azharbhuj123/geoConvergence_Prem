import { defineType, defineField } from 'sanity'

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

    // ==================== Projects / ProjectMAp ====================
    defineField({
      name: 'projectsMap',
      title: 'Projects Map',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({
          name: 'button',
          type: 'object',
          title: 'Primary Button',
          fields: [
            { name: 'text', type: 'string' },
            { name: 'link', type: 'string' }
          ]
        }),
      ]
    }),

    // ==================== STATS SECTION ====================
    defineField({
      name: 'stats', title: 'Stats', type: 'object',
      fields: [
        defineField({
          name: 'cards', type: 'array', of: [
            { type: 'object', fields: [defineField({ name: 'number', type: 'string' }), defineField({ name: 'label', type: 'string', }), defineField({ name: 'iconImage', type: 'image', options: { hotspot: true } })] }
          ]
        })
      ]
    }),

    // ==================== Clients SECTION ====================
    defineField({
      name: 'clients', title: 'Our Clients', type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'subTitle', type: 'text' }),
        defineField({
          name: 'cards', type: 'array', of: [
            { type: 'object', fields: [defineField({ name: 'title', type: 'string' }), defineField({ name: 'subtitle', type: 'string', }), defineField({ name: 'logo', type: 'image', options: { hotspot: true } })] }
          ]
        })
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

    // ==================== Events ====================
    defineField({
      name: 'events',
      title: 'Events',
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
                defineField({ name: 'title', type: 'string' }),
                defineField({ name: 'tag', type: 'string' }),
                defineField({ name: 'date', type: 'string' }),
                defineField({ name: 'location', type: 'string' }),
                defineField({ name: 'image', type: 'image' })
              ]
            }
          ]
        }),
      ]
    }),
    // ==================== TESTIMONIALS ====================
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'subtitle', type: 'text' }),
        // defineField({
        //   name: 'cards',
        //   type: 'array',
        //   of: [
        //     {
        //       type: 'object',
        //       fields: [
        //         defineField({ name: 'name', type: 'string' }),
        //         defineField({ name: 'position', type: 'string' }),
        //         defineField({ name: 'quote', type: 'text' }),
        //         defineField({ name: 'image', type: 'image' })
        //       ]
        //     }
        //   ]
        // }),
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