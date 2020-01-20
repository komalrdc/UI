import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: {},
    // marchantProducts: [
    //   {
    //     productName: "iphone6s",
    //     price: 500,
    //     color: "black",
    //     quantity: 5
    //   },
    //   {
    //     productName: "iphone7s",
    //     price: 1500,
    //     color: "black",
    //     quantity: 5
    //   },
    //   {
    //     productName: "iphone8s",
    //     price: 5000,
    //     color: "black",
    //     quantity: 5
    //   },
    //   {
    //     productName: "iphone9s",
    //     price: 50000,
    //     color: "black",
    //     quantity: 5
    //   }
    // ]
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
      // getMerchantProducts({data} ) {
      //   fetch('/api/getMerchantProducts', {
      //     method: "POST",
      //     data
      //   })
      //  .then(res => res.json())
      // }
  },
  getters: {
    myGetter(state) {
      return state.users.avatar_url || ""
    },
    merchantProductList(state) {
      return state.marchantProducts
    }
  },
  modules: {
  }
})
