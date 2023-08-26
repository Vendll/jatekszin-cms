import { CollectionConfig } from 'payload/types';

const Kozremukodok: CollectionConfig = {
	slug: 'kozremukodok',
	labels: {
		singular: 'Közreműködő',
		plural: 'Közreműködők'
	},
	admin: {
		useAsTitle: 'pozicio'
	},
	access: {
		read: () => true
	},
	fields: [
		{
			name: 'munkatars',
			label: 'Munkatárs',
			type: 'relationship',
			relationTo: ['munkatars'],
			hasMany: false,
			admin: {
				allowCreate: true
			}
		},
		{
			name: 'pozicio',
			label: 'Pozíció',
			type: 'select',
			options: [
				{ label: 'Rendező', value: 'rendezo' },
				{ label: 'Dramaturg', value: 'dramaturg' },
				{ label: 'Díszlettervező', value: 'diszlettervezo' },
				{ label: 'Jelmeztervező', value: 'jelmeztervezo' },
				{ label: 'Díszlet- és jelmeztervező', value: 'diszlettervezo-jelmeztervezo' },
				{ label: 'Zenei vezető', value: 'zenei_vezeto' },
				{ label: 'Zeneszerző', value: 'zeneszerzo' },
				{ label: 'Koreográfus', value: 'koreografus' },
				{ label: 'Ügyelő', value: 'ugyelo' },
				{ label: 'Súgó', value: 'sugo' },
				{ label: 'Fénytervező', value: 'fenytervezo' },
				{ label: 'Hangmérnök', value: 'hangmernok' },
				{ label: 'Videó', value: 'video' },
				{ label: 'Rendezőasszisztens', value: 'rendezoasszisztens' },
				{ label: 'Dramaturgasszisztens', value: 'dramaturgasszisztens' },
				{ label: 'Fordító', value: 'fordito' },
				{ label: 'Alkotótárs', value: 'alkototars' },
				{ label: 'Világítástervező', value: 'vilagitastervezo' },
				{ label: 'Szakmai konzultáns', value: 'szakmai_konzultans' },
				{ label: 'Videógrafika', value: 'videografika' },
				{ label: 'Koreográfus', value: 'koreografus' },
				{ label: 'Dalszöveg', value: 'dalszoveg' },
				{ label: 'Konzultáns', value: 'konzultans' },
				{ label: 'Zene', value: 'zene' },
				{ label: 'Jelmez', value: 'jelmez' },
				{ label: 'Díszlet', value: 'diszlet' },
				{ label: 'Társastánc', value: 'tarstanc' },
				{ label: 'Szcenikus', value: 'szcenikus' },
				{ label: 'Konzultáns', value: 'konzultans' },
				{ label: 'Rendező munkatársa', value: 'rendezo_munkatarsa' },
				{ label: 'Társszerző', value: 'tarsszerzo' },
				{ label: 'Producer', value: 'producer' }
			],
			required: true
		}
	]
};

export default Kozremukodok;
