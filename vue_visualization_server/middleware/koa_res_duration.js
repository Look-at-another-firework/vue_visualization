// 计算服务器消耗时长的中间件
module.exports = async (ctx, next) => {
  // 记录开始的时间
  const start = Date.now()
  // 执行后续的中间件
  await next()
  // 记录结束的时间
  const end = Date.now()
  // 响应
  const duration = end - start
  ctx.set('X-Response-Time', duration + 'ms')
}
