import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import { payloadCloud } from '@payloadcms/plugin-cloud';
import BeforeDashboard from './components/BeforeDashboard';
import  Media  from './collections/Media';
import GaleriaKep from './collections/GaleriaKep';
import Eloadasok from './collections/Eloadasok';
import Munkatars from './collections/Munkatars';
import Szereplo from './collections/Szereplo';
import Kozremukodok from './collections/Kozremukodok';
import Musor from './collections/Musor';

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
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    payloadCloud()
  ]
});
