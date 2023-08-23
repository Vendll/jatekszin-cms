import { GlobalConfig } from 'payload/types';

const KapcsolatOldal: GlobalConfig = {
	slug: 'kapcsolat-oldal',
	label: 'Kapcsolat oldal',
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

export default KapcsolatOldal;
