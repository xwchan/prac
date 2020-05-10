const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 打包输出HTML文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); // 构建时先清除bundle文件夹
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const marked = require("marked"); // markdown-loader依赖
const markdownRenderer = new marked.Renderer();

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/main.js'), //入口文件
  devtool: 'inline-source-map', //报错可提示源文件
  devServer: {  // webpack-dev-server配置项
    contentBase: './dist',
    hot: true,  // 热更新
    host: 'localhost',
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            cacheDirectory: true
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.md$/,
        use: [
          {
              loader: "html-loader"
          },
          {
              loader: "markdown-loader",
              options: {
                  markdownRenderer
              }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader','style-loader','css-loader']
      },
      {
        test: /\.less$/,
        use: ['vue-style-loader','style-loader','css-loader','less-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '笔记',
      meta: {
        viewport: 'width=device-width, initial-scale=1.0'
      },
      minify: {
        removeComments: true, //移除注释
        collapseWhitespace: true, //删除空白符与换行符
        minifyCSS: true,  //压缩内联CSS
        minifyJS: true, //压缩内联JS
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin()
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};

