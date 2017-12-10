const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: __dirname,
    filename: "main.js"
  },
  node: {
    __dirname: false
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        query: {
          presets: [ 'env' ]
        }
      }
    ]
  },
  target: "electron-main"
};