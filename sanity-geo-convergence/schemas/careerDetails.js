import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'careerDetails',
  title: 'Career Details',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'tabData',
      title: 'Tab Content',
      type: 'object',
      fields: [
        { name: 'overview', type: 'text' },
        { name: 'summary', type: 'text' },
        { name: 'responsibilities', type: 'text' },
        { name: 'qualifications', type: 'text' },
      ]
    }),
    defineField({
      name: 'tabs',
      title: 'Tabs Configuration',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'key', type: 'string' },
            { name: 'label', type: 'string' }
          ]
        }
      ]
    }),
    defineField({
      name: 'stats',
      title: 'Job Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string' },
            { name: 'value', type: 'string' }
          ]
        }
      ]
    }),
    defineField({
      name: 'applyItems',
      title: 'How to Apply Items',
      type: 'array',
      of: [{ type: 'string' }]
    })
  ]
})
