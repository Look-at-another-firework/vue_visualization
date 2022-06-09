import Vue from 'vue'
import VueRouter from 'vue-router'
import screenPage from '@/views/ScreenPage.vue'

Vue.use(VueRouter)

const routes = [
  // 注释的为测试阶段
  // {
  //   path: '/sellerpage',
  //   name: 'sellerpage',
  //   component: () => import('../views/sellerPage.vue')
  // },
  // {
  //   path: '/trendpage',
  //   name: 'trendpage',
  //   component: () => import('../views/TrendPage.vue')
  // },
  // {
  //   path: '/mappage',
  //   name: 'mappage',
  //   component: () => import('../views/mapPage.vue')
  // },
  // {
  //   path: '/rankpage',
  //   name: 'rankpage',
  //   component: () => import('../views/rankPage.vue')
  // },
  // {
  //   path: '/hotpage',
  //   name: 'hotpage',
  //   component: () => import('../views/hotPage.vue')
  // },
  // {
  //   path: '/stockpage',
  //   name: 'stockpage',
  //   component: () => import('../views/stockPage.vue')
  // },
  {
    path: '/screenpage',
    name: 'screenpage',
    component: screenPage
  },
  {
    path: '/',
    redirect: '/screenpage'
  }
]

const router = new VueRouter({
  routes
})

export default router
