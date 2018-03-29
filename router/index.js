import Vue from 'vue'
import Router from 'vue-router'
import $ from 'jquery'
import Index from '@/components/Index'
import HelloWorld from '@/components/HelloWorld'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    }
  ]
})
