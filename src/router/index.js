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
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
