import Vue from 'vue'
import App from './App.vue'

// 三级路由组件，轮播图，分页器
import TypeNav from '@/components/TypeNav'
import Carsousel from '@/components/Carousel'
import Pagenation from '@/components/Pagination'
// 第一个参数：路由的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carsousel.name, Carsousel)
Vue.component(Pagenation.name, Pagenation)
// 引入路由
import router from '@/router'
Vue.config.productionTip = false
// 引入仓库
import store from '@/store'
// 引入MockServer.js----mock数据
import '@/mock/mockServer'
// 引入swiper样式
import 'swiper/css/swiper.css'

new Vue({
  render: h => h(App),
  // 全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  // 注册路由，kv一直省略v，注册路由信息，当书写router的时候，组件身上都有$route, $router
  router,
  // 注册仓库：组件实例的身上都会多出一个属性$store
  store
}).$mount('#app')
