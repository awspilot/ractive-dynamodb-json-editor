const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	node: false,
	mode: 'production',
	target: 'web',
	context: path.resolve(__dirname, 'src'),
	optimization: {
		minimize: true,
		minimizer: [new UglifyJsPlugin({
			include: /\.min\.js$/
		})]
	},
	plugins: [
	],
	entry: {
		'ractive-dynamodb-json-editor': path.resolve(__dirname, './src/dynamodb-json-editor.ractive.html'),
		'ractive-dynamodb-json-editor.min': path.resolve(__dirname, './src/dynamodb-json-editor.ractive.html')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js',
		library: 'ractive-dynamodb-json-editor',

		// var, this, window, umd
		libraryTarget: 'umd',
		libraryExport: 'default',
		umdNamedDefine: true   // Important
	},
	externals: {
		ractive: {
			commonjs: 'ractive',
			commonjs2: 'ractive',
			amd: 'ractive',
			root: 'Ractive'
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: 'babel-loader'
			},
			{
					test: /\.ractive\.html$/,
					use: 'babel-loader'
			},
			{
				test: /\.ractive\.html$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					{
						loader: 'ractive-bin-loader'
					}
				]
			}
		]
	}
}
