import path from 'path';
import type { CollectionConfig } from 'payload/types';

export const Files: CollectionConfig = {
	slug: 'files',
	labels: {
		singular: 'File',
		plural: 'File-ok'
	},
	upload: {
		staticDir: path.resolve(__dirname, '../../files')
	},
	access: {
		read: () => true
	},
	fields: [
		{
			name: 'name',
			type: 'text',
			required: true
		}
	]
};

export default Files;
