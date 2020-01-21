import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userDetails: {}
  },
  mutations: {
    UPDATE_URL(state, url) {
      state.users = {
        avatar_url: url
      }
    },
    SET_USER_DETAILS(state, payload) {
      window.console.log('@@@@@', payload)
      state.userDetails = payload
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
      loginUser (context, payload) {
        // window.console.log(payload);

        fetch('http://10.177.2.194:8080/router/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify(payload.data)
        })
          .then(res => res.json())
          .then(res => {
            context.commit('SET_USER_DETAILS', res)
          })
      },
      NewUser (context, payload) {
        fetch('http://10.177.2.194:8080/router/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload.data)
        })
          .then(res => res.json())
          
      }
    }
  },
{
  getters: {
    myGetter(state) {
      return state.users.avatar_url || ""
    },
    userDetails (state) {
      window.console.log('aaa', state.userDetails)
      return state.userDetails || {}
    }
  },
  modules: {
  }
})
