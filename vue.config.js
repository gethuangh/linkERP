module.exports = {
    css: {
      loaderOptions: {
        sass: {
            prependData: `@import "@/assets/style/variable.scss";`
        }
      }
    },
    devServer: {
      port: 4869, // 端口号
      host: '0.0.0.0',
      https: false, // https:{type:Boolean}
      open: false, //配置自动启动浏览器
      proxy: 'http://192.168.0.119:4869' // 配置跨域处理,只有一个代理
      // proxy: {
      //   "/api": {
      //   target: "http://192.168.0.119",
      //     ws: true,
      //     changeOrigin: true
      //   },
      //   "/foo": {
      //     target: "http://192.168.0.119"
      //   }
      // } // 配置多个代理
    }
  }