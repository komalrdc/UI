import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/addbook',
    name: 'AddProduct',
    component: () => import('../components/merchant/AddProduct.vue')
  },
  {
     path: '/login',
     name: 'login',
     component: () =>import('../views/login.vue')

  },
  {    
    path: '/newUser',
    name: 'newUser',
    component: () =>import('../views/newUser.vue') 

  },
  {
    path: '/MerchantListing/:id',
    name: 'MerchantListing',
    component: () => import('../views/MerchantListing.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
},
    {
      path: '/product',
      name: 'product',
      component: () => import( '../views/ProductView.vue'),
      children: [
        {
          path: '',
          component: () => import( '../views/ProductListingView.vue'), 
        },
        {
          path: 'description/:id',
          name: 'description',
          component: () => import( '../views/ProductDescriptionView.vue'),
        }
      ]
    },
    {
      // TODO
      // Theses routes are not required
      // as these are just API calls...
      path: '/cart',
      name:'cart',
      component: () => import('../views/CartView.vue'),
      children:[
        {
          path: '/addcart',
          name:'addcart',
          component: () => import('../views/AddCartView.vue'),
        },
        {
          path: '/removecart',
          name:'removecart',
          component: () => import('../views/RemoveCartView.vue'),
        },
        {
          path: '/removeall',
          name:'removeall',
          component: () => import('../views/RemoveAllView.vue'),
        }
      ]
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
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
}) 

export default router
