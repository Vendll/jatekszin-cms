import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import seo from '@payloadcms/plugin-seo';
import BeforeDashboard from './components/BeforeDashboard';
import  Media  from './collections/Media';
import GaleriaKep from './collections/GaleriaKep';
import Eloadasok from './collections/Eloadasok';
import Munkatars from './collections/Munkatars';
import Szereplo from './collections/Szereplo';
import Kozremukodok from './collections/Kozremukodok';
import Musor from './collections/Musor';
import Kezdolap from './globals/Kezdolap';
import Menu from './globals/Menu';
import Hirek from './collections/Hirek';



const generateTitle = ({ doc }) => {
  return `${doc.title.value} - Játékszín`
}

const generateDescription = ({ doc }) => {
  return doc.description.value
}

const generateImage = ({ doc }) => {
  if (doc.hero.value) {
    return doc.hero.value
  }
  return doc.thumbnail.value
}


export default buildConfig({
  admin: {
    user: Users.slug,
    components: {
      // The BeforeDashboard component renders the 'welcome' block that you see after logging into your admin panel.
      // Feel free to delete this at any time. Simply remove the line below and the import BeforeDashboard statement on line 5.
      beforeDashboard: [BeforeDashboard],
    }
  },
  collections: [
    Users,
    Eloadasok,
    Munkatars,
    Szereplo,
    Kozremukodok,
    Musor,
    Media,
    GaleriaKep,
    Hirek,
  ],
  globals: [
    Menu,
    Kezdolap,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    seo({
    collections: ['eloadasok', 'hirek'],
    globals: ['kezdolap'],
    generateTitle,
    generateDescription,
    generateImage,
    generateURL: ({ doc }: any) => {
      console.log(doc);
      if (doc.fields.author) {
        console.log("Előadás");
        return `http://localhost:3000/eloadasok/${doc.fields.slug.value}`
      }
      else if (doc.fields.content) {
        console.log("Hír");
        return `http://localhost:3000/hirek/${doc.fields.slug.value}`
      }
      else if (doc.fields.heroes) {
        console.log("Kezdőlap");
        return `http://localhost:3000/`
      } else {
        console.log("Nincs ilyen collection");
      }
    },
    uploadsCollection: 'media',
    tabbedUI: true,
  }),
 ]
});
