/**
 * Created by Administrator on 2017/7/4.
 */
const path = require('path');
const HtmlWebpackP = require('html-webpack-plugin');
const webpack  = require('webpack');
const OpenBrowserP = require('open-browser-webpack-plugin');
const ExtractTextP = require('extract-text-webpack-plugin')


function resolve(dir) {
    return path.resolve(__dirname,dir);
}
module.exports = {
    entry:{
        index:[
            'react-hot-loader/patch',
            'webpack/hot/only-dev-server',
            resolve("src/index.js")
        ]
    },
    output: {
        path: resolve("dist"),
        publicPath: './',
        filename: '[name].[hash].js'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                use:"babel-loader"
            },{
                test:/\.css$/,
                include:/src/,
                use:ExtractTextP.extract({
                    fallback: [{
                        loader: 'style-loader',
                    }],
                    use: [{
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]',
                        },
                    }, {
                        loader: 'postcss-loader',
                    }]
                })
            },{
                test:/\.scss$/,
                include:/src/,
                use:ExtractTextP.extract({
                    fallback:"style-loader",
                    use:[{ loader:'css-loader'},
                        {loader:'postcss-loader',
                            options:{
                                parser:"postcss-scss"
                            }
                        }]
                })
            },{
                test:/\.(png|jpg|svg|gif|jpeg|bmp)$/i,
                use:[{
                    loader:'url-loader',
                    options:{
                        limit:5000,
                        name:'img/[name]-[hash:5].[ext]'
                    }
                }]
            },{
                test:/\.(woff2?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use:[{
                        loader:"url-loader",
                        options:{
                            limit:10000,
                            name:'fonts/[name]-[hash:5].[ext]'
                        }
                    },
                    'file-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js','.jsx','.scss','.css'],
        alias:{
            "src":resolve('src')
        }
    },
    // externals: {
    //     react: 'react',
    //     "react-dom": 'react-dom'
    // },
    devtool: 'cheap-module-source-map',
    devServer: {
        proxy:{},
        publicPath:"/",
        contentBase:resolve('dist'),
        // host: process.env.HOST,
        compress: true,
        port:8011,
        hot: true,
        noInfo: false,
        // inline: true,
        overlay: {
            errors: true,
            warnings: true,
        }
    },
    plugins:[
        new HtmlWebpackP({
            title:"webpack dome",
            template:"src/index.html"
        }),
        new ExtractTextP("css/[name].css"),
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserP({
            url:"http://localhost:8011"
        })
    ]
}