import { CollectionConfig } from 'payload/types';

const Szereplo: CollectionConfig = {
  slug: 'szereplo',
  labels: {
    singular: 'Szereplő',
    plural: 'Szereplők',
    },
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
        name: 'szinesz',
        label: 'Színész',
        type: 'relationship',
        relationTo: ['munkatars'],
        hasMany: false,
        admin: {
            allowCreate: true,
        },
        filterOptions: ({ relationTo }) => {
            // returns a Where query dynamically by the type of relationship
            
            if (relationTo === "munkatars") {
              return {
                szinesz: { equals: true },
              };
            }
          },
        },
    {
        name: 'name',
        label: 'Név',
        type: 'text',
        required: true,
        },
  ],
};

export default Szereplo;