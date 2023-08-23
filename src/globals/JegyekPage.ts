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

export default JegyekOldal;
