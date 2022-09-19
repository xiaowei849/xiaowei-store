// 引入一级路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from "@/pages/Detail"
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
// 引入二级路由组件
import MyOrder from '@/pages/Center/MyOrder'
import GroudOrder from '@/pages/Center/GroupOrder'

// 路由配置信息
export default [
    // 个人中心
    {
        path: '/center',
        name: 'center',
        component: Center,
        meta: { show: true },
        children: [
            {
                path: 'myorder',
                component: MyOrder,
            },
            {
                path: 'groudorder',
                component: GroudOrder,
            },
            {
                path: '/center',
                redirect: '/center/myorder'
            }
        ]
    },
    // 支付成功
    {
        path: '/paysuccess',
        name: 'paysuccess',
        component: PaySuccess,
        meta: { show: true },
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            // 必须从支付页面进入
            if (from.path == '/pay') {
                next()
            } else {
                next(false)
            }
        }
    },
    // 支付
    {
        path: '/pay',
        name: 'pay',
        component: Pay,
        meta: { show: true },
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            // 必须从交易页面进入
            if (from.path == '/trade') {
                next()
            } else {
                next(false)
            }
        }
    },
    // 交易
    {
        path: '/trade',
        name: 'trade',
        component: Trade,
        meta: { show: true },
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            // 必须从交易页面进入
            if (from.path == '/shopcart') {
                next()
            } else {
                next(false)
            }
        }
    },
    // 购物车
    {
        path: '/shopcart',
        name: 'shopcart',
        component: ShopCart,
        meta: { show: true }
    },
    // 添加购物车成功
    {
        path: '/addcartsuccess',
        name: 'addcartsuccess',
        component: AddCartSuccess,
        meta: { show: true }
    },
    // 首页
    {
        path: '/home',
        component: Home,
        meta: { show: true }
    },
    // 搜索
    {
        path: '/search/:keyword?',
        component: Search,
        name: 'search',
        meta: { show: true },
    },
    // 登录
    {
        path: '/login',
        component: Login,
        meta: { show: false }
    },
    // 注册
    {
        path: '/register',
        component: Register,
        meta: { show: false }
    },
    // 详情
    {
        path: '/detail/:skuId',
        component: Detail,
        meta: { show: true }
    }
    ,
    // 重定向
    {
        path: '*',
        redirect: '/home'
    }
]

// 传递参数
// 布尔值写法:params
// props: true
// 对象写法:额外给路由组件传递一些props
// props: { a: 1, b: 2 }
// 函数写法：可以把params参数、query参数，通过props传递路由组件
// props: ($route) => {
//     return {
//         keyword: $route.params.keyword,
//         k: $route.query.k
//     }
// }