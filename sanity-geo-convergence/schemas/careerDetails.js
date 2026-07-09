import { defineType, defineField } from 'sanity'

const tabContentField = (name, title) => defineField({
  name,
  title,
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'Heading 2', value: 'h2' },
        { title: 'Heading 3', value: 'h3' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
      },
    },
  ],
})

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
        tabContentField('overview', 'Overview'),
        tabContentField('summary', 'Summary'),
        tabContentField('responsibilities', 'Responsibilities'),
        tabContentField('qualifications', 'Qualifications'),
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
