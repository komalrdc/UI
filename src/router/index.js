import Vue from 'vue'
import VueRouter from 'vue-router'

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
    path: '/removebook',
    name: 'removebook',
    component: () => import('../components/merchant/RemoveProduct.vue')
  },
  {
    path: '/updatproduct',
    name: 'updateproduct',
    component: () => import('../views/UpdateProduct.vue')
  },
  {
    path: '/ViewRating',
    name: 'ViewRating',
    component: () => import('../views/ViewRating.vue')
  },
  {
    path: '/MerchantListing',
    name: 'MerchantListing',
    component: () => import('../views/MerchantListing.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
}) 

export default router
