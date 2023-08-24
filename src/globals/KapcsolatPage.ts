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
							name: 'contactInfos',
							label: 'Kapcsolat információk',
							type: 'array',
							fields: [
								{
									name: 'title',
									label: 'Cím',
									type: 'text',
									required: true
								},
								{
									name: 'address',
									label: 'Cím',
									type: 'text',
									required: false
								},
								{
									name: 'name',
									label: 'Név',
									type: 'text',
									required: false
								},
								{
									name: 'email',
									label: 'Email',
									type: 'text',
									required: true
								},
								{
									name: 'phone',
									label: 'Telefon',
									type: 'text',
									required: false
								},
								{
									name: 'phone2',
									label: 'Telefon',
									type: 'text',
									required: false
								}
							]
						}
					]
				}
			]
		}
	]
};

export default KapcsolatOldal;
