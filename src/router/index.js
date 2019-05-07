import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import loginPage from '@/page/login'
import login from '@/page/login/login'
import register from '@/page/login/register'
import home from '@/page/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loginPage',
      component: loginPage,
      children: [
        {
          path: '/',
          name: 'login',
          component: login
        },
        {
          path: '/register',
          name: 'register',
          component: register
        }
      ]
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
