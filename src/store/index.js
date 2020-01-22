import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: {},
    product:[
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
  cart : []
  },
  mutations: {
  },
  actions: {
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
        })
          .then(res => res.json())
      },
  },
  // addToCart(context, product)
  // {

  // },

  getters: {
    productList : state => state.product || []
  }
})
