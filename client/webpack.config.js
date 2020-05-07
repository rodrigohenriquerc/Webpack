const path = require('path');
const babiliPlugin = require('babili-webpack-plugin');

let plugins = [];

if (process.env.NODE_ENV === 'production') {
  plugins.push(new babiliPlugin());
}

module.exports = {
  // First module to be loaded.
  entry: './app-src/app.js',
  // Where the bundle will be recorded.
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins
}