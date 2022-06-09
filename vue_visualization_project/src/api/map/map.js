// axios
import request from '@/utils/request'

// 请求
export function reqGetMapData() {
  return request({
    url: '/map',
    method: 'get'
  })
}
