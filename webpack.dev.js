const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    //  contentBase: './dist',
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public/'),
    port: 4000,
    publicPath: 'http://localhost:4000/dist/',
    hotOnly: true,
  },
})
