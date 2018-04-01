import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import TeachType from '@/components/TeachType'
import TeachDetail from '@/components/TeachDetail'
import MapDetail from '@/components/MapDetail'
import MyCollection from '@/components/MyCollection'
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
      path: '/teachtype/:type',
      name: 'teachtype',
      component: TeachType
    },
    {
      path: '/teachdetail/:id',
      name: 'teachdetail',
      component: TeachDetail
    },
    {
      path: '/MapDetail/:address',
      name: 'mapdetail',
      component: MapDetail
    },
    {
      path: '/MyCollection',
      name: 'mycollection',
      component: MyCollection
    },
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    }
  ]
})
