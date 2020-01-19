import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/productListing',
    name: 'productListing',
    component: () => import(/* webpackChunkName: "about" */ '../views/productListingView.vue'),
  },
  {
    path: '/productDescription',
    name: 'productDescription',
    component: () => import(/* webpackChunkName: "about" */ '../views/productDescriptionView.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
