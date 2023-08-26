import { GlobalConfig } from 'payload/types';

const EloadasokOldal: GlobalConfig = {
	slug: 'eloadasok-oldal',
	label: 'Előadások oldal',
	access: {
		read: () => true
	},
	fields: [
		{
			type: 'tabs',
			tabs: [
				{
					label: 'Tartalom',
					fields: [
						{
							name: 'title',
							label: 'Cím',
							type: 'text',
							required: true
						},
						{
							name: 'banner',
							label: 'Banner',
							type: 'upload',
							relationTo: 'media',
							required: true
						}
						{
							name: 'eloadasok',
							label: 'Előadások',
							type: 'relationship',
							relationTo: 'eloadasok',
							hasMany: true,
							required: true,
						}
					]
				}
			]
		}
	]
};

export default EloadasokOldal;
