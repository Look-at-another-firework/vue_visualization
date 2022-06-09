import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.css'
import './assets/font/iconfont.css'

// 全局挂载ECharts
Vue.prototype.$echarts = window.echarts

// 引入api请求接口
import API from './api'

Vue.prototype.$API = API

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
