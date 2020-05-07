const webpack = require("webpack");


module.exports = {
    entry: './index.js',
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'index.js'
    },

    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery'
        })
    ]
}