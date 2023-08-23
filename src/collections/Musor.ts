import { CollectionConfig } from 'payload/types';

const Musor: CollectionConfig = {
	slug: 'musor',
	labels: {
		singular: 'Műsor',
		plural: 'Műsorok'
	},
	admin: {
		useAsTitle: 'date'
	},
	access: {
		read: () => true
	},
	fields: [
		{
			name: 'date',
			label: 'Dátum',
			type: 'date',
			required: true,
			admin: {
				date: {
					pickerAppearance: 'dayAndTime'
				}
			}
		},
		{
			name: 'jegyLink',
			label: 'Jegy link',
			type: 'text',
			required: false
		},
		{
			name: 'nincsJegy',
			label: 'Nincs jegy',
			type: 'checkbox',
			required: false
		},
		{
			name: 'elmarad',
			label: 'Elmarad',
			type: 'checkbox',
			required: false
		},
		{
			name: 'zartkoru',
			label: 'Zártkörű',
			type: 'checkbox',
			required: false
		}
	]
};

export default Musor;
