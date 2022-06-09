// axios
import request from '@/utils/request'

// 请求
export function reqGetStockData() {
  return request({
    url: '/stock',
    method: 'get'
  })
}
