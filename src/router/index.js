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
    path: '/AddProduct',
    name: 'AddProduct',
    component: () => import(/* webpackChunkName: "about" */ '../views/AddProduct.vue')
  },
  {
    path: '/RemoveProduct',
    name: 'RemoveProduct',
    component: () => import(/* webpackChunkName: "about" */ '../views/RemoveProduct.vue')
  },
  {
    path: '/UpdateProduct',
    name: 'UpdateProduct',
    component: () => import(/* webpackChunkName: "about" */ '../views/UpdateProduct.vue')
  },
  {
    path: '/ViewRating',
    name: 'ViewRating',
    component: () => import(/* webpackChunkName: "about" */ '../views/ViewRating.vue')
  },
  {
    path: '/MerchantListing',
    name: 'MerchantListing',
    component: () => import(/* webpackChunkName: "about" */ '../views/MerchantListing.vue')
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
