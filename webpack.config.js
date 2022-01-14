const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const webpackMode = process.env.NODE_ENV || 'development';

module.exports = {
	mode: webpackMode,
	resolve: {
		extensions: ['.js', '.css', '.scss'],
		alias: {
		  '@': path.resolve(__dirname, 'src'),
		},
	},
	entry: {
		main: './src/app.js',
	},
	// es5로 빌드 해야 할 경우 주석 제거
	// 단, 이거 설정하면 webpack-dev-server 3번대 버전에서 live reloading 동작 안함
	// target: ['web', 'es5'],
	devServer: {
		liveReload: true
	},
	optimization: {
		minimizer: webpackMode === 'production' ? [
			new TerserPlugin({ //빌드할때 소스코드 압축해줌.
				terserOptions: {
					compress: {
						drop_console: true
					}
				}
			})
		] : [],
		splitChunks: { // 중복된 모듈을 없에는 옵션
			chunks: 'all' 
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{ // images loader
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/images/[name][ext]',
				},
			},
			{ // fonts loader
				test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
				type: 'asset/resource',
				generator: {
					filename: 'assets/fonts/[name][ext]',
				},
			},
			{  // css 또는 scss loader
				test: /\.s[ac]ss|css$/i,
				exclude: /node_modules/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			minify: process.env.NODE_ENV === 'production' ? {
				collapseWhitespace: true,
				removeComments: true,
			} : false
		}),
		new MiniCssExtractPlugin({
			filename: "assets/[name].min.css",
		}),
		new CleanWebpackPlugin()
	],
	output: {
		filename: 'assets/[name].min.js',
		path: path.resolve(__dirname, './dist/')
	},
};