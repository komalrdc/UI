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
