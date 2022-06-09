const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  lintOnSave: false, //关闭eslint检查
  devServer: {
    open: true,
    // 解决代理跨域问题
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        pathRewrite: { '^/api': '' },
        changeOrigin: true
      }
    }
  }
}
