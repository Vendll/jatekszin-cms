import { GlobalConfig } from 'payload/types';

const HirekOldal: GlobalConfig = {
	slug: 'hirek-oldal',
	label: 'Hírek oldal',
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

export default HirekOldal;
