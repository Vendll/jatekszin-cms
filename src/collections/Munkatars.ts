import { CollectionConfig } from 'payload/types';

const Munkatars: CollectionConfig = {
	slug: 'munkatars',
	labels: {
		singular: 'Munkatárs',
		plural: 'Munkatársak'
	},
	admin: {
		useAsTitle: 'name'
	},
	access: {
		read: () => true
	},
	fields: [
		{
			name: 'name',
			label: 'Név',
			type: 'text',
			required: true
		},
		{
			name: 'szinesz',
			label: 'Színész',
			type: 'checkbox'
		},
		{
			name: 'alkoto',
			label: 'Alkotók',
			type: 'checkbox'
		},
		{
			name: 'vezetoseg',
			label: 'Vezetőség',
			type: 'checkbox'
		},
		{
			name: 'kulsos',
			label: 'Külsős',
			type: 'checkbox'
		},
		{
			name: 'alkategoria',
			label: 'Alkategória',
			type: 'select',
			options: [
				{ label: 'Dalszövegírók, zeneszerzők', value: 'dalszovegiro' },
				{ label: 'Díszlettervezők', value: 'diszlettervezo' },
				{ label: 'Dramaturgok', value: 'dramaturg' },
				{ label: 'Jelmeztervezők', value: 'jelmeztervezo' },
				{ label: 'Karmesterek, zenészek', value: 'karmester' },
				{ label: 'Koreográfusok', value: 'koreografus' },
				{ label: 'Rendezők', value: 'rendezo' },
				{ label: 'Szövegírók, fordítók', value: 'szovegiro' },
				{ label: 'Világítástervezők', value: 'vilagitastervezo' },
				{ label: 'Művészeti ügykezelés', value: 'muvugykezeles' },
				{ label: 'Gazdasági munkatársak', value: 'gazdasagi' },
				{ label: 'Tájszervezés', value: 'tajszervezes' },
				{ label: 'Szervezés', value: 'szervezes' },
				{ label: 'Kommunikáció', value: 'kommunikacio' },
				{ label: 'Kellékesek', value: 'kellekes' },
				{ label: 'Műszaki vezetés', value: 'muszakivez' },
				{ label: 'Díszítők', value: 'diszito' },
				{ label: 'Fodrászat', value: 'fodraszat' },
				{ label: 'Öltöztetők', value: 'oltoztetok' },
				{ label: 'Világosítók', value: 'vilagosito' },
				{ label: 'Hangosítók', value: 'hangosito' },
				{ label: 'Büfé', value: 'bufe' },
				{ label: 'Portások', value: 'portasok' },
				{ label: 'Nézőtéri munkatársak', value: 'nezoterimunkatars' },
				{ label: 'Takarító', value: 'takarito' }
			]
		},
		{
			name: 'titulus',
			label: 'Titulus',
			type: 'text',
			required: false
		},
		{
			name: 'thumbnail',
			label: 'Kép',
			type: 'upload',
			relationTo: 'media',
			required: false
		}
	]
};

export default Munkatars;
