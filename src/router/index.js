import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
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
    }
    ]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
