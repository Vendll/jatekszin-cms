import { GlobalConfig } from 'payload/types';

const KepEsHangPage: GlobalConfig = {
	slug: 'kep-es-hang-oldal',
	label: 'Kép és Hangfelvétel oldal',
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
							name: 'files',
							label: 'Fájlok',
							type: 'array',
							fields: [
								{
									name: 'title',
									label: 'Cím',
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
						}
					]
				}
			]
		}
	]
};

export default KepEsHangPage;
