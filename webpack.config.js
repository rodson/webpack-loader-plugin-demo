import path from 'path';
import MyPlugin from './src/plugins/my-plugin2.js';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: [
		new MyPlugin()
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				use: [
					{
						loader: path.resolve('./src/loaders/my-loader.js')
					},
					{
						loader: path.resolve('./src/loaders/my-async-loader.js')
					}
				]
			}
		]
	}
}
