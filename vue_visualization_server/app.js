// 创建koa
const Koa = require('koa')
const app = new Koa()
// 解决跨域
const cors = require('koa2-cors')
app.use(cors())
// 中间件一
const koaResDuration = require('./middleware/koa_res_duration')
app.use(koaResDuration)
// 中间件二
const koaResHeader = require('./middleware/koa_res_header')
app.use(koaResHeader)
// 中间件三
const koaResData = require('./middleware/koa_res_data')
app.use(koaResData)
// 监听端口
app.listen(3000, () => {
  console.log('listening on port 3000')
})

