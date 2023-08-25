import { CollectionConfig } from 'payload/types';

const Munkatars: CollectionConfig = {
	slug: 'munkatars',
	labels: {
		singular: 'Munkatárs',
		plural: 'Munkatársak'
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
			name: 'szinesz',
			label: 'Színész',
			type: 'checkbox'
		},
		{
			name: 'alkoto',
			label: 'Alkotók',
			type: 'checkbox'
		},
		{
			name: 'vezetoseg',
			label: 'Vezetőség',
			type: 'checkbox'
		},
		{
			name: 'thumbnail',
			label: 'Kép',
			type: 'upload',
			relationTo: 'media',
			required: false
		}
	]
};

export default Munkatars;
