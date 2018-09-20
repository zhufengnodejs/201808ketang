const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
}