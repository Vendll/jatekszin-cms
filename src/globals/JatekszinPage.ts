import { GlobalConfig } from 'payload/types';

const JatekszinOldal: GlobalConfig = {
	slug: 'Jatekszin-oldal',
	label: 'Játékszín oldal',
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

export default JatekszinOldal;
