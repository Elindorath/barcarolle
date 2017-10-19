const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-source-map',
  entry  : './main.js',
  output : {
    filename  : 'bundle.js',
    path      : path.resolve(__dirname, 'dist/'),
    publicPath: 'dist/',
  },
  module: {
    rules: [
      { test: /\.(jpg|jpeg|png)$/, use: 'file-loader' },
      { test: /\.(eot|svg|ttf|woff|woff2)$/, use: 'file-loader' },
      {
        test: /\.(css)$/,
        // use : [
        //   'style-loader',
        //   {
        //     loader : 'css-loader',
        //     options: {
        //       sourceMap: true,
        //       url      : false,
        //     },
        //   }
        // ],
        use : ExtractTextPlugin.extract({
          fallback  : 'style-loader',
          use       : 'css-loader',
          publicPath: '../dist/',
        }),
      },
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin(),
    new ExtractTextPlugin('styles.css'),
  ]
};
