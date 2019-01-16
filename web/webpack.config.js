const Path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Autoprefixer = require('autoprefixer');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const LessFunc = require('less-plugin-functions');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

const DevServer = require('./webpack.server.js');

let config = {
	entry: {
		main: Path.resolve(__dirname + '/src/index.ts'),
		lib: ['vue']
	},
	output: {
		path: Path.resolve(__dirname + '/build/'),
		filename: isProduction ? 'js/[name].min.js' : 'js/[name].js'
	},
	module: {
		rules: [
			{
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
			{
                test: /\.js$/,
                exclude: Path.resolve(__dirname, '/node_modules'),
                loader: 'babel-loader',
                options: {
                    "presets": ["@babel/preset-env"]
                }
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer')({
                                    browsers: ['last 5 versions']
                                })
                            ]
                        }
                    }, {
                        loader: 'less-loader',
                        options: {
                            plugins: [ new LessFunc() ]
                        }
                    }]
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jpg|\.png|\.jpeg|\.svg|\.ttf|\.woff$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './img',
                        publicPath: './img'
                    }
                }]
            }
		]
	},
	plugins: [
        new HtmlWebpackPlugin({
            title: '主页',
            filename: 'index.html',
            template: './index.html',
            inject: 'body',
            hash: true,
            chunks: ['main', 'lib'],
            minify: {
                removeComments: true, //移除HTML中的注释
                collapseWhitespace: true, //移除空白字符
                minifyJS: true, 
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true
            }
        }),
        Autoprefixer,
        new ExtractTextPlugin('[name].css'),
        new VueLoaderPlugin(),
        new CopyWebpackPlugin([{
            from: Path.resolve(__dirname, './build'),
            to: Path.resolve(__dirname, '../server/build'),
            toType: 'dir'
        }])
    ],
    devServer: isProduction ? '' : DevServer,
    resolve: {
        alias: {
            '@': Path.resolve(__dirname, 'src')
        },
        extensions: ['.js', '.ts', '.json', '.less', '.css']
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'lib',
                    chunks: 'all',
                    minChunks: 2
                }   
            }
        }
    }
}

module.exports = config;