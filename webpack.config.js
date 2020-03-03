const path = require('path');

const TerserPlugin = require('terser-webpack-plugin');

const MinifyPlugin = require("babel-minify-webpack-plugin");

const WRITE_DIR = path.resolve(__dirname, './');

const APP_DIR = path.resolve(__dirname, './');

module.exports = {
    optimization: {
        minimizer: [
            new TerserPlugin({
                cache: true,
                parallel: true,
                sourceMap: true, // Must be set to true if using source-maps in production
                terserOptions: {
                    ecma: undefined,
                    warnings: false,
                    parse: {},
                    compress: {},
                    mangle: true, // Note `mangle.properties` is `false` by default.
                    module: false,
                    output: null,
                    toplevel: false,
                    nameCache: null,
                    ie8: false,
                    keep_classnames: undefined,
                    keep_fnames: false,
                    safari10: false,
                }
            }),
        ],
        // Production
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    cache: false,
    entry: APP_DIR + '/index.jsx',
    mode: 'development',
    output: {
        path: WRITE_DIR,
        publicPath: WRITE_DIR,
        filename: '[name].bundle.v2.1.0.js',
        chunkFilename: '[name].bundle.v2.1.0.js',
        pathinfo: false
    },
    node: {
        dns: 'mock',
        net: 'mock'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
        ]
    },
    // Production
    plugins: [
        new MinifyPlugin()
    ]
};