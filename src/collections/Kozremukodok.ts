import { CollectionConfig } from 'payload/types';

const Kozremukodok: CollectionConfig = {
  slug: 'kozremukodok',
  labels: {
    singular: 'Közreműködő',
    plural: 'Közreműködők',
    },
  admin: {
    useAsTitle: 'munkatars.name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
        name: 'munkatars',
        label: 'Munkatárs',
        type: 'relationship',
        relationTo: ['munkatars'],
        hasMany: false,
        admin: {
            allowCreate: true,
        },
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
            { label: 'Zenei vezető', value: 'zenei_vezeto' },
            { label: 'Koreográfus', value: 'koreografus' },
            { label: 'Ügyelő', value: 'ugyelo' },
            { label: 'Súgó', value: 'sugo' },
            { label: 'Fénytervező', value: 'fenytervezo' },
            { label: 'Hangmérnök', value: 'hangmernok' },
            { label: 'Videó', value: 'video' },
            { label: 'Rendezőasszisztens', value: 'rendezoasszisztens' },
            { label: 'Dramaturgasszisztens', value: 'dramaturgasszisztens' },
        ],
        required: true,
        },

  ],
};

export default Kozremukodok;