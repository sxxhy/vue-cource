import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    alias: '/home_page', // 别名
    name: 'home',
    component: Home,
    // 路由传参函数模式
    props: route => ({ // 相当于() => { return {} }
      food: route.query.food
    })
  },
  {
    path: '/about',
    name: 'about',
    props: {
      food: 'banana'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.懒加载
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    // 动态路由
    path: '/argu/:name',
    name: 'argu',
    component: () => import('../views/argu.vue'),
    props: true// 可以随意改变传参的内容
  },
  {
    // 子路由
    path: '/parent',
    name: 'parent',
    component: () => import('../views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('../views/child.vue')
      }
    ]
  },
  {
    path: '/name_view',
    // 命名视图的使用
    components: {
      default: () => import('../views/child.vue'),
      email: () => import('../views/email.vue'),
      tel: () => import('../views/tel.vue')
    }
  },
  {
    // 重定向
    path: '/main',
    // redirect: '/'
    redirect: to => {
      // console.log(to)
      return {
        name: 'home'
      }
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '*',
    component: () => import('../views/404_page.vue')
  }
]
