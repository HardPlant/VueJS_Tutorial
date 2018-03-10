var webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: {
        main: __dirname + '/src/index.js',
    },
    output: {
        path: __dirname + '/public/dist/',
        filename: '[name].js',
        publicPath: '/dist'

    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    plugins: [],
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                cache: true,
                parallel: true,
                uglifyOptions: {
                    compress: false,
                    emca: 6,
                    mangle: true
                },
                sourceMap: true
            }),
        ],
    },
    devServer: {
        contentBase: './public',
        port: 3000,
        historyApiFallback: true
    }
}