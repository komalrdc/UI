import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/addbook',
    name: 'addbook',
    component: () => import( '../components/merchant/AddProduct.vue')
  },
  
  {
    path: '/updatebook',
    name: 'updatebook',
    component: () => import('../components/merchant/UpdateProduct.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
