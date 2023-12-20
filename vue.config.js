const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // disableHostCheck: false,
	css: {
		// loaderOptions: {
		// 	sass: {
		// 		data: `@import "@/public/global.scss"`,
		// 	}
		// }
	},
  devServer: {
    open: true,
    hot: true,
    proxy: {
			// 配置跨域
			'/api': {
				target: 'https://www.baidu.com', // 代理地址，这里设置的地址会代替axios中设置的baseURL
				ws: true, // proxy websockets
				// changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
				pathRewrite: {
					// pathRewrite 方法重写 url
					'^/api': '/',
				},
			},
		},
  },
})
