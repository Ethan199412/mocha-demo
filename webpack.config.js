const path = require('path');

const CWD = process.cwd();
console.log('[p0] CWD', CWD)
const resolvePath = (relativePath) => path.resolve(CWD, relativePath);

module.exports = {
    mode: 'development',
    entry: resolvePath('./test/index.test.js'),
    output: {
        path: resolvePath('./dist'),
        filename: 'bundle.js',
        clean: true,
        publicPath: 'http://localhost:3006/dist/'
    },
    devtool: false,
    devServer: {
        port: 3006,
        static: {
            directory: resolvePath('./')
        },
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env'
                    ],
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
}


