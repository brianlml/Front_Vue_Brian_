import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  
  
  {
    path:'/',
    name: 'Inicio',
    component: () => import ('../views/Inicio.vue')
  },
  {
    path:'/Nosotros',
    name: 'Nosotros',
    component: () => import ('../views/Nosotros.vue')
  },
  {
    path:'/Servicios',
    name:'Servicios',
    component: () => import ('../views/Servicios.vue')
  },
  {
    path:'/Club',
    name:'Club',
    component: () => import ('../views/Club.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
