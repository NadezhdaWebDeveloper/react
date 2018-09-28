const webpack = require("webpack");
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const autoprefixer = require('autoprefixer');

module.exports = {
    mode: "production", 

    entry: path.resolve(__dirname + "/src/index.js"),

    output: {
        path: path.resolve(__dirname + "/dist/assets"),
        filename: "bundle.js",
        sourceMapFilename: "bundle.map"
    },

    devtool: "#source-map",

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: [
                        "env",
                        "stage-0",
                        "react"
                    ]
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            sourceMap: true,
                            plugins: () => []
                        }
                    }
                ]
            }
        ]
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                sourceMap: true,
                uglifyOptions: {
                    warnings: false,
                    mangle: true, // Note `mangle.properties` is `false` by default.
                }
            })
        ]
    },

    // old version for minification. optimization - new version
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         sourceMap: true,
    //         warnings: false,
    //         mangle: true,
    //     }),
    // ]
}