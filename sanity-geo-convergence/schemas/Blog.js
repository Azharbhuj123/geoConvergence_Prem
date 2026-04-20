import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blogs',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
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
    
    // ==================== BLOG PAGE FIELDS ====================
    defineField({
      name: 'blog',
      title: 'Blog Page Content',
      type: 'object',
      fields: [
        defineField({
          name: 'posts',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'id', type: 'number' },
                { name: 'category', type: 'string' },
                { name: 'title', type: 'string' },
                { name: 'excerpt', type: 'text' },
                { name: 'date', type: 'string' },
                { name: 'image', type: 'image' },
                { name: 'tag', type: 'string' },
              ]
            }
          ]
        }),
        defineField({
          name: 'popularTags',
          type: 'array',
          of: [{ type: 'string' }]
        }),
        defineField({
          name: 'recentPosts',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'id', type: 'number' },
                { name: 'title', type: 'string' },
                { name: 'date', type: 'string' },
                { name: 'image', type: 'image' },
              ]
            }
          ]
        })
      ]
    }),
  ]
})
