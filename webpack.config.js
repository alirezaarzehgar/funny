const HtmlWebpackPlugin = require('html-webpack-plugin');
const Handlebars = require('handlebars');
const path = require('path');

module.exports = {
    entry: {
        index: "./src/main.js",
    },
    output: {
        path: path.resolve(__dirname, "public"),
        filename: "[name].js",
    },
    devServer: {
        index: "index.html",
        port: 8000,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "My App",
            scriptLoading: "blocking",
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.fun$/,
                loader: 'html-loader',
            },
        ],
    }
}