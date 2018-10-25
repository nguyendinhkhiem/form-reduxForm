const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
  filename: 'app.css'
});

if (process.env.NODE_ENV === 'production') {
}

module.exports = {
  entry: { app: ['./src/app.tsx', './scss/app.scss'] },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules|dist|lib/
      },
      {
        test: /\.tsx$/,
        use: 'awesome-typescript-loader',
        exclude: /node_modules|dist|lib/
      },
      {
        test: /\.css$/,
        use: extractPlugin.extract({
          use: [`css-loader`]
        }),
        exclude: /node_modules|dist|lib/
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: [`css-loader`, `sass-loader`]
        }),
        exclude: /node_modules|dist|lib/
      },
      {
        test: /\.html$/,
        use: { loader: 'raw-loader' },
        exclude: /node_modules|dist|lib/
      },
      {
        test: /\.(jpg|png|gif|jpeg|svg|bmp)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: ''
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|otf|woff|svg|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              publicPath: ''
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [new webpack.ProvidePlugin({}), extractPlugin, new CopyWebpackPlugin([{ from: './assets', to: './assets' }]), new CleanWebpackPlugin(['dist'])]
};
