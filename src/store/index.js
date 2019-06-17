import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

// let defaultCity = '上海'
// try {
//   if (localStorage.city) {
//     defaultCity = localStorage.city
//   }
// } catch (e) {}
export default new Vuex.Store({
  // state: {
  //   city: defaultCity
  // },
  state,
  // actions: {
  //   changeCity (ctx, city) {
  //     console.log(city)
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations,
  getters: {
    // 类似于computed计算属性
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
