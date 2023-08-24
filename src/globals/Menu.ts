import { GlobalConfig } from 'payload/types';

const Menu: GlobalConfig = {
	slug: 'menu',
	label: 'Menü',
	access: {
		read: () => true
	},
	fields: [
		{
			name: 'navItems',
			label: 'Menüpontok',
			type: 'array',
			fields: [
				{
					name: 'title',
					label: 'Cím',
					type: 'text',
					required: true
				},
				{
					name: 'link',
					label: 'Link',
					type: 'text',
					required: true
				}
			]
		},
		{
			name: 'facebookLink',
			label: 'Facebook link',
			type: 'text',
			required: true
		},
		{
			name: 'instagramLink',
			label: 'Instagram link',
			type: 'text',
			required: true
		},
		{
			name: 'youtubeLink',
			label: 'Youtube link',
			type: 'text',
			required: true
		},
		{
			name: 'tiktokLink',
			label: 'TikTok link',
			type: 'text',
			required: true
		},
		{
			name: 'youtubeLink',
			label: 'YouTube link',
			type: 'text',
			required: true
		},
		{
			name: 'jegyLink',
			label: 'Jegy link',
			type: 'text',
			required: true
		}
	]
};

export default Menu;
