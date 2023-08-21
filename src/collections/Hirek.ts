import type { CollectionConfig } from 'payload/types'
import validateImageSize from '../utilities/validateImageSize'
import { slugField } from '../fields/slug';

export const Hirek: CollectionConfig = {
  slug: 'hirek',
  admin: {
    useAsTitle: 'title',
  },
  labels: {
    singular: 'Hír',
    plural: 'Hírek',
    },
  access: {
    read: () => true,
  },
  fields: [
    {
        type: 'tabs',
        tabs: [
            {
                label: 'Általános',
                fields: [
           
    {
        name: 'title',
        label: 'Cím',
        type: 'text',
        required: true,
        },
    {
        name: 'date',
        label: 'Dátum',
        type: 'date',
        required: true,
        admin: {
            position: 'sidebar',
        },
        },
    {
        name: 'description',
        label: 'Leírás',
        type: 'textarea',
        required: true,
        },
    {
        name: 'content',
        label: 'Tartalom',
        type: 'richText',
        required: true,
        admin: {
            elements: [
                'h1',
                'h2',
                'h3',
                'h4',
                'h5',
                'h6',
                'blockquote',
                'ul',
                'ol',
            ],
        },
        },


    ]
    },
    {
        label: 'Media',
        fields: [
            {
                name: 'thumbnail',
                label: 'Thumbnail',
                type: 'upload',
                relationTo: 'media',
                required: true,
                validate: (value) => validateImageSize(value)
                
                },
            {
                name: 'hero',
                label: 'Hero kép',
                type: 'upload',
                relationTo: 'media',
                required: false,
               
                },
                {
                    name: 'heroMobile',
                    label: 'Hero kép (mobil)',
                    type: 'upload',
                    relationTo: 'media',
                    required: false,
                    
                    },
                ]
            },
    ]
    },
    slugField(),
  ],
}

export default Hirek