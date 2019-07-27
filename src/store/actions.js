export default {
  changeCity (ctx, city) {
    // console.log(ctx, city)
    ctx.commit('changeCity', city) // commit(): 调用mutations对象上的changeCity方法
  }
}
