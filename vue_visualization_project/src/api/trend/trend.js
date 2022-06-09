// axios
import request from '@/utils/request'

// 请求
export function reqGetTrendData() {
  return request({
    url: '/trend',
    method: 'get'
  })
}
