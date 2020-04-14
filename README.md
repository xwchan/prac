# 版本
- node@v12.16.2 / npm@v6.14.4
- webpack 4.42.1


# 初始化项目
1. npm init
2. 生成package.json文件
```
package.json 初始化
{
  "name": "prac",
  "version": "1.0.0",
  "description": "This is a practice project to build front-end engineering.",
  "main": index.js,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "zxw",
  "license": "ISC",
  "devDependencies": {},
  "dependencies": {}
}
```

# 安装webpack

👉 https://www.webpackjs.com/guides/installation/

1. npm install --save-dev webpack-cli
  - webpack 4+需要先安装webpack-cli
2. npm install --save-dev webpack
3. 创建webpack配置文件 webpack.config.js
  - npx webpack --config webpack.config.js === webpack
  - 运行上述两种命令都可以打包js

# 配置git
1. 在项目根目录下 git init 生成.git文件
2. 创建 .gitignore 文件，声明不必添加到版本管理的文件


# 代码结构
prac
  |- package.json   # 项目配置信息
  |- /dist          # 分发代码（构建过程产生的代码最小化和优化后的“输出”目录）
    |- index.html     # 页面入口
    |- main.js        # 入口文件
  |- /src           # 源代码
    |- index.js       # 入口文件


# 备注
## 关于 devDependencies 和 dependencies
- devDependencies
  - 生产环境的依赖关系，使用 npm install --save 命令安装依赖包
- dependencies
  - 开发环境的依赖关系，使用 npm install --save-dev 命令安装依赖包