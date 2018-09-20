## 珠峰课堂

## 安装依赖
- react react核心包
- react-dom DOM操作相关的包，作用是把组件渲染到页面上
- react-router-dom  处理路由，根据浏览器的路径不同渲染不同的组件
- babel-loader 加载器，可以在webpack打包的时候，把es6 es7 react转译成es5
- @babel/core babel的核心包
- @babel/preset-env  转es6/es7
- @babel/preset-react 转react
- redux 核心模块 createStore 
- react-redux connect Provider实现的是react和redux的连接
- redux-logger 处理日志的
- redux-promise 处理promise
- redux-thunk 处理函数的
- react-router-redux 把路由信息同步到仓库中
- style-loader 在页面中添加style标签
- css-loader 处理CSS中的import url 
- less-loader 把less编译成css
- less less编译的核心包
- url-loader 加载二进制文件 图片 图标
- webpack webpack核心包
- webpack-cli webpack的命令行工具
- webpack-dev-server 开发服务器
- express 提供HTTP服务器
- body-parser 处理请求体，把
- express-session 处理会话
- lodash 提供 一些工具方法，比如克隆 

```js
yarn add react react-dom react-router-dom  react-transition-group
yarn add  babel-loader @babel/core @babel/preset-env @babel/preset-react html-webpack-plugin
yarn add redux react-redux redux-logger redux-promise redux-thunk react-router-redux
yarn add  style-loader css-loader less-loader less url-loader
yarn add webpack webpack-cli webpack-dev-server
yarn add express body-parser express-session lodash
```

## 项目处理
保留二个文件，其它的全部删除
- node_modules
- package.json

## 新建webpack配置文件
webpack.config.js
```js
const path = require('path');
//webpack的配置文件
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',//加载器的名称
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    }
                ],
                //我要转译哪个目录下面的文件
                include: path.resolve('src'),
                //我要排除转译哪些目录的文件
                exclude: /node_modules/
            },
            {
                test: /\.less$/,//处理LESS
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.(jpg|png|gif)/,//处理图片
                use: ['url-loader']
            }
        ]
    }
}
```


## 跑通路由

### 目录划分
- index.js  入口文件
- containers 页面级组件
- components 可复用的木偶组件
- common 放一些资源文件公共样式，图片
- utils 放一些工具方法
