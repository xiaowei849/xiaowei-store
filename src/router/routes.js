// 引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from "@/pages/Detail"
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'

// 路由配置信息
export default [
    {
        path: '/trade',
        name: 'trade',
        component: Trade,
        meta: {show: true}
    },
    {
        path: '/shopcart',
        name: 'shopcart',
        component: ShopCart,
        meta: { show: true }
    },
    {
        path: '/addcartsuccess',
        name: 'addcartsuccess',
        component: AddCartSuccess,
        meta: { show: true }
    },
    {
        path: '/home',
        component: Home,
        meta: { show: true }
    },
    {
        path: '/search/:keyword?',
        component: Search,
        name: 'search',
        meta: { show: true },
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
    },
    {
        path: '/login',
        component: Login,
        meta: { show: false }
    },
    {
        path: '/register',
        component: Register,
        meta: { show: false }
    },
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