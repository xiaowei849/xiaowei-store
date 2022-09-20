// 配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由
import routes from './routes'
// 引入Vuex
import store from '@/store'
// 使用插件
Vue.use(VueRouter)

// 把VueRouter原型对象的push保存一份
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace


// 重写push|replace
// 第一个参数，告诉原来的push方法，你往哪里跳转（传递哪些参数）
// 第二个参数，成功回调
// 第三个参数，失败回调

// call和apply区别
// 相同点：都可以调用函数一次，都可以篡改函数一次
// 不同点：call和apply传递参数：call用逗号隔开，apply方法执行，传递数组

VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}


VueRouter.prototype.replace = function (location, resolve, reject) {
    if (resolve && reject) {
        originReplace.call(this, location, resolve, reject)
    } else {
        originReplace.call(this, location, () => { }, () => { })
    }
}

// 配置路由
let router = new VueRouter({
    // 配置路由
    mode: 'hash',
    routes,
    scrollBehavior() {
        return { y: 0 }
    }
})

// 全局守卫：前置守卫（在路由跳转之间进行判断）
router.beforeEach(async (to, from, next) => {
    // to 要跳转的那个路由信息
    // from 从哪个路由来的信息
    // next 放行函数
    // token存在代表已经登录，登录后限制跳转注册和登录页面
    let token = store.state.user.token
    let name = store.state.user.userInfo.name
    if (token) {
        if (to.path == '/login' || to.path == '/register') {
            next('/home')
        } else {
            if (name) {
                next()
            } else {
                // 没有用户信息，派发action让仓库存储信息再跳转
                try {
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    // token失效，获取不到用户信息
                    await store.dispatch('userLogout')
                    next('/login')
                }
            }
        }
    } else {
        let toPath = to.path
        if (toPath.includes('trade') || toPath.includes('pay') || toPath.includes('center')) {
            next('/login?to=' + toPath)
        } else {
            // 不是上面的话放行
            next()
        }
    }
})



export default router