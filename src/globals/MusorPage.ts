import { GlobalConfig } from 'payload/types';

const MusorokOldal: GlobalConfig = {
	slug: 'musorok-oldal',
	label: 'Műsor oldal',
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

export default MusorokOldal;
