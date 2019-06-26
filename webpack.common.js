const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  // mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [{loader: 'style-loader'}, {loader: 'css-loader'}],
      },
      {
        test: /\.(png|gif|jpe?g|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name]-[hash].[ext]',
            },
          },
        ],
      },
      {
        test: /\.module\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader', options: {modules: true, camelCase: true}},
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(svg)$/ /* dont want svg fonts from fonts folder to be included */,
        use: [
          {
            loader: 'svg-loader',
            options: {
              noquotes: true,
              name: 'svgs/[name]-[hash].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    modules: ['node_modules', path.join(__dirname, 'src'), 'shared'],
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
}
