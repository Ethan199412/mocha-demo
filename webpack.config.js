// const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const bodyParser = require('body-parser');

const CWD = process.cwd();
console.log('CWD', CWD)
const resolvePath = (relativePath) => path.resolve(CWD, relativePath);

module.exports = {
    mode: 'development',
    entry: resolvePath('./test/index.test.js'),
    output: {
        path: resolvePath('./dist/'),
        filename: 'bundle.js',
        clean: true
    },
    devtool: false,
    devServer: {
        host: '0.0.0.0',
        port: 3006,
        // contentBase: resolvePath('./__tests__/compatible')
        static: {
            directory: resolvePath('./')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: resolvePath('./__tests__/compatible/index.html'),
    //         title: 'development',
    //         inject: true
    //     })
    // ]
}


