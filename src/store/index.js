import Vue from 'vue'
import Vuex from 'vuex'
// import state from './state'
// import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city: '上海'
  },
  actions: {
    changeCity (ctx, city) {
      console.log(city)
      ctx.commit('changeCity', city)
    }
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
    }
  }
})
