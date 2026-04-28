import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'productPage',
    title: 'Products Page',
    type: 'document',
    __experimental_actions: ['update', 'publish'],
    fields: [
        defineField({
            name: 'hero', title: 'Hero', type: 'object',
            fields: [
                defineField({ name: 'title', type: 'string' }),
                defineField({ name: 'backgroundImage', type: 'image', options: { hotspot: true } })
            ]
        }),
        defineField({
            name: 'servicesIntro', title: 'Services Intro', type: 'object',
            fields: [
                defineField({ name: 'title', type: 'string' }),
                defineField({ name: 'description', type: 'text' })
            ]
        }),
        defineField({
            name: 'solutions', title: 'Solution Blocks', type: 'array',
            of: [
                {
                    type: 'object', fields: [
                        defineField({ name: 'title', type: 'string' }),
                        defineField({ name: 'description', type: 'text' }),
                        defineField({ name: 'description2', type: 'text' }),
                        defineField({
                            name: 'button',
                            type: 'object',
                            title: 'Primary Button',
                            fields: [
                                { name: 'text', type: 'string' },
                                { name: 'link', type: 'string' }
                            ]
                        }),
                        defineField({ name: 'image', type: 'image', options: { hotspot: true } })
                    ]
                }
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
                                defineField({ name: 'description', type: 'text' }),
                                defineField({ name: 'image', type: 'image' })
                            ]
                        }
                    ]
                }),
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
    ]
})
