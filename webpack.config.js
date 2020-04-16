const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 自动合成index.html
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // 构建时先清除输出文件夹
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true,
    host: 'localhost',
    port: 5000
  },
  module: {
    rules: [
      {
        test: /.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /.(csv|tsv)$/,
        use: ['csv-loader']
      },
      {
        test: /.xml$/,
        use: ['xml-loader']
      },
      {
        test: /.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: "production",   // 压缩输出
};

