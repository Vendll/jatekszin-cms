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
			name: 'eloadasok',
			label: 'Előadás',
			type: 'relationship',
			relationTo: 'eloadasok',
			required: true
		},
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
	],
	endpoints: [
		{
			path: '/eloadasszerint/:id',
			method: 'get',
			handler: async (req, res, next) => {
				const { id } = req.params;
				const musor = await req.payload.find({
					collection: 'musor',
					depth: 1,
					limit: 9999,
					where: {
						eloadasok: {
							equals: id
						}
					}
				});
				res.send(musor);
			}
		}
	]
};

export default Musor;
