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
    // children: [{
      // path: '/bangalore',
      // name: 'bangalore',
      // component: import(/* webpackChunkName: "about" */ '../views/Bangaloreview.vue')
    // },
    // {
    // path: '/mysore',
      // name: 'mysore',
      // component: import(/* webpackChunkName: "about" */ '../views/Mysoreview.vue')
    // }]
},
{
   path: '/AddProduct',
   name: 'AddProduct',
<<<<<<< HEAD
   component: () => import(/* webpackChunkName: "about" */ '../views/AddProduct.vue'),
=======
   component: () => import(/* webpackChunkName: "about" */ '../components/AddProduct.vue'),
>>>>>>> 6fec525b4360a9466cf68dfac9ac674ff98c1820


},
{
  path: '/RemoveProduct',
  name: 'RemoveProduct',
  component: () => import(/* webpackChunkName: "about" */ '../views/RemoveProduct.vue'),


},
{
  path: '/UpdateProduct',
  name: 'UpdateProduct',
  component: () => import(/* webpackChunkName: "about" */ '../views/UpdateProduct.vue'),


},
{
  path: '/ViewRating',
  name: 'ViewRating',
  component: () => import(/* webpackChunkName: "about" */ '../views/ViewRating.vue'),


},
{
  path: '/MerchantListing',
  name: 'MerchantListing',
  component: () => import(/* webpackChunkName: "about" */ '../views/MerchantListing.vue'),


}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
