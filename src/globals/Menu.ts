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
		}
	]
};

export default Menu;
