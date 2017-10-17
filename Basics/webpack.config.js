const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/' // url loader, (and other loaders) adds this before assests name to have correct url
  },
  module: {
    rules: [
      {
        test: /\.js$/, // use babel only on .js files
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        // we can apply css by js:
        // use: ['style-loader', 'css-loader'], // loaders are applied from right (first) to left (last)
        // or we can use plugin to take all imported css and merge them into one file:
        loader: ExtractTextPlugin.extract({
          loader: 'css-loader'
        })
      },
      {
        test: /\.(jpe?g|png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: { limit: 40000 }
          },
          'image-webpack-loader'
        ]
      }
    ]
  },
  plugins: [new ExtractTextPlugin('style.css')]
};

module.exports = config;
