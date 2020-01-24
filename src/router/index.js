import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
      path: '/cart',
      name:'cart',
      component: () => import('../views/CartView.vue'),
    },
    {
      path: '/checkout',
        name:'checkout',
        component: () => import('../views/CheckoutView.vue'),
    },
    {
      path: '/addbook',
      name: 'AddProduct',
      component: () => import('../components/merchant/AddProduct.vue')
    },
    {
      path: '/MerchantListing',
      name: 'MerchantListing',
      component: () => import('../views/MerchantListing.vue')
    },
    // {
    //   path: '/search',
    //   name: 'search',
    //   component: () => import('../views/SearchView.vue')
    // },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/newuser',
      name: 'newuser',
      component: () => import('../views/NewUserView.vue')
    },
    {
      path: '/product/:category',
      name: 'Product',
      component: () => import( '../views/ProductView.vue'),
      // children: [
      //   {
      //     path: '/category',
      //     component: () => import( '../views/ProductListingView.vue'), 
      //   },
      //   {
      //     path: 'description/:id',
      //     name: 'description',
      //     component: () => import( '../views/ProductDescriptionView.vue'),
      //   }
      // ]
    },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
}) 

export default router
