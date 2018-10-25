const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  plugins: [
    new UglifyJSPlugin({
      uglifyOptions: {
        output: {
          comments: false
        }
      }
    }),
    new webpack.NormalModuleReplacementPlugin(/environment\.ts/, './environment.prod.ts')
  ]
});
