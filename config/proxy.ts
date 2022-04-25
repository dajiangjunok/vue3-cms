/**
 * 默认代理配置
 *
 * @link https://github.com/chimurai/http-proxy-middleware#http-proxy-options
 * @type {import('http-proxy-middleware').Options}
 */
const proxyOptions = {
  // 代理目标
  target: 'http://152.136.185.210:5000',
  // 修改请求头的 Origin 为 target 值
  changeOrigin: true
}

/**
 * 配置 http 代理
 *
 * @type {import('webpack-dev-server').ProxyConfigMap}
 */
module.exports = {
  '^/api': {
    pathRewrite: {
      '^/api': ''
    },
    ...proxyOptions
  }
}
