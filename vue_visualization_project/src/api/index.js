// 将模块统一暴露
import * as seller from './seller/seller'
import * as trend from './trend/trend'
import * as rank from './rank/rank'
import * as hot from './hot/hot'
import * as stock from './stock/stock'
import * as map from './map/map'

//对外暴露
export default {
  seller,
  trend,
  rank,
  hot,
  stock,
  map
}
