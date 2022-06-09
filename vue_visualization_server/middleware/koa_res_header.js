// 设置响应头的中间件
module.exports = async (ctx, next) => {
  const contentType = 'application/json;charset=utf-8'
  ctx.set('Content-Type', contentType)
  await next()
}
