import axios from 'axios'

const service = axios.create({
  baseURL: 'http://127.0.0.1:3000/api', 
  timeout: 5000 ,
  withCredentials: false // 表示跨域请求时是否需要使用凭证
})

// 请求拦截器
service.interceptors.request.use(
  config => {

    return config
  },
  error => {
    // do something with request error
    console.log(error) 
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(

  response => {
    return response.data
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service