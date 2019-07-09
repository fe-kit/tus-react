const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { assetsPath } = require('./utils');

const argv = require('minimist')(process.argv.slice(2));
const { mode = 'development' } = argv;

module.exports = {
  mode,
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: assetsPath('js/[name]_[hash].js'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          // { loader: 'style-loader' },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [require('autoprefixer')]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/html/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: assetsPath('css/[contenthash].css'),
      allChunks: true
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: [
          'default',
          {
            discardComments: {
              removeAll: true
            }
          }
        ]
      },
      canPrint: true
    }),
    new BundleAnalyzerPlugin(),
    new ManifestPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  optimization: {
    nodeEnv: 'production',
    runtimeChunk: 'single',
    splitChunks: {
      minSize: 1,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: false,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-redux|redux|react-router-dom|redux-actions|redux-thunk)/,
          name: 'vendors',
          reuseExistingChunk: true,
          chunks: 'initial',
          priority: 3
        },
        vendorAsync: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendorAsync',
          reuseExistingChunk: true,
          chunks: 'async',
          priority: 2
        },
        commons: {
          name: 'commons',
          reuseExistingChunk: true,
          // minChunks: 2,
          chunks: 'initial',
          priority: 1
        }
      },
      chunks: 'all'
    }
  }
};
