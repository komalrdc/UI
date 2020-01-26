import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home.vue'
// import homepage from '../views/HomePageView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue'),
  },
  {
    path: '/newuser',
    name: 'newuser',
    component: () => import('../views/NewUserView.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import( '../views/SearchView.vue'),
  },
  // CustomerPage changed
  {
    path: '/customerpage',
    name: 'CustomerPage',
    component: () => import( '../views/CustomerHome.vue'),
  },
  {
    path: '/customerprofile',
    name: 'CustomerProfile',
    component: () => import( '../views/CustomerProfile.vue'),
  },
  {
    path: '/product',
    name: 'product',
    component: () => import( '../views/ProductView.vue'),
    children: [
      {
        path: '/:category',
        component: () => import( '../views/ProductListingView.vue'), 
      },
      {
        path: 'description/:id',
        name: 'description',
        component: () => import( '../views/ProductDescriptionView.vue'),
      },
    ]
  },
  {
    path: '/MerchantListing/:id',
    name: 'MerchantListing',
    component: () => import('../views/MerchantListing.vue')
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
    name: 'Category',
    path: '/category/:id',
    component: () => import('@/views/Category')
  },
    {
      path: '/product/:category',
      name: 'Product',
      component: () => import( '../views/ProductView.vue'),
    },
    

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
}) 

export default router
