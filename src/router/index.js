import Vue from 'vue'
import Router from 'vue-router'

import loginPage from '@/page/login'
import login from '@/page/login/login'
import register from '@/page/login/register'

import home from '@/page/home'
import myhome from '@/page/home/home'
import homedetails from '@/page/home/homedetails'

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
      path: '/home',
      name: 'home',
      component: home,
      redirect: 'home/homedetails',
      children: [
        {
          path: 'myhome',
          name: 'myhome',
          component: myhome
        },
        {
          path: 'homedetails',
          name: 'homedetails',
          component: homedetails
        }
      ]
    }
  ]
})
