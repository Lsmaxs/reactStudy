module.exports = {
    //parser:'postcss-scss',
    plugins: {
        'precss': {},
        'autoprefixer': {
            browsers: ['ie >= 8', '> 1% in CN'],
        }
    }
}