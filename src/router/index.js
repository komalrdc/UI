import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home.vue'
// import homepage from '../views/HomePageView.vue'


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
<<<<<<< HEAD
    name: 'home',
    component: home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginView.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "about" */ '../views/NewUserView.vue'),
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
  },
  {
    name: 'Category',
    path: '/category/:id',
    component: () => import('@/views/Category')
  },
=======
    name: 'Home',
    component: Home
},
>>>>>>> 54bf1011533701dec2a443a9cd03f5a380180e14
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
