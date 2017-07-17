const path = require('path');
const webpack = require('webpack');

module.exports = {

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            include: path.join(__dirname, 'src')
        }]
    },

    entry: [
        'webpack-dev-server/client',
        'webpack/hot/only-dev-server',
        './src/index'
    ],

    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'dist')
    },

    devtool: "inline-source-map",

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        host: "0.0.0.0",

        // open: true,
        historyApiFallback: true,
        // inline: true,
        // hot: true, // Tell the dev-server we're using HMR
        watchOptions: {
            // aggregateTimeout: 300,
            // poll: 1000,
            ignored: /node_modules/,
            poll: true
        }

    },

    plugins: [
        new webpack.HotModuleReplacementPlugin() // Enable HMR
    ],


};
