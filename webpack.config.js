const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',  // 输出的“入口文件”
    path: path.resolve(__dirname, 'dist')
  }
};

