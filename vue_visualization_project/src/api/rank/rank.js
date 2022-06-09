// axios
import request from '@/utils/request'

// 请求
export function reqGetRankData() {
  return request({
    url: '/rank',
    method: 'get'
  })
}
