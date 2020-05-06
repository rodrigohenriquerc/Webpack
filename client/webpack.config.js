const path = require('path');

module.exports = {
  // First module to be loaded.
  entry: './app-src/app.js',
  // Where the bundle will be recorded.
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
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
  }
}