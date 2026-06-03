import { defineType, defineField } from 'sanity'

const requiredString = (Rule) => Rule.required().min(2)

export default defineType({
  name: 'blogDetails',
  title: 'Blog Details',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Post Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(140),
    }),
    defineField({
      name: 'endTitle',
      title: 'End Title',
      type: 'string',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      initialValue: 'Blogs Details',
      validation: requiredString,
    }),
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Our Latest News & Blogs',
      validation: requiredString,
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Used by the frontend route /blog/:slug. Match this with the Blog Page card slug.',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
      rows: 4,
      description: 'Short overview shown under the post title.',
      validation: (Rule) => Rule.required().min(30).max(600),
    }),
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [
        defineField({
          name: 'galleryImage',
          title: 'Gallery Image',
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'alt',
              media: 'image',
            },
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'articleTitle',
      title: 'Article Title',
      type: 'string',
      description: 'Heading shown above the article intro.',
      validation: (Rule) => Rule.required().min(5).max(140),
    }),
    defineField({
      name: 'intro',
      title: 'Introduction Paragraphs',
      type: 'array',
      of: [
        defineField({
          name: 'paragraph',
          title: 'Paragraph',
          type: 'text',
          rows: 4,
          validation: (Rule) => Rule.required().min(20),
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'inlineImage',
      title: 'Inline Image',
      type: 'image',
      description: 'Optional full-width image shown after the third content section.',
      options: { hotspot: true },
    }),
    defineField({
      name: 'inlineImageAlt',
      title: 'Inline Image Alt Text',
      type: 'string',
      hidden: ({ document }) => !document?.inlineImage,
    }),
    defineField({
      name: 'inlineImageAfterSection',
      title: 'Show Inline Image After Section Index',
      type: 'number',
      description: 'Zero-based section index. Use 2 to show the image after the third section.',
      initialValue: 2,
      hidden: ({ document }) => !document?.inlineImage,
      validation: (Rule) => Rule.integer().min(0),
    }),
    defineField({
      name: 'sections',
      title: 'Content Sections',
      type: 'array',
      of: [
        defineField({
          name: 'section',
          title: 'Section',
          type: 'object',
          fields: [
            defineField({
              name: 'heading',
              title: 'Heading',
              type: 'string',
              validation: (Rule) => Rule.required().min(3).max(140),
            }),
            defineField({
              name: 'paras',
              title: 'Paragraphs',
              type: 'array',
              of: [
                defineField({
                  name: 'paragraph',
                  title: 'Paragraph',
                  type: 'text',
                  rows: 4,
                  validation: (Rule) => Rule.required().min(20),
                }),
              ],
              validation: (Rule) => Rule.required().min(1),
            }),
          ],
          preview: {
            select: {
              title: 'heading',
              paras: 'paras',
            },
            prepare({ title, paras = [] }) {
              return {
                title: title || 'Untitled section',
                subtitle: `${paras.length} paragraph${paras.length === 1 ? '' : 's'}`,
              }
            },
          },
        }),
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'slug.current',
      media: 'galleryImages.0.image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Untitled blog details',
        subtitle: subtitle ? `/blog/${subtitle}` : 'No slug set',
        media,
      }
    },
  },
})
