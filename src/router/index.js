import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    component: ()=>import('@/views/login/Login')
  },
  {
    path:'/home',
    component: ()=>import('@/views/home/Home')
  },

]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router