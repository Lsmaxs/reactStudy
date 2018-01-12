/**
 * Created by Administrator on 2017/7/4.
 */
const path = require('path');
const HtmlWebpackP = require('html-webpack-plugin');
const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('../config');
const utils = require('./vendor/utils');
const baseWebpackConfig = require('./webpack.base');
const OpenBrowserP = require('open-browser-webpack-plugin');


function resolve(dir) {
    return path.resolve(__dirname,"../"+ dir);
}

Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    baseWebpackConfig.entry[name] = [
        'webpack/hot/only-dev-server',
        'react-hot-loader/patch'
    ].concat(baseWebpackConfig.entry[name])
})
module.exports = merge( baseWebpackConfig , {
    devtool: '#cheap-module-eval-source-map',
    output: {
        path: resolve("dist"),
        publicPath: './',
        filename: '[name].[hash].js'
    },
    module: {
        /*        rules: [
                     {
                        test: /\.css$/,
                        include: /src/,
                        use: ExtractTextP.extract({
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
                    }, {
                        test: /\.scss$/,
                        include: /src/,
                        use: ExtractTextP.extract({
                            fallback: "style-loader",
                            use: [  {loader: 'css-loader'},
                                    {
                                        loader: 'postcss-loader',
                                        options: {
                                            parser: "postcss-scss"
                                        }
                                    }
                                ]
                        })
                    }
                ]*/
      rules:[
           {
               test:/\.css$/,
               use:['style-loader','css-loader','postcss-loader']
           },
           {
               test:/\.scss$/,
               include: resolve('assets/scss'),
               use:[
                   'style-loader',
                   'css-loader',
                   "postcss-loader",
                   "sass-loader"
               ]
           },
           {
               test:/\.scss$/,
               include:resolve("src"),
               use:[
                   'style-loader',
                   {
                       loader:'css-loader',
                       options:{
                           modules:true,
                           localIdentName:'[name]__[local]___[hash:base64:5]'
                       }
                   },
                   "postcss-loader",
                   "sass-loader"
               ]
           }
       ]
    },
    devServer: {

    },
    plugins: [
        new HtmlWebpackP({
            title: "webpack dome",
            template: "src/index.html",
            inject: true
        }),
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename:'vendor.min.js',
            minChunks:4,
        }),
        new OpenBrowserP({
            url: "http://localhost:8011"
        })
    ]
})