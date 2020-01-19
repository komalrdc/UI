import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/productslist',
    name: 'productslist',
    component: () => import( '../views/ProductListingView.vue'),
  },
  {
    path: '/productdesc',
    name: 'productdesc',
    component: () => import( '../views/ProductDescriptionView.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
