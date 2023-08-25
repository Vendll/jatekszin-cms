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
						},
						{
							name: 'letolthetoMusorok',
							label: 'Letölthető műsorok',
							type: 'array',
							fields: [
								{
									name: 'title',
									label: 'Év, hónap',
									type: 'text',
									required: true
								},
								{
									name: 'file',
									label: 'Fájl',
									type: 'upload',
									relationTo: 'files',
									required: true
								}
							]
						},
						{
							name: 'jegyarak',
							label: 'Jegyárak',
							type: 'upload',
							relationTo: 'files',
							required: true
						}
					]
				}
			]
		}
	]
};

export default JegyekOldal;
