import { CollectionConfig } from 'payload/types';

const GaleriaKep: CollectionConfig = {
  slug: 'galeria-kep',
  labels: {
    singular: 'Munkatárs',
    plural: 'Munkatársak',
    },
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
        name: 'image',
        label: 'Kép',
        type: 'upload',
        relationTo: 'media',
        required: true,
    },
  ],
};

export default GaleriaKep;