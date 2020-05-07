module.exports = {
  devServer: {
    proxy: {
      '/ajax': {
        target: 'https://m.dianping.com/myshow',
        // ws: true,
        changeOrigin: true
      },
      '/foo': { // 这里可多个
        target: '<other_url>'
      }
    }
  },

  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page'
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      // chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。

  },

  
}

// https://m.dianping.com/myshow/ajax/performances/1;st=4;p=1;s=8;tft=0?cityId=10&sellChannel=7
// http://m/maoyan.com/ajax/movieOnInfoList?token=
// 过滤 '/ajax' 这样的请求，代理到 http://m/maoyan.com这台服务器上。ws 是有 webSocket 时将其设置为true。--> 当前端发起请求，这个请求包括特殊字段'/ajax'开头的，会转发到http://m/maoyan.com的服务器上请求回来。之后在发请求时的地址删去http://m/maoyan.com。这和node、gulp一样。这个配置文件要由后端引用，要重启服务器
