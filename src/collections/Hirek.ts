import type { CollectionConfig } from 'payload/types';
import validateImageSize from '../utilities/validateImageSize';
import { slugField } from '../fields/slug';

export const Hirek: CollectionConfig = {
	slug: 'hirek',
	admin: {
		useAsTitle: 'title'
	},
	labels: {
		singular: 'Hír',
		plural: 'Hírek'
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
							name: 'date',
							label: 'Dátum',
							type: 'date',
							required: true,
							admin: {
								position: 'sidebar'
							}
						},
						{
							name: 'description',
							label: 'Leírás',
							type: 'textarea',
							required: true
						},
						{
							name: 'content',
							label: 'Tartalom',
							type: 'richText',
							required: true
						}
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
							required: true
						},
						{
							name: 'hero',
							label: 'Hero kép',
							type: 'upload',
							relationTo: 'media',
							required: false
						},
						{
							name: 'heroMobile',
							label: 'Hero kép (mobil)',
							type: 'upload',
							relationTo: 'media',
							required: false
						}
					]
				}
			]
		},
		slugField()
	],
	endpoints: [
		{
			path: '/slug/:slug',
			method: 'get',
			handler: async (req, res, next) => {
				const { slug } = req.params;
				const hir = await req.payload.find({
					collection: 'hirek',
					where: {
						slug: {
							equals: slug
						}
					},
					depth: 5
				});
				res.send(hir);
			}
		}
	]
};

export default Hirek;
