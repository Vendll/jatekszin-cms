import path from 'path';
import type { CollectionConfig } from 'payload/types';

export const Videos: CollectionConfig = {
	slug: 'videos',
	labels: {
		singular: 'Video',
		plural: 'Videók'
	},
	upload: {
		staticDir: path.resolve(__dirname, '../../videos')
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

export default Videos;
