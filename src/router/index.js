import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import loginPage from '@/page/login'
import login from '@/page/login/login'
import register from '@/page/login/register'

import home from '@/page/home'
import myhome from '@/page/home/home'

import dynamic from '@/page/dynamic'

import messagebox from '@/page/messagebox'

import config from '@/page/config'

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
      redirect: 'home/myhome',
      children: [
        {
          path: 'myhome',
          name: 'myhome',
          component: myhome
        },
        {
          path: 'dynamic',
          name: 'dynamic',
          component: dynamic
        },
        {
          path: 'messagebox',
          name: 'messagebox',
          component: messagebox
        },
        {
          path: 'config',
          name: 'config',
          component: config
        }
      ]
    }
  ]
})
