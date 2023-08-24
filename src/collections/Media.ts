import path from 'path';
import type { CollectionConfig } from 'payload/types';

export const Media: CollectionConfig = {
	slug: 'media',
	upload: {
		staticDir: path.resolve(__dirname, '../../media'),
		imageSizes: [
			{ name: 'small', width: 320, formatOptions: { format: 'webp' } },
			{ name: 'medium', width: 640, formatOptions: { format: 'webp' } },
			{ name: 'large', width: 1280, formatOptions: { format: 'webp' } },
			{ name: 'xlarge', width: 1920, formatOptions: { format: 'webp' } }
		],
		formatOptions: { format: 'webp' }
	},
	access: {
		read: () => true
	},
	fields: [
		{
			name: 'alt',
			type: 'text',
			required: true
		},
		{
			name: 'caption',
			type: 'richText',
			admin: {
				elements: ['link']
			}
		},
		{
			name: 'size',
			type: 'select',
			options: [
				{ label: 'Kicsi', value: 'small' },
				{ label: 'Közepes', value: 'medium' },
				{ label: 'Nagy', value: 'large' },
				{ label: 'Extra nagy', value: 'xlarge' }
			],
			required: false,
			defaultValue: 'medium'
		},
		{
			name: 'position',
			type: 'select',
			options: [
				{ label: 'Balra', value: 'left' },
				{ label: 'Középen', value: 'center' },
				{ label: 'Jobbra', value: 'right' }
			],
			required: false,
			defaultValue: 'center'
		}
	]
};

export default Media;
