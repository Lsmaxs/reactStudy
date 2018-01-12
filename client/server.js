import webpack from "webpack"
import DevServer from "webpack-dev-server"
import config from "../webpack-config/webpack.dev.config"

new DevServer(webpack(config),{
    proxy: {},
    publicPath: "/",
    contentBase: resolve('dist'),
    // host: process.env.HOST,
    compress: true,
    port: 8011,
    hot: true,
    noInfo: false,
    inline: true,
    overlay: {
        errors: true,
        warnings: true,
    }
}).listen(8011,"localhost",function (err) {
    if (err) {
        console.log(err);
    }
    console.log(`Listening at `);
})