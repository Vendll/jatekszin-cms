import path from 'path'
import type { CollectionConfig } from 'payload/types'

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: path.resolve(__dirname, '../../media'),
    imageSizes: [
      { name: 'small', width: 320, resize: 'fit', formatOptions: { format: 'webp' } },
      { name: 'medium', width: 640, resize: 'fit', formatOptions: { format: 'webp' } },
      { name: 'large', width: 1280,  resize: 'fit', formatOptions: { format: 'webp' } },
      { name: 'xlarge', width: 1920,  resize: 'fit', formatOptions: { format: 'webp' } },
    ],  
    formatOptions: { format: 'webp' }  
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'caption',
      type: 'richText',
      admin: {
        elements: ['link'],
      },
    },
  ],
}

export default Media