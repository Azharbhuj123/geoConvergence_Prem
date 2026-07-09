import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'threeDModelingPage',
  title: '3D Modeling & Point-to-BIM Page',
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
      name: 'meetTheTeam', title: 'Meet The Team', type: 'object',
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
        defineField({ name: 'subTitle', type: 'string' }),
        defineField({
          name: 'cards', type: 'array', of: [
            { type: 'object', fields: [defineField({ name: 'title', type: 'string' }), defineField({ name: 'description', type: 'text' }), defineField({ name: 'iconImage', type: 'image', options: { hotspot: true } })] }
          ]
        })
      ]
    }),
    defineField({
      name: 'solutions', title: 'Solution Blocks', type: 'array',
      of: [
        {
          type: 'object', fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'description', type: 'text' }),
            defineField({ name: 'listItems', type: 'array', of: [{ type: 'string' }] }),
            defineField({ name: 'description2', type: 'string' }),
            defineField({ name: 'buttonText', type: 'string' }),
            defineField({ name: 'image', type: 'image', options: { hotspot: true } })
          ]
        }
      ]
    }),
    defineField({
      name: 'finalCta', title: 'Final CTA', type: 'object',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'subtitle', type: 'text' }),
        defineField({ name: 'button1', type: 'object', fields: [{ name: 'text', type: 'string' }, { name: 'link', type: 'string' }] }),
        defineField({ name: 'button2', type: 'object', fields: [{ name: 'text', type: 'string' }, { name: 'link', type: 'string' }] }),
        defineField({ name: 'backgroundImage', type: 'image', options: { hotspot: true } }),
      ]
    })
  ]
})
