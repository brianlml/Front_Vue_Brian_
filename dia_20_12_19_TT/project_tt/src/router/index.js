import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/about', redirect: '/2' },
  
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    
    component: () => import('../views/About.vue')
  },
  {
    path:'/NewView',
    name:'NewView',
    component: () => import('../views/NewView.vue')
  },
  {
    path:'/2',
    name: '2',
    component: () => import('../views/2.vue')

  },
  {
    path: '/User/:eqID',
    name:'User',
    component: () => import ('../views/User.vue')
  },
  {
    path:'/Userslist',
    name:'Userslist',
    component: () => import ('../views/UsersList.vue')
  },
  {
    path:'/u/:id',
    name:'u',
    component: () => import ('../components/u.vue')
  },
  {
    path:'/u/:i',
    name:'u',
    component: () => import ('../components/u.vue')
  }
  


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
