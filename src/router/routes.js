import Home from '@/views/Home'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // 动态路由
  {
    path: '/arg/:name',
    component: () => import('@/views/arg.vue')
  },
  // 命名视图
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/About.vue'),
      top: () => import('@/views/Top.vue'),
      center: () => import('@/views/Center.vue')
    }
  },
  {
    path: '/split-pane',
    name: 'splitPane',
    component: () => import('@/views/SplitPane.vue')
  },
  // 404
  // 使用通配符时，$route.params内部会自动添加一个名为pathMatch参数，它包含url通过通配符被匹配的部分
  {
    path: '*',
    component: () => import('@/views/404.vue')
  }
]
