import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: {}
  },
  mutations: {
    UPDATE_URL(state, url) {
      state.users = {
        avatar_url: url
      }
    }
  },
  actions: {
      myfirstAction(context) {
       fetch('http://api.github.com/users/komalrd')
       .then(res => res.json())
       .then(res => {
         context.commit('UPDATE_URL', res.avatar_url)
       })

      },
      fetchProductDetails (context, {data, success, fail}) {
        window.console.log([data, success, fail])
        // success && success(res)
        // fail && fail(res)
      }
      
  },
  getters: {
    myGetter(state) {
      return state.users.avatar_url || ""
    }
  },
  modules: {
  }
})
