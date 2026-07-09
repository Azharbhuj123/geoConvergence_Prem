import {defineField, defineType} from 'sanity'

const imageField = (name, title) =>
  defineField({
    name,
    title,
    type: 'image',
    options: {hotspot: true},
  })

const buttonFields = [
  defineField({name: 'text', title: 'Text', type: 'string'}),
  defineField({name: 'link', title: 'Link', type: 'string'}),
]

const serviceCardFields = [
  defineField({name: 'title', title: 'Title', type: 'string'}),
  defineField({name: 'description', title: 'Description', type: 'text'}),
  defineField({name: 'link', title: 'Link', type: 'string'}),
  imageField('image', 'Image'),
]

export default defineType({
  name: 'facilitEasePage',
  title: 'FacilitEase Page',
  type: 'document',
  fields: [
    defineField({
      name: 'navbar',
      title: 'Navbar',
      type: 'object',
      fields: [
        imageField('logo', 'Logo'),
        defineField({name: 'ctaText', title: 'CTA Button Text', type: 'string'}),
        defineField({name: 'ctaLink', title: 'CTA Button Link', type: 'string'}),
      ],
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'subtitle', title: 'Subtitle', type: 'text'}),
        defineField({name: 'primaryBtnText', title: 'Primary Button Text', type: 'string'}),
        defineField({name: 'primaryBtnLink', title: 'Primary Button Link', type: 'string'}),
        defineField({name: 'secondBtnText', title: 'Secondary Button Text', type: 'string'}),
        defineField({name: 'secondBtnLink', title: 'Secondary Button Link', type: 'string'}),
        imageField('backgroundImage', 'Background Image'),
      ],
    }),
    defineField({
      name: 'whyFacilitEase',
      title: 'Why FacilitEase Section',
      type: 'object',
      fields: [
        defineField({name: 'sectionTitle', title: 'Section Title', type: 'string'}),
        defineField({name: 'subtitle', title: 'Subtitle', type: 'string'}),
        defineField({
          name: 'cards',
          title: 'Feature Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                imageField('icon', 'Icon'),
                defineField({name: 'title', title: 'Title', type: 'string'}),
                defineField({name: 'description', title: 'Description', type: 'text'}),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'startYourJourney',
      title: 'Start Your Journey Section',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
        defineField({name: 'buttonText', title: 'Button Text', type: 'string'}),
        defineField({name: 'buttonLink', title: 'Button Link', type: 'string'}),
        imageField('image', 'Image'),
      ],
    }),
    defineField({
      name: 'whatsIncluded',
      title: "What's Included Section",
      type: 'object',
      fields: [
        defineField({name: 'sectionTitle', title: 'Section Title', type: 'string'}),
        defineField({name: 'subTitle', title: 'Sub Title', type: 'string'}),
        defineField({
          name: 'cards',
          title: 'Product Cards',
          type: 'array',
          of: [{type: 'object', fields: serviceCardFields}],
        }),
      ],
    }),
    defineField({
      name: 'facilitEaseInAction',
      title: 'FacilitEase in Action Section',
      type: 'object',
      fields: [
        defineField({name: 'title', title: 'Title', type: 'string'}),
        defineField({name: 'description', title: 'Description', type: 'text'}),
        defineField({name: 'buttonText', title: 'Button Text', type: 'string'}),
        defineField({name: 'buttonLink', title: 'Button Link', type: 'string'}),
        imageField('image', 'Image'),
      ],
    }),
    defineField({
      name: 'solutionsForEverySpace',
      title: 'Solutions for Every Space Section',
      type: 'object',
      fields: [
        defineField({name: 'sectionTitle', title: 'Section Title', type: 'string'}),
        defineField({name: 'subTitle', title: 'Sub Title', type: 'string'}),
        defineField({
          name: 'cards',
          title: 'Solution Cards',
          type: 'array',
          of: [{type: 'object', fields: serviceCardFields}],
        }),
      ],
    }),
    defineField({
      name: 'gettingStarted',
      title: 'Getting Started is Easy Section',
      type: 'object',
      fields: [
        defineField({name: 'sectionTitle', title: 'Section Title', type: 'string'}),
        defineField({name: 'subTitle', title: 'Sub Title', type: 'string'}),
        defineField({
          name: 'steps',
          title: 'Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                imageField('icon', 'Step Icon'),
                defineField({name: 'title', title: 'Title', type: 'string'}),
                defineField({name: 'description', title: 'Description', type: 'text'}),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'plansAndPricing',
      title: 'Plans & Pricing Section',
      type: 'object',
      fields: [
        defineField({name: 'sectionTitle', title: 'Section Title', type: 'string'}),
        defineField({name: 'subTitle', title: 'Sub Title', type: 'string'}),
        defineField({
          name: 'plans',
          title: 'Pricing Plans',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'planName', title: 'Plan Name', type: 'string'}),
                defineField({name: 'price', title: 'Price', type: 'string'}),
                defineField({name: 'priceSuffix', title: 'Price Suffix', type: 'string'}),
                defineField({name: 'description', title: 'Description', type: 'text'}),
                defineField({name: 'isCustom', title: 'Is Custom Plan', type: 'boolean'}),
                defineField({name: 'isHighlighted', title: 'Highlighted Plan', type: 'boolean'}),
                defineField({
                  name: 'features',
                  title: 'Features',
                  type: 'array',
                  of: [{type: 'string'}],
                }),
                defineField({name: 'ctaText', title: 'CTA Text', type: 'string'}),
                defineField({name: 'ctaLink', title: 'CTA Link', type: 'string'}),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'faq',
      title: 'FAQ Section',
      type: 'object',
      fields: [
        defineField({name: 'sectionTitle', title: 'Section Title', type: 'string'}),
        defineField({name: 'subTitle', title: 'Sub Title', type: 'string'}),
        defineField({
          name: 'questions',
          title: 'Questions',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'question', title: 'Question', type: 'string'}),
                defineField({name: 'answer', title: 'Answer', type: 'text'}),
              ],
            },
          ],
        }),
      ],
    }),
    defineField({
      name: 'ctaSection',
      title: 'CTA / Contact Section',
      type: 'object',
      fields: [
        defineField({name: 'sectionTitle', title: 'Section Title', type: 'string'}),
        defineField({name: 'subTitle', title: 'Sub Title', type: 'string'}),
        defineField({name: 'namePlaceholder', title: 'Name Field Placeholder', type: 'string'}),
        defineField({
          name: 'lastNamePlaceholder',
          title: 'Last Name Field Placeholder',
          type: 'string',
        }),
        defineField({name: 'emailPlaceholder', title: 'Email Placeholder', type: 'string'}),
        defineField({name: 'phonePlaceholder', title: 'Phone Placeholder', type: 'string'}),
        defineField({name: 'messagePlaceholder', title: 'Message Placeholder', type: 'string'}),
        defineField({name: 'submitBtnText', title: 'Submit Button Text', type: 'string'}),
        imageField('backgroundImage', 'Background Image'),
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      fields: [
        imageField('logo', 'Footer Logo'),
        defineField({name: 'brandTitle', title: 'Brand Title', type: 'string'}),
        defineField({name: 'partnerLabel', title: 'Partner Label', type: 'string'}),
        defineField({name: 'copyright', title: 'Copyright Text', type: 'string'}),
        defineField({
          name: 'socialLinks',
          title: 'Social Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'platform', title: 'Platform', type: 'string'}),
                imageField('icon', 'Icon'),
                defineField({name: 'url', title: 'URL', type: 'url'}),
              ],
            },
          ],
        }),
        defineField({
          name: 'partnerLogos',
          title: 'Partner Logos',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({name: 'name', title: 'Name', type: 'string'}),
                imageField('logo', 'Logo'),
                defineField({name: 'link', title: 'Link', type: 'url'}),
              ],
            },
          ],
        }),
        defineField({
          name: 'buttons',
          title: 'Footer Buttons',
          type: 'array',
          of: [{type: 'object', fields: buttonFields}],
        }),
      ],
    }),
  ],
})
