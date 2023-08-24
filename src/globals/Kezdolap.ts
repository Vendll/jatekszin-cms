import { GlobalConfig } from 'payload/types';

const Kezdolap: GlobalConfig = {
	slug: 'kezdolap',
	label: 'Kezdőlap',
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
							name: 'heroes',
							label: 'Hero képek',
							type: 'array',
							fields: [
								{
									name: 'hero',
									label: 'Hero képek',
									type: 'relationship',
									relationTo: ['eloadasok', 'hirek'],
									validate: async (value, { operation }) => {
										console.log(process.env.NODE_ENV);

										if (value) {
											let resp;
											if (value.relationTo === 'eloadasok') {
												console.log(
													`${
														process.env.NODE_ENV === 'development'
															? 'http://localhost:3000'
															: 'https://admin.jatekszin.hu'
													}/api/eloadasok/${value.value}`
												);
												resp = await fetch(
													`${
														process.env.NODE_ENV === 'development'
															? 'http://localhost:3000'
															: 'https://admin.jatekszin.hu'
													}/api/eloadasok/${value.value}`
												);
											} else if (value.relationTo === 'hirek') {
												resp = await fetch(
													`${
														process.env.NODE_ENV === 'development'
															? 'http://localhost:3000'
															: 'https://admin.jatekszin.hu'
													}/api/hirek/${value.value}`
												);
											} else {
												return 'Nem megfelelő collection: ' + value[0].collection;
											}
											const { hero, heroMobile } = await resp.json();
											if (!hero || !heroMobile) {
												return 'Nincs hero és/vagy mobil hero kép';
											} else {
												console.log('ok');
											}
										}
									},
									required: true
								},
								{
									name: 'position',
									label: 'Pozíció',
									type: 'select',
									options: [
										{ label: 'Bal felül', value: 'left-top' },
										{ label: 'Bal középen', value: 'left-middle' },
										{ label: 'Bal alul', value: 'left-bottom' },
										{ label: 'Jobb felül', value: 'right-top' },
										{ label: 'Jobb középen', value: 'right-middle' },
										{ label: 'Jobb alul', value: 'right-bottom' },
										{ label: 'Középen', value: 'middle' },
										{ label: 'Középen felül', value: 'top-middle' },
										{ label: 'Középen alul', value: 'bottom-middle' }
									]
								},
								{
									name: 'szin',
									label: 'Szín',
									type: 'select',
									options: [
										{ label: 'Piros', value: 'piros' },
										{ label: 'Kék', value: 'kek' }
									],
									defaultValue: 'piros'
								}
							]
						},
						{
							name: 'kiemelt',
							label: 'Kiemelt előadások',
							type: 'relationship',
							relationTo: ['eloadasok'],
							required: true,
							hasMany: true
						}
					]
				}
			]
		}
	]
};

export default Kezdolap;
