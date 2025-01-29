const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: process.env.NODE_ENV,
    entry: './index.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    devServer: {
        static: './dist',
        hot: isDev,
    },
    devtool: isDev ? 'eval-source-map' : 'source-map',
    plugins: [
        new HTMLWebpackPlugin({
            title: 'CPS',
            template: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css',
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: path.resolve(__dirname, 'src', 'images'),
                to: path.resolve(__dirname, 'dist', 'images'),
            }]
        }),
        new ESLintPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use:
                    [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        [
                                            'postcss-preset-env',
                                        ],
                                    ]
                                },
                            },
                        },
                        'sass-loader',
                    ],
            },
            {
                test: /\.(eot|ttf|woff)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'fonts/[name][ext]',
                },
            },
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        targets: "defaults",
                        presets: [
                            ['@babel/preset-env']
                        ]
                    }
                }
            },
        ],
    },
    optimization: {
        minimizer: [
            new HtmlMinimizerPlugin(),
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ],
    }
}