import { CollectionConfig } from 'payload/types';
import { slugField } from '../fields/slug';

const Eloadasok: CollectionConfig = {
	slug: 'eloadasok',
	labels: {
		singular: 'Előadás',
		plural: 'Előadások'
	},
	admin: {
		useAsTitle: 'title'
	},
	access: {
		read: () => true
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
							required: true
						},
						{
							name: 'author',
							label: 'Szerző',
							type: 'text',
							required: true
						},
						{
							name: 'bemutatoDatum',
							label: 'Bemutató dátuma',
							type: 'date',
							required: true
						},
						{
							name: 'description',
							label: 'Leírás',
							type: 'textarea'
						}
					]
				},
				{
					label: 'Munkatársak',
					fields: [
						{
							name: 'szereplok',
							label: 'Szereplők',
							type: 'relationship',
							relationTo: ['szereplo'],
							hasMany: true,
							required: true,
							admin: {
								allowCreate: true
							}
						},

						{
							name: 'kozremukodok',
							label: 'Közreműködők',
							type: 'relationship',
							relationTo: ['kozremukodok'],
							hasMany: true,
							required: true,
							admin: {
								allowCreate: true
							}
						}
					]
				},
				{
					label: 'Média',
					fields: [
						{
							name: 'hero',
							label: 'Hero',
							type: 'upload',
							relationTo: 'media',
							required: true
						},
						{
							name: 'heroMobile',
							label: 'Hero mobil',
							type: 'upload',
							relationTo: 'media',
							required: true
						},
						{
							name: 'thumbnail',
							label: 'Thumbnail',
							type: 'upload',
							relationTo: 'media',
							required: true
						},
						{
							name: 'poster',
							label: 'Poszter',
							type: 'upload',
							relationTo: 'media',
							required: true
						},
						{
							name: 'galeria',
							label: 'Galéria',
							type: 'array',
							fields: [
								{
									name: 'image',
									label: 'Kép',
									type: 'upload',
									relationTo: 'media',
									required: true
								}
							]
						}
					]
				},
				{
					label: 'Műsor',
					fields: [
						{
							name: 'musor',
							label: 'Műsor',
							type: 'relationship',
							relationTo: ['musor'],
							hasMany: true,
							required: true,
							admin: {
								allowCreate: true
							}
						}
					]
				}
			]
		},

		slugField(),
		{
			name: 'archived',
			label: 'Archivált',
			type: 'checkbox',
			defaultValue: false,
			admin: {
				position: 'sidebar'
			}
		}
	],
	endpoints: [
		{
			path: '/:slug',
			method: 'get',
			handler: async (req, res) => {
				const { slug } = req.params;
				const eloadas = await req.payload.find({
					collection: 'eloadasok',
					where: {
						slug: {
							equals: slug
						}
					},
					depth: 5
				});
				res.send(eloadas);
			}
		}
	]
};

export default Eloadasok;
