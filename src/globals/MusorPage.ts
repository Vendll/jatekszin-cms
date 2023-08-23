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

export default MusorokOldal;
