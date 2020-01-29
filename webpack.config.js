const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { DuplicatesPlugin } = require("inspectpack/plugin");
const CopyPlugin = require('copy-webpack-plugin');

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
		new MiniCssExtractPlugin({ filename: "[name].css" }), // { filename: "[name].[contentHash].css" }
		new CopyPlugin([
			{ from: 'less/theme.less', to: 'less/theme.less' },
			{ from: 'less/common.less', to: 'less/common.less' },
			{ from: 'less/theme-atomlight.less', to: 'less/theme-atomlight.less' },
			{ from: 'less/theme-atomdark.less', to: 'less/theme-atomdark.less' },
			{ from: 'less/theme-atom.less', to: 'less/theme-atom.less' },
		]),
		//new DuplicatesPlugin({ emitErrors: true, verbose: true }),

	],
	entry: {
		'ractive-dynamodb-json-editor': path.resolve(__dirname, './src/dynamodb-json-editor.js'),
		'ractive-dynamodb-json-editor.min': path.resolve(__dirname, './src/dynamodb-json-editor.js')
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
				test: /\.less$/,
				use: [
					MiniCssExtractPlugin.loader, // extract css into files
					{
						loader: 'css-loader', // translates CSS into CommonJS
					},
					{
						loader: 'less-loader', // compiles Less to CSS
						// options: {
						//	paths: [path.resolve(__dirname, 'node_modules')],
						// 	strictMath: true,
						// 	noIeCompat: true,
						// },
					},
				],
			},




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
