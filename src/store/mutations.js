export default {
  // state: Vuex的state对象
  changeCity (state, city) {
    state.city = city
    try {
      localStorage.city = city // 储存用户选择中的city值
    } catch (e) { }
  }
}
