const path = require('path');
const webpack = require('webpack')
const merge = require('webpack-merge');
const TerserJSPlugin = require('terser-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntriesPlugin = require("webpack-fix-style-only-entries");
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");
const VENDOR_LIBS = [
    "bootstrap",
/*"font-awesome",*/
    "imagesloaded",
    "jquery",
    "owl.carousel",
    "react",
    "react-dom"];

module.exports = {
    entry: {
        bundle: './src/main.js',
        vendor: VENDOR_LIBS
        /*anwsome:'font-awesome/scss/font-awesome.scss'*/
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: '[name].js'
    },
    devServer: {
        inline: true,
        port: 3000
    },

    // optimization: {
    //     minimizer: [
    //       new UglifyJsPlugin({
    //        }),
    //       new OptimizeCSSAssetsPlugin({})
    //     ]
    //   },
      
    //optimization:{
    //    mergeDuplicateChunks:true
    //},
    // optimization: {
    //     splitChunks: {
    //       chunks: 'all',
    //       cacheGroups: {
    //         styles: {
    //           name: 'styles',
    //           test: /\.s?css$/,
    //           chunks: 'all',
    //           minChunks: 1,
    //           reuseExistingChunk: true,
    //           enforce: true,
    //         },
    //       }
    //     },
    //     mergeDuplicateChunks: true,
    // },
    // optimization: {
    //     minimizer: [new OptimizeCSSAssetsPlugin({})]
    //   },
    module: {
        rules: [   {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
            }
          },
            // CSS Files
            {
                test: /\.css$/,
                use: [
                   MiniCssExtractPlugin.loader,
                    'css-loader'                  ]},
                
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: "file-loader",
                options: {
                    name: '[path][name].[ext]',
                   // Output into parent folder's directory
                     outputPath: url => url.slice(url.indexOf('/') + 1)
                  }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: 'assets/media/[name].[hash:7].[ext]'
                }
              },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'assets/fonts/[name].[hash:7].[ext]'
                }
            },
          

            // Bootstrap 4
            {
                test: /bootstrap\/dist\/js\/umd\//, use: 'imports-loader?jQuery=jquery'
            }
        ]
    },
    plugins: [


        new HtmlWebpackPlugin({
            template: './src/index.html'
        },
       
        new FixStyleOnlyEntriesPlugin(), 
        new webpack.ProvidePlugin({$: 'jquery', jquery: 'jquery', jQuery: 'jquery'})    ),
        new MiniCssExtractPlugin({
            filename: 'style.webpack.css'
          }),
        
    
    ]
}