import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'newsletterSubscription',
  title: 'Newsletter Subscription',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: Rule => Rule.required().email()
    }),
    defineField({
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    })
  ]
})
