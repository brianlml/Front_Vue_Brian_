import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/productos',
    name: 'productos',
    component: () => import('../views/Productos.vue')
  },
  {
    path:'/lista_helados',
    name: 'lista',
    component: () => import('../views/Lista_helados.vue')
  },
  {
    path:'/helado',
    name:'helado',
    component: () => import ('../views/Helado.vue')
  },
  {
    path:'/helado/:id',
    name:'helado',
    component: () => import ('../components/ListHelados.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
