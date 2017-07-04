/**
 * Created by Administrator on 2017/7/4.
 */
const path = require('path');
const HtmlWebpackG = require('html-webpack-plugin');

function resolve(dir) {
    return path.resolve(__dirname,dir);
}
module.exports = {
    entry:{
        index: resolve("src/index.js"),
    },
    output: {
        path: resolve("dist"),
        filename: '[name].[hash].js'
    },
    module:{
        rules:[

        ]
    },
    devtool: 'cheap-module-source-map',
    plugins:[
        new HtmlWebpackG({
            title:"webpack dome"
        })
    ]
}