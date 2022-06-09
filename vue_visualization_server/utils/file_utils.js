// 读取文件工具的方法
const fs = require('fs')
module.exports.getFileJsonData = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if (error) return reject(error)
      resolve(data)
    })
  })
}
