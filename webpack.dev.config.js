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
        index: resolve("src/index.js"),
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
            }
        ]
    },
    resolve: {
        extensions: ['.js','.jsx','.scss','.css'],
        alias:{
            "src":resolve('src')
        }
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        proxy:{},
        publicPath:"/",
        contentBase:resolve('dist'),
        host: process.env.HOST,
        compress: true,
        port:8011,
        hot: true,
        noInfo: true,
        inline: true,
        overlay: {
            errors: true,
            warnings: true,
        },
    },
    plugins:[
        new HtmlWebpackP({
            title:"webpack dome"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserP({
            url:"http://localhost:8011"
        })
    ]
}