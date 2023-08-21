import { GlobalConfig } from "payload/types";

const Kezdolap: GlobalConfig = {
  slug: "kezdolap",
  label: "Kezdőlap",
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
                type: 'relationship',
                relationTo: ['eloadasok', 'hirek'],
                validate: async (value, { operation }) => {
                  console.log(operation);
                  
                  if (value) {
                    let resp;
                    if (value[0].relationTo === 'eloadasok') {
                      resp = await fetch(`http://localhost:3000/api/eloadasok/${value[0].value}`)
                    } else if (value[0].relationTo === 'hirek') {
                      resp = await fetch(`http://localhost:3000/api/hirek/${value[0].value}`)
                    } else {
                      return "Nem megfelelő collection: " + value[0].collection
                    }
                    const { hero, heroMobile } = await resp.json();
                    if (!hero || !heroMobile) {
                      return "Nincs hero és/vagy mobil hero kép"
                    }
                }
                },
                required: true,
                hasMany: true,
            },
            {
              name: 'kiemelt',
              label: 'Kiemelt előadások',
              type: 'relationship',
              relationTo: ['eloadasok'],
              required: true,
              hasMany: true,
          },
        ]
      },
    ]

   }
  ]
};

export default Kezdolap;