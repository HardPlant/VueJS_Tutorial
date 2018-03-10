var webpack = require('webpack');
module.exports = {
    entry: {
        main: __dirname + '/src/index.js',
    },
    output: {
        path: __dirnames + '/public/dist/',
        filename: '[name].js',
        publicPath: '/dist'

    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_moudles/
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
}