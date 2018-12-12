import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/map'
    },
    {
      path: '/map',
      name: 'map',
      component: resolve => require(['@/components/common/map'], resolve),
      // redirect: '/map/cyjc',
      children: [
        {
          path: '/map/cyjc',
          name: 'cyjc',
          component: resolve => require(['@/components/pages/cyjc'], resolve)
        },
        {
          path: '/map/lyzy',
          name: 'lyzy',
          component: resolve => require(['@/components/pages/lyzy'], resolve)
        }
      ]
    },
    {
      path: '/chart',
      name: 'chart',
      component: resolve => require(['@/components/common/chart'], resolve),
      children: [
        {
          path: '/chart/ykly',
          name: 'ykly',
          component: resolve => require(['@/components/pages/ykly'], resolve)
        },
        {
          path: '/chart/ylhx',
          name: 'ylhx',
          component: resolve => require(['@/components/pages/ylhx'], resolve)
        },
        {
          path: '/chart/xffx',
          name: 'xffx',
          component: resolve => require(['@/components/pages/xffx'], resolve)
        },
        {
          path: '/chart/ykmy',
          name: 'ykmy',
          component: resolve => require(['@/components/pages/ykmy'], resolve)
        },
        {
          path: '/chart/jqhd',
          name: 'jqhd',
          component: resolve => require(['@/components/pages/jqhd'], resolve)
        },
        {
          path: '/chart/yxpg',
          name: 'yxpg',
          component: resolve => require(['@/components/pages/yxpg'], resolve)
        }
      ]
    },
  ]
})
