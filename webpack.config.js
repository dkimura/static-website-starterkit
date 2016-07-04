const webpack = require('webpack');
const path = require('path');

module.exports = {
  debug: true,
  entry: {
    app: [
      'webpack/hot/dev-server',
      'webpack-hot-middleware/client',
      './src/js/app.js',
    ],
  },
  output: {
    path: '/',
    filename: '[name].bundle.js',
    publicPath: 'http://localhost:3000/js/',
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: path.join(__dirname, './src/js'),
    }],
  },
};
