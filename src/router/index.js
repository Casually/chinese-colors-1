import Vue from 'vue'
import VueRouter from 'vue-router'
import Layouts from '@/components/Layouts'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layouts',
    component: Layouts
  }
]

const router = new VueRouter({
  routes
})

export default router
