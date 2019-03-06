import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
Vue.use(Router)
const router = new Router({
  mode: 'hash',
  routes
})
// 模拟登录
const HAS_LOGINED = true
// 全局导航守卫
router.beforeEach((to, from, next) => {
  if (to.name !== 'login') {
    if (HAS_LOGINED) next()
    else next('login')
  } else {
    if (HAS_LOGINED) next('home')
    else next()
  }
})

export default router
