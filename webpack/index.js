var path = require('path');
var webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const reScript = /\.(js|jsx|mjs)$/;
const reStyle = /\.(css|less|styl|scss|sass|sss)$/;
const staticAssetName = '[name].[ext]';

module.exports = (_env, argv) => {
  const isDebug = argv.mode !== 'production';

  const config = {
    context: path.resolve(__dirname, '../src'),
    name: 'client',
    target: 'web',
    entry: {
      client: [
        './main.js'
      ]
    },
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: 'js/[name].js'
    },
    module: {
      strictExportPresence: true,
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        // Rules for Style Sheets
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: isDebug
              }
            },
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: isDebug,
                modules: {
                  localIdentName: isDebug
                    ? '[name]-[local]-[hash:base64:5]'
                    : '[hash:base64:5]'
                },
                localsConvention: 'dashes'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: './postcss.config.js'
                }
              }
            }
          ]
        },
        // DO NOT FORGET to update `exclude` list when you adding a new loader
        {
          exclude: [
            reScript,
            reStyle,
            /\.ico$/,
            /\.png$/,
            /\.jpg$/,
            /\.json$/,
            /\.txt$/,
            /\.md$/,
            /\.html$/,
            /\.ejs$/,
            /\.vue$/
          ],
          loader: 'file-loader',
          options: {
            name: staticAssetName
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        title: 'Starter kit vue.js',
        inject: true,
        minify: false,
        template: path.resolve(__dirname, '../src/index.html')
      }),
      new CopyWebpackPlugin([
        {
          from: './assets',
          to: './assets'
        }
      ]),
      new MiniCssExtractPlugin({
        filename: 'css/[name].css',
        chunkFilename: 'css/[name].chunk.css'
      })
    ],
    resolve: {
      modules: ['../node_modules', '../src'],
      alias: {
        '@': path.resolve(__dirname, '../src'),
        vue$: 'vue/dist/vue.esm.js',
        Config: path.resolve(__dirname, '../src/config.js'),
        Utils: path.resolve(__dirname, '../src/utils'),
        Components: path.resolve(__dirname, '../src/components')

      },
      extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
      contentBase: path.join(__dirname, '../dist'),
      host: '0.0.0.0',
      historyApiFallback: true,
      useLocalIp: true,
      inline: true,
      port: 5002,
      hot: true,
      disableHostCheck: false,
      writeToDisk: true
    },
    performance: {
      hints: false
    },
    devtool: isDebug ? 'source-map' : undefined
  };

  if (isDebug) {
    config.plugins.push(
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.NamedModulesPlugin()
    );
  }

  return config;
};
