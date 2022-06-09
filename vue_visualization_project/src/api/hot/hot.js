// axios
import request from '@/utils/request'

// 请求
export function reqGetHotData() {
  return request({
    url: '/hotproduct',
    method: 'get'
  })
}
