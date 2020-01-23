/* eslint-disable no-console */
/* eslint-disable no-debugger */
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
    marchantProducts: []
  },
  mutations: {
    UPDATE_URL(state, url) {
      state.users = {
        avatar_url: url
      }
    },
    SET_PRODUCT(state, payload) {
      state.marchantProducts = payload
    }
  },
  actions: {
    // myfirstAction(context) {
    //   fetch('http://api.github.com/users/komalrd')
    //   .then(res => res.json())
    //   .then(res => {
    //     context.commit('UPDATE_URL', res.avatar_url)
    //   }) 
    addproduct({data} ) {
      fetch('http://10.177.69.85:8080/router/addProduct', {
        method: "POST",
        body: JSON.stringify(data)
        })
      .then(res => res.json())
    },
    addNewProduct (context, {data, success}) {
      fetch('http://10.177.69.85:8080/router/addProduct', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }

      })
      .then(res => res.json()).then( (res) => {
        context.commit('SET_PRODUCT',res)
        success && success(res)
      }) 
      window.console.log(this.x)
    },
    deleteProduct (context, {data, success}) {
      fetch('http://10.177.69.85:8080/router/removeProduct', {
        method: 'DELETE',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }

      })
      .then(res => res.json()).then( (res) => {
        context.commit('SET_PRODUCT',res)
        success && success(res)
      }) 
      window.console.log(this.x)
    },
    getAllProductByMerchantId (context, {data, success}) {
      fetch('http://10.177.69.85:8080/router/getProductByMerchantId/'+data, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }
      })
      .then(res => res.json()).then( (res) => {
        context.commit('SET_PRODUCT',res)
        success && success(res)
      }) 
      window.console.log(this.x)
    }
  },
  getters: {
    myGetter(state) {
      return state.users.avatar_url || ""
    },
   merchantProductList(state) {
      return state.marchantProducts
    },
  },
  modules: {
  }
})
