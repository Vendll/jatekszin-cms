import { GlobalConfig } from 'payload/types';

const TarsulatOldal: GlobalConfig = {
	slug: 'tarsulat-oldal',
	label: 'Társulat oldal',
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
					]
				}
			]
		}
	]
};

export default TarsulatOldal;
