const path = require('path');
const merge = require('webpack-merge');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const baseWebpackConf = require('./webpack.base.conf');
const { assetsPath } = require('./utils');
if (process.env.npm_config_report) {
  baseWebpackConf.plugins.push(new BundleAnalyzerPlugin());
}
module.exports = merge(baseWebpackConf, {
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: assetsPath('js/[name]_[hash].js'),
    devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]'
  },
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
});
