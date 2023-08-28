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
							name: 'eloadasHossza',
							label: 'Előadás hossza (percben)',
							type: 'number',
							required: true
						},
						{
							name: 'szunetekSzama',
							label: 'Szünetek száma',
							type: 'number',
							required: true
						},
						{
							name: 'description',
							label: 'Leírás',
							type: 'textarea'
						},
						{
							name: 'otherInfo',
							label: 'Egyéb információk',
							type: 'richtext',
							admin: {
								elements: ['h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'ul', 'ol', 'link', 'image']
							}
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
							name: 'video',
							label: 'Videó',
							type: 'upload',
							relationTo: 'videos',
							required: false
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
					label: 'Jegyárak',
					fields: [
						{
							name: 'f1_9',
							label: 'Földszint: 1-9. sor',
							type: 'number',
							required: false,
							admin: {
								step: 1
							}
						},
						{
							name: 'f10_12',
							label: 'Földszint: 10-12. sor',
							type: 'number',
							required: false,
							admin: {
								step: 1
							}
						},
						{
							name: 'f13',
							label: 'Földszint: 10-12. sor',
							type: 'number',
							required: false,
							admin: {
								step: 1
							}
						},
						{
							name: 'f_potszek',
							label: 'Földszint: pótszék',
							type: 'number',
							required: false,
							admin: {
								step: 1
							}
						},
						{
							name: 'e1',
							label: 'Erkély: 1. sor',
							type: 'number',
							required: false,
							admin: {
								step: 1
							}
						},
						{
							name: 'e2',
							label: 'Erkély: 2. sor',
							type: 'number',
							required: false,
							admin: {
								step: 1
							}
						},
						{
							name: 'e3_4',
							label: 'Erkély: 3-4. sor',
							type: 'number',
							required: false,
							admin: {
								step: 1
							}
						},
						{
							name: 'e5',
							label: 'Erkély: 5. sor',
							type: 'number',
							required: false,
							admin: {
								step: 1
							}
						},
						{
							name: 'jm',
							label: 'JULIUS MEInL SZÍNPAD',
							type: 'number',
							required: false,
							admin: {
								step: 1
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
			path: '/slug/:slug',
			method: 'get',
			handler: async (req, res, next) => {
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
