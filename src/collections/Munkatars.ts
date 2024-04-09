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
		{ label: 'Dalszövegírók, zeneszerzők', name: 'dalszovegiro', type: 'checkbox' },
		{ label: 'Díszlettervezők', name: 'diszlettervezo', type: 'checkbox' },
		{ label: 'Dramaturgok', name: 'dramaturg', type: 'checkbox' },
		{ label: 'Jelmeztervezők', name: 'jelmeztervezo', type: 'checkbox' },
		{ label: 'Karmesterek, zenészek', name: 'karmester', type: 'checkbox' },
		{ label: 'Koreográfusok', name: 'koreografus', type: 'checkbox' },
		{ label: 'Rendezők', name: 'rendezo', type: 'checkbox' },
		{ label: 'Szövegírók, fordítók', name: 'szovegiro', type: 'checkbox' },
		{ label: 'Világítástervezők', name: 'vilagitastervezo', type: 'checkbox' },
		{ label: 'Művészeti ügykezelés', name: 'muvugykezeles', type: 'checkbox' },
		{ label: 'Gazdasági munkatársak', name: 'gazdasagi', type: 'checkbox' },
		{ label: 'Tájszervezés', name: 'tajszervezes', type: 'checkbox' },
		{ label: 'Szervezés', name: 'szervezes', type: 'checkbox' },
		{ label: 'Kommunikáció', name: 'kommunikacio', type: 'checkbox' },
		{ label: 'Kellékesek', name: 'kellekes', type: 'checkbox' },
		{ label: 'Műszaki vezetés', name: 'muszakivez', type: 'checkbox' },
		{ label: 'Díszítők', name: 'diszito', type: 'checkbox' },
		{ label: 'Fodrászat', name: 'fodraszat', type: 'checkbox' },
		{ label: 'Öltöztetők', name: 'oltoztetok', type: 'checkbox' },
		{ label: 'Világosítók', name: 'vilagosito', type: 'checkbox' },
		{ label: 'Hangosítók', name: 'hangosito', type: 'checkbox' },
		{ label: 'Büfé', name: 'bufe', type: 'checkbox' },
		{ label: 'Portások', name: 'portasok', type: 'checkbox' },
		{ label: 'Nézőtéri munkatársak', name: 'nezoterimunkatars', type: 'checkbox' },
		{ label: 'Takarító', name: 'takarito', type: 'checkbox' },
		{ label: 'Vizuál', name: 'vizual', type: 'checkbox' },
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
