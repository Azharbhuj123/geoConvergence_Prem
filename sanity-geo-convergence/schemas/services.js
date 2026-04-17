import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'services',
  title: 'Services / Three Cards Section',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Main Title',
      type: 'string',
      initialValue: 'Connect Your Spaces to Smart Digital Twin'
    }),
    defineField({
      name: 'sectionSubtitle',
      title: 'Section Subtitle',
      type: 'text',
      initialValue: 'Bringing the gap from scan data to fully operational BIM models.'
    }),

    // Three Cards
    defineField({
      name: 'cards',
      title: 'Cards (3)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', type: 'string', title: 'Card Title' }),           // Capture, Process, Integrate
            defineField({ name: 'description', type: 'text', title: 'Description' }),
            defineField({
              name: 'image',
              type: 'image',
              title: 'Card Image',
              options: { hotspot: true }
            }),
          ]
        }
      ],
      validation: Rule => Rule.length(3)   // exactly 3 cards
    })
  ]
})