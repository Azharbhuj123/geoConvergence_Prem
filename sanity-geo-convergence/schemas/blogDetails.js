import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'blogDetails',
  title: 'Blog Details',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Post Title',
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
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'image', type: 'image', options: { hotspot: true } },
            { name: 'alt', type: 'string' }
          ]
        }
      ]
    }),
    defineField({ name: 'inlineImage', title: 'Inline Image', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'intro', title: 'Introduction', type: 'text' }),
    defineField({
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'heading', type: 'string' },
            { name: 'paras', type: 'array', of: [{ type: 'text' }] }
          ]
        }
      ]
    })
  ]
})
