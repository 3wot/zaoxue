import Vue from 'vue'
import Router from 'vue-router'
import $ from 'jquery'
import Index from '@/components/Index'
import Teach from '@/components/Teach'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
