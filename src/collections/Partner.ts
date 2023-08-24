import { CollectionConfig } from 'payload/types';

const Partner: CollectionConfig = {
	slug: 'partner',
	labels: {
		singular: 'Partner',
		plural: 'Partners'
	},
	admin: {
		useAsTitle: 'name'
	},
	access: {
		read: () => true
	},
	fields: [
		{
			name: 'name',
			label: 'Név',
			type: 'text',
			required: true
		},
		{
			name: 'link',
			label: 'Link',
			type: 'text',
			required: false
		},
		{
			name: 'logo',
			label: 'Logó',
			type: 'upload',
			relationTo: 'media',
			required: false
		}
	]
};

export default Partner;
