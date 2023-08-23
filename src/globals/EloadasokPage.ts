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

export default EloadasokOldal;
