// axios
import request from '@/utils/request'

// 请求
export function reqGetSellerData() {
  return request({
    url: '/seller',
    method: 'get'
  })
}
