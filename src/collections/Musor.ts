import { CollectionConfig } from 'payload/types';

const Musor: CollectionConfig = {
  slug: 'musor',
  labels: {
    singular: 'Műsor',
    plural: 'Műsorok',
    },
  admin: {
    useAsTitle: 'date',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
        name: 'date',
        label: 'Dátum',
        type: 'date',
        required: true,
        admin: {
            date: {
                pickerAppearance: 'dayAndTime'
            },
        },
        },
  ],
};

export default Musor;