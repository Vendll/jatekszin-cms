import { GlobalConfig } from 'payload/types';

const JegyekOldal: GlobalConfig = {
	slug: 'jegyek-oldal',
	label: 'Jegyek oldal',
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
						},
						{
							name: 'content',
							label: 'Tartalom',
							type: 'richText',
							required: true
						}
					]
				}
			]
		}
	]
};

export default JegyekOldal;
