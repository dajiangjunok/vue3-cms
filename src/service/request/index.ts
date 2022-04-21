import axios from 'axios'
import type { AxiosInstance } from 'axios'
import { YjInterceptors, YjRequestConfig } from './type'

// 如果config类型是AxiosRequestConfig，那么就需要满足里面对象属性，
// 如果我们需要自定义一些传入的属性，那么肯定是无法实现
// 此时我们可以自定义一个接口，让我们的接口继承自AxiosRequestConfig来实现
const SHOW_LOADING = true

class YJRequest {
  instance: AxiosInstance
  interceptors?: YjInterceptors
  isShowLoading: boolean = SHOW_LOADING

  constructor(config: YjRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config)
    // 保存基本信息
    this.isShowLoading = config.isShowLoading ?? SHOW_LOADING
    this.interceptors = config.interceptors
    // 使用拦截器
    // 1.从config中取出的拦截器是对应的实例的拦截器【单个实例的拦截器，创建实例时自己传入】
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    // 2.所有实例的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有实例拦截器：请求发送拦截')
        return config
      },
      (err) => {
        console.log('所有实例拦截器：请求发送拦截失败')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有实例拦截器：请求返回拦截')
        return res.data
      },
      (err) => {
        console.log('所有实例拦截器：请求返回拦截失败')
        return err
      }
    )
  }
}

export default YJRequest
