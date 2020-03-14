const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const PATHS = {
  src: path.join(__dirname, '../src/index.js'),
  dist: path.join(__dirname, '../dist'),
}
module.exports = () => ({
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React
    'webpack-dev-server/client?http://localhost:7070',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    PATHS.src,
    // the entry point of our app
  ],
  devtool: 'cheap-source-map',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
    new webpack.NoEmitOnErrorsPlugin(),
    // do not emit compiled assets that include errors
  ],
  devServer: {
    compress: true,
    host: 'localhost',
    port: 7070,
    contentBase: PATHS.dist,
    publicPath: 'http://localhost:7070/',
    historyApiFallback: true,
    // respond to 404s with index.html
    hot: true,
    watchContentBase: true,
    stats: {colors: true, chunks: true},
    // enable HMR on the server
    // open the browser when start server
    open: true,
    inline: true,
    watchOptions: {
      ignored: /node_modules/,
    },
    overlay: {
      warnings: true,
      errors: true,
    },
  },
})
