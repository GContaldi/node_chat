const path = require('path');

const BASE_PATH = __dirname;
const APP_FOLDER_NAME = 'src/app';
const ASSETS_FOLDER_NAME = 'assets';

module.exports = {
  entry: path.resolve(BASE_PATH, APP_FOLDER_NAME, 'index'),
  output: {
    path: path.resolve(BASE_PATH, ASSETS_FOLDER_NAME),
    filename: 'client.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve(BASE_PATH, APP_FOLDER_NAME)
        ]
      }
    ]
  }
};
