const path = require("path");
const utils = require("./vendor/utils");
const config = require("../config")

function resolve(dir){
    return path.join(__dirname,"..",dir);
}

const baseConfig = {
    entry:{
        /*vendor:[
            'babel-polyfill','react-fastclick',
        ],*/
        bundle:[
            resolve('src/entry.js')
        ]
    },
    output:{
        path: config.build.assetsRoot,
        filename: 'bundle.min.js',
        publicPath:  process.env.NODE_ENV === 'production'
            ? config.build.assetsPublicPath
            : config.dev.assetsPublicPath,
    },
    resolve: {
        modules: ['node_modules'],
        extensions: ['.web.js', '.js', '.jsx', '.json','.scss'],
        alias:{
            "src":resolve('src')
        }
    },
    module:{
        rules:[
           /* {
                test: /\.(js|jsx)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src'), resolve('test')],
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },*/
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    }
}

module.exports =  baseConfig;