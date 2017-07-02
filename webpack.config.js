const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({debug = false} = {}) => {
    const plugins = [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(debug ? 'development' : 'production')
        }),
        new HtmlWebpackPlugin({
            title: '发展历史平台',
            template: 'src/app/index.html'
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
        entry: './src/app/app.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: debug ? 'bundle.js' : 'bundle.min.js',
            publicPath: ''
        },
        plugins,
        module: {
            rules: [
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
        performance: {
            hints: false
        },
        devServer: {
            host: 'localhost',
            disableHostCheck: true
        }
    };
};
