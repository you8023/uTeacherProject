import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import property from '@/components/property'
import hitokoto from '@/components/hitokoto'
import my from '@/components/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/property',
      name: 'property',
      component: property
    },
    {
      path: '/hitokoto',
      name: 'hitokoto',
      component: hitokoto
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
