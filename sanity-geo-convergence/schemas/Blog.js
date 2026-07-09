import { defineField, defineType } from 'sanity'

const requiredString = (Rule) => Rule.required().min(2)

const uniqueIds = (items) => {
  if (!items) return true

  const ids = items.map((item) => item?.id).filter((id) => id !== undefined && id !== null)
  return new Set(ids).size === ids.length || 'IDs must be unique within this list'
}

const blogPostObject = defineField({
  name: 'post',
  title: 'Blog Post',
  type: 'object',
  fields: [
    defineField({
      name: 'id',
      title: 'Post ID',
      type: 'number',
      description: 'Stable numeric ID for ordering or matching older data. Routes use slug.',
      validation: (Rule) => Rule.required().integer().positive(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main blog post title.',
      validation: (Rule) => Rule.required().min(5).max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Used by the frontend route /blog/:slug and must match the related Blog Details document.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'Short summary shown on the blog listing card.',
      rows: 4,
      validation: (Rule) => Rule.required().min(30).max(300),
    }),
    defineField({
      name: 'date',
      title: 'Display Date',
      type: 'string',
      description: 'Date text shown in React exactly as entered, for example "May 25, 2026".',
      validation: requiredString,
    }),
    defineField({
      name: 'image',
      title: 'Card Image',
      type: 'image',
      description: 'Primary image for the blog card. Hotspot controls the crop in responsive layouts.',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Tag',
      type: 'string',
      description: 'Single tag value used for filtering or display.',
      validation: requiredString,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Untitled blog post',
        subtitle: subtitle ? `Published ${subtitle}` : 'No date set',
        media,
      }
    },
  },
})

const recentPostObject = defineField({
  name: 'recentPost',
  title: 'Recent Post',
  type: 'object',
  fields: [
    defineField({
      name: 'id',
      title: 'Post ID',
      type: 'number',
      description: 'Unique numeric ID that should match the related blog post.',
      validation: (Rule) => Rule.required().integer().positive(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title shown in the Recent Post sidebar.',
      validation: (Rule) => Rule.required().min(5).max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Used by the frontend route /blog/:slug and should match the related Blog Details document.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Display Date',
      type: 'string',
      description: 'Date text shown in React exactly as entered.',
      validation: requiredString,
    }),
    defineField({
      name: 'image',
      title: 'Thumbnail Image',
      type: 'image',
      description: 'Small sidebar thumbnail. Hotspot controls the crop.',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Untitled recent post',
        subtitle: subtitle ? `Recent post - ${subtitle}` : 'No date set',
        media,
      }
    },
  },
})

export default defineType({
  name: 'blogPage',
  title: 'Blog Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'posts',
      title: 'Blog Posts',
      type: 'array',
      description: 'Main blog cards rendered by pageData.blogPage.posts.',
      of: [blogPostObject],
      validation: (Rule) => Rule.required().min(1).custom(uniqueIds),
    }),
    defineField({
      name: 'popularTags',
      title: 'Popular Tags',
      type: 'array',
      description: 'Tag buttons rendered in the blog sidebar.',
      of: [
        defineField({
          name: 'tag',
          title: 'Tag',
          type: 'string',
          validation: requiredString,
        }),
      ],
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .unique()
          .custom((tags) => {
            if (!tags) return true
            return tags.every((tag) => tag.trim().length >= 2) || 'Each tag must be at least 2 characters'
          }),
    }),
    defineField({
      name: 'recentPosts',
      title: 'Recent Posts',
      type: 'array',
      description: 'Sidebar recent posts rendered by pageData.blogPage.recentPosts.',
      of: [recentPostObject],
      validation: (Rule) => Rule.required().min(1).custom(uniqueIds),
    }),
  ],
  preview: {
    select: {
      posts: 'posts',
      popularTags: 'popularTags',
      recentPosts: 'recentPosts',
    },
    prepare({ posts = [], popularTags = [], recentPosts = [] }) {
      return {
        title: 'Blog Page',
        subtitle: `${posts.length} posts, ${popularTags.length} tags, ${recentPosts.length} recent posts`,
      }
    },
  },
})
