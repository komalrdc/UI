/* eslint-disable no-console */
/* eslint-disable no-debugger */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    merchantId: '',
    users: {},
    categoryProducts: [],
    // cartItems: [],
    // cartCount: 0,
    searchList: [],
    selectedProduct: [],
    marchantProducts: [],
    searchDisplay: [],
    product: [
      {
        id: 1,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbCguIryM13WHy8TeJn5P9bTwHDfKPVuuz0vNVKwb_KhoBo3MC",
        title:"Kite Runner",
        author:"Khaleed",
        price: 300
      },
      {
        id: 2,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgBuhT15PD5U-mVrhloPHX_Yp8QCbnINppJBEDPkaa0gF2lktm",
        title:"The Shining",
        author:"Stephen King",
        price: 260
      },
      {
        id: 3,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgx4W9Ie1dygiEyrJOuQeUHn5xAc8u5DrXD2giPvUKH1RBEuNb",
        title:"The Book Thief",
        author:"Markus Zusak",
        price: 480
      },
      {
        id: 4,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoY0C60dff2TWbJFUw1Rwl72o9OOFtUN6asSNubXHdPny4zloi",
        title:"Gone Girl",
        author:"Gillian Flynn",
        price: 270
      }
  ],
  genre:[
    {
      id: 1,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbCguIryM13WHy8TeJn5P9bTwHDfKPVuuz0vNVKwb_KhoBo3MC",
      title:"Kite Runner",
      author:"Khaleed",
      price: 300
    },
    {
      id: 2,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgBuhT15PD5U-mVrhloPHX_Yp8QCbnINppJBEDPkaa0gF2lktm",
      title:"The Shining",
      author:"Stephen King",
      price: 260
    },
    {
      id: 3,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSgx4W9Ie1dygiEyrJOuQeUHn5xAc8u5DrXD2giPvUKH1RBEuNb",
      title:"The Book Thief",
      author:"Markus Zusak",
      price: 480
    },
    {
      id: 4,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoY0C60dff2TWbJFUw1Rwl72o9OOFtUN6asSNubXHdPny4zloi",
      title:"Gone Girl",
      author:"Gillian Flynn",
      price: 270
    }
],
  },
  mutations: {
    SET_PRODUCT(state, payload) {
      state.marchantProducts = payload
    },
    SET_SELECTED_PRODUCT(state, payload) {
      state.selectedProduct = payload
    },
    SET_CART_ITEMS(state, payload) {
      state.cartItems = payload
    },
    SET_SEARCH_LIST(state,payload) {
      state.searchList = payload
    },
    SET_SEARCH_DISPLAY(state,payload) {
      state.searchDisplay = payload
    },
    UPDATE_URL(state, url) {
      state.users = {
        avatar_url: url
      }
    },
    SET_USER_DETAILS(state, payload) {
      window.console.log('@@@@@', payload)
      state.userDetails = payload
    },
    GET_DETAILS(state,payload){
       state.merchantdetails=payload
    },
    GET_MERCHANTID(state,payload){
      state.merchantId=payload.response
    },
    GET_CATEGORY_PRODUCTS(state, payload) {
      state.categoryProducts = payload
    }
  },
  actions: {
      loginUser (context, payload) {
        fetch('http://10.177.69.85:8080/router/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload.data)
        })
          .then(res => res.json())
          .then(res => {
            context.commit('SET_USER_DETAILS', res)
          })
      },
      NewUser (context, payload) {
        fetch('http://10.177.69.85:8080/router/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload.data)
        })
        .then(res=>res.json)
      },
    selectedProduct({commit}, data) {
        commit('SET_SELECTED_PRODUCT', data)
    },
    cartItems({commit}, data) {
      commit('SET_CART_ITEMS', data)
    },
    searchList({commit},data) {
      commit('SET_SEARCH_LIST', data)
    },
    searchDisplay({commit}, data) {
      commit('SET_SEARCH_DISPLAY', data)
   },
    getSearchList(context, {data, success}) {
      window.console.log(data)
      fetch('http://10.177.69.85:8080/search/search?keyword='+ data, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json()).then( (res) => {
        console.log(res)
        context.commit('SET_SEARCH_LIST',res)
        success && success(res)
      }).catch( (err) => {
        console.log(err)
      })
    },

    getProductListing(context, {data, success}) {
      fetch('http://10.177.69.85:8080/router/getProductByGenre/'+data, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json()).then( (res) => {
        console.log(res)
        context.commit('SET_SELECTED_PRODUCT',res)
        success && success(res)
      }).catch( (err) => {
        console.log(err)
      })
    },
    getcategoryProducts(context, {data, success}) {
      fetch('http://10.177.69.85:8080/router/getProductByGenre/'+data, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json()).then( (res) => {
        console.log(res)
        context.commit('GET_CATEGORY_PRODUCTS',res)
        success && success(res)
      }).catch( (err) => {
        console.log(err)
      })
    },
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
      }
    })
    .then(res => res.json()).then( (res) => {
      context.commit('SET_PRODUCT',res)
      success && success(res)
    }) 
    window.console.log(this.x)
  },
  getMerchantDetails(context,{data,success}){
    fetch('http://10.177.69.85:8080/router/getMerchantById/'+data, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json()).then( (res) => {
      context.commit('GET_DETAILS',res)
      window.console.log(res)
      success && success(res)
    }) 
  },
  fetchProductDetails (context, {data, success, fail}) {
    window.console.log([data, success, fail])
    // success && success(res)
    // fail && fail(res)
  },
  productDetails(context, payload) {
    fetch('http://localhost:8080/product/description/:id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload.data)
    }).then(res => res.json())
      
  },
},
  getters: {
    myGetter(state) {
      return state.users.avatar_url || ""
    },
    userDetails (state) {
      window.console.log('aaa', state.userDetails)
      return state.userDetails || []
    },
    merchantProductList(state) {
      return state.marchantProducts
    },
    productList : state => state.product || [],
    selectedProducts (state) {
      return state.selectedProduct || []
    },
    search(state) {
      return state.searchList || []
    },
    merchantDetails(state){
      return state.merchantdetails
    },
    getmerchantid: state => state.merchantId,
    searchDisplay(state){
      return state.searchDisplay
    },
    categoryProducts(state){
      return state.categoryProducts
    },
    genreList : state => state.genre || [],

  }
})
