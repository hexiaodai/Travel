// 配置 Vuex
import Vue from 'vue'
import Vuex from 'vuex' // vuex组件
import state from './state' // 导入state对象上的数据
import mutations from './mutations' // 导入 mutations对象上的数据
import actions from './actions' // 导入 actions对象上的数据

Vue.use(Vuex)

// vuex 公共数据仓库
export default new Vuex.Store({
  // 存放共用的数据
  state,
  // (dispatch()调用actions对象) actoins对象 调用mutations对象, mutations对象 调用state对象
  // 注意：可直接跳过 actions对象，直接使用commit()调用mutations对象的方法
  actions,
  // mutations对象改变 state对象中的数据
  mutations
})
