const webpack = require( 'webpack' );
const path = require('path');
const fse = require('fs-extra');

fse.copySync('./src', './dist');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    'index': './area.vue',
    'dist/lib/areaData': './lib/areaData.js',
  },
  output: {
    path: path.resolve(__dirname),
    filename: '[name].js',
    library: 'VueThreeArea',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
            loader: 'babel-loader',
        }],
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: {
            loader: 'vue-loader'
        },
      },
      {
        test: /\.css$/,
        use: {
            loader: 'style!css'
        },
      }
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin( {
      minimize : true,
      sourceMap : false,
      mangle: true,
      compress: {
        warnings: false
      }
    } )
  ],
}
