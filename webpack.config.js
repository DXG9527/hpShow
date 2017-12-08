'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({debug = false} = {}) => {
    const plugins = [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(debug ? 'development' : 'production')
        }),
        new HtmlWebpackPlugin({
            title: '测试',
            template: 'src/index.html',
            chunks:['vue']
        }),
        new HtmlWebpackPlugin({
            title: 'wall',
            filename: 'wall.html',
            template: 'src/historyShow/wall.html',
            chunks:['wall']
        }),
        new HtmlWebpackPlugin({
            title: 'space',
            filename: 'space.html',
            template: 'src/historyShow/space.html',
            chunks:['space']
        })
    ];
    if (!debug) {
        plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: 'source-map',
                compress: {
                    warnings: false
                },
                output: {
                    comments: false
                }
            })
        );
    }

    return {
        target: 'web',
        devtool: 'source-map',
        entry: {
            vue: './src/main.js',
            wall: './src/app/app.js',
            space: './src/app/app.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: debug ? '[name].js' : '[name].min.js',
            publicPath: ''
        },
        plugins,
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                            // the "scss" and "sass" values for the lang attribute to the right configs here.
                            // other preprocessors should work out of the box, no loader config like this necessary.
                            'scss': 'vue-style-loader!css-loader!sass-loader',
                            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                            'less': 'vue-style-loader!css-loader!less-loader?indentedSyntax'
                        }
                        // other vue-loader options go here
                    }
                },
                {
                    test: /\.js$/,
                    include: [
                        path.resolve(__dirname, 'src')
                    ],
                    loader: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.(sass|scss)/,
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: false
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: false,
                                minimize: false,
                                outputStyle: 'expanded'
                            }
                        }
                    ]
                },
                {
                    test: /\.(less)/,
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: false
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'less-loader',
                            options: {
                                sourceMap: false,
                                minimize: false,
                                outputStyle: 'expanded'
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|jpg|jpeg|bmp|gif)$/,
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                },
                {
                    test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
                    loader: 'file-loader'
                },
                {
                    test: /\.(wav|mp3|aac|ogg|mp4)$/,
                    loader: 'file-loader'
                }
            ]
        },
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        },
        performance: {
            hints: false
        },
        devServer: {
            host: 'localhost',
            disableHostCheck: true
        }
    };
};
