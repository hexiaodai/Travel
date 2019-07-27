let defaultCity = '深圳'
// 防止用户关闭浏览器localStorage本地存储，抛出异常，防止程序崩溃
try {
  if (localStorage.city) {
    defaultCity = localStorage.city // 获取localStorage内储存的city数据
  }
} catch (e) { }

// export default: 导出内容
export default {
  city: defaultCity // 默认城市
}
