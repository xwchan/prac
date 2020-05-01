# 环境
- node@v12.16.2 / npm@v6.14.4
- webpack@4.42.1
- vue@2.6.11


# 初始化项目
1. npm init
2. 生成package.json文件
    + devDependencies
      - 开发环境: npm install --save-dev
    + dependencies
      - 生产环境: npm install --save

# 安装webpack

👉 https://www.webpackjs.com/guides/installation/

1. npm install --save-dev webpack-cli
    - webpack 4+需要先安装webpack-cli
2. npm install --save-dev webpack
3. 配置文件 webpack.config.js
    - npx webpack --config webpack.config.js
    - webpack
    - 运行上述两种命令都可以打包js
    - 详细配置见webpack文档

4. 注意
    + clean-webpack-plugin这个插件webpack文档的引入方式有误，最新正确引入方式为
      - const {CleanWebpackPlugin} = require('clean-webpack-plugin');

    + webpack只认识js和json文件，需要加入loaders识别各种文件，在module > rules中设置，test定义文件类型，use定义使用哪个loader去加载文件。webpack文档有误 例如：/\.css$/中‘.’无须转义，正确方式如下
      - test: /.css$/

    + .vue文件，需要安装less、less-loader、css-loader、vue-style-loader、style-loader 

# 配置git
1. 在项目根目录下 git init 生成.git文件
2. 创建 .gitignore 文件，声明不必添加到版本管理的文件

# 代码结构
```

prac
  |---- package.json          # 项目配置信息
  |---- webpack.config.js     # webpack配置文件
  |---- dist                  # 分发代码（构建过程产生的代码最小化和优化后的“输出”目录）
  |---- node_modules          # 依赖包
  |---- src                   # 源代码
    |---- 

```

# 兼容浏览器范围
- chrome