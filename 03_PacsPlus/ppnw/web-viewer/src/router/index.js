import Vue from 'vue'
import VueRouter from 'vue-router'
import { HomePage, LoginPage, ViewerPage } from '@/components'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/viewer',
    name: 'ViewerPage',
    component: ViewerPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL || 'http://localhost:8080',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (!localStorage.getItem('user') && to.path !== '/login') {
      next({ name: 'LoginPage' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
