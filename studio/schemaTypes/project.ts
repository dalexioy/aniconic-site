import {defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',

  groups: [
    {name: 'general', title: 'General'},
    {name: 'info', title: 'Information'},
    {name: 'images', title: 'Images'},
    {name: 'seo', title: 'SEO'},
  ],

  fields: [
    defineField({
      name: 'title',
      title: 'Project title',
      type: 'string',
      group: 'general',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      group: 'general',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      group: 'general',
      description: 'Controls the order of the project in the homepage list.',
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: 'symbol',
      title: 'Symbol',
      type: 'string',
      group: 'general',
      description: 'Example: α΄, β΄, γ΄',
    }),

    defineField({
      name: "hoverDescription",
      title: "Hover Description",
      type: "text",
      rows: 2,
      group: "info",
      description: "Short text shown on the homepage hover.",
      validation: (Rule) => Rule.max(180),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      group: 'info',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'disciplines',
      title: 'Disciplines',
      type: 'array',
      group: 'info',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      group: 'info',
      validation: (Rule) => Rule.required().min(2000).max(2100),
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      group: 'info',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      group: 'images',
      description: 'Main image for the project.',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'hoverImages',
      title: 'Hover Images',
      type: 'array',
      group: 'images',
      description: 'Up to 3 images shown when hovering the project in the homepage.',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),

    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      group: 'images',
      description: 'Images shown inside the project page.',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),

    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      group: 'seo',
      description: 'Optional. If empty, the project title will be used.',
    }),

    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      group: 'seo',
      rows: 3,
      description: 'Optional. Short description for Google and social sharing.',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'location',
      media: 'coverImage',
    },
  },
})