import Vue from 'vue'
import App from './App.vue'
// 关闭生成环境提示
Vue.config.productionTip = false

// 三级路由组件，轮播图，分页器
import TypeNav from '@/components/TypeNav'
import Carsousel from '@/components/Carousel'
import Pagenation from '@/components/Pagination'

// 第一个参数：路由的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carsousel.name, Carsousel)
Vue.component(Pagenation.name, Pagenation)

// 引入element-ui
import { Button, MessageBox } from 'element-ui'
// 注册全局组件的方法使用element组件，或者Vue.use(Button)
Vue.component(Button.name, Button)
// 把组件挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

// 图片懒加载 引入vue-lazyload
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  error: require('@/assets/images/lazyload/no_image.jpg'),
  loading: require('@/assets/images/lazyload/loading.gif'),
})

// 引入路由
import router from '@/router'
// 引入仓库
import store from '@/store'
// 引入MockServer.js----mock数据
import '@/mock/mockServer'
// 引入swiper样式
import 'swiper/css/swiper.css'
// 引入api为文件夹里面全部请求函数
import * as API from '@/api'
// 引入vee-validate
import '@/plugins/validate'

new Vue({
  render: h => h(App),
  // 全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  // 注册路由，注册路由信息，当书写router的时候，组件身上都有$route, $router
  router,
  // 注册仓库：组件实例的身上都会多出一个属性$store
  store
}).$mount('#app')
