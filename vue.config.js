// vue.config.js 配置说明
// 这里只列一部分，具体配置惨考文档啊
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
module.exports = {

    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .add(resolve('packages'))
            .end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                return options
            })
    }
}
