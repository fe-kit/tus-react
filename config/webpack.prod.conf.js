const path = require('path');
const merge = require('webpack-merge');

const baseWebpackConf = require('./webpack.base.conf');
const { assetsPath } = require('./utils');

module.exports = merge(baseWebpackConf, {
  devtool: 'source-map',
  devServer: {
    contentBase: false, // 默认webpack-dev-server会为根文件夹提供本地服务器，如果想为另外一个目录下的文件提供本地服务器，应该在这里设置其所在目录
    historyApiFallback: true, // 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    compress: true, // 启用gzip压缩
    inline: true, // 设置为true，当源文件改变时会自动刷新页面
    hot: true, // 模块热更新，取决于HotModuleReplacementPlugin
    host: '127.0.0.1', // 设置默认监听域名，如果省略，默认为“localhost”
    port: 8080
  },
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
