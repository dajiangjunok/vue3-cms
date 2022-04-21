import YJRequest from './request'

const yjRequest = new YJRequest({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: Number(process.env.VUE_APP_TIME_OUT),
  interceptors: {
    requestInterceptor: (config) => {
      // 携带token的拦截
      const token = ''
      if (token) {
        // config.headers.Authorization = `Bearer ${token}`
      }

      console.log('单实例请求成功的拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('单实例请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('单实例响应成功的拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('单实例响应失败的拦截')
      return err
    }
  }
})

yjRequest.instance
  .get('http://123.207.32.32:8000/home/multidata')
  .then((res) => {
    console.log(res.data)
  })

export default yjRequest
