// 路由配置信息
export default [
    // 个人中心
    {
        path: '/center',
        name: 'center',
        component: () => import('@/pages/Center'),
        meta: { show: true },
        children: [
            {
                path: 'myorder',
                component: () => import('@/pages/Center/MyOrder'),
            },
            {
                path: 'groudorder',
                component: () => import('@/pages/Center/GroupOrder'),
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
        component: () => import('@/pages/PaySuccess'),
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
        component: () => import('@/pages/Pay'),
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
        component: () => import('@/pages/Trade'),
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
        component: () => import('@/pages/ShopCart'),
        meta: { show: true }
    },
    // 添加购物车成功
    {
        path: '/addcartsuccess',
        name: 'addcartsuccess',
        component: () => import('@/pages/AddCartSuccess'),
        meta: { show: true }
    },
    // 首页
    {
        path: '/home',
        component: () => import("@/pages/Home"),
        meta: { show: true }
    },
    // 搜索
    {
        path: '/search/:keyword?',
        component: () => import('@/pages/Search'),
        name: 'search',
        meta: { show: true },
    },
    // 登录
    {
        path: '/login',
        component: () => import('@/pages/Login'),
        meta: { show: false }
    },
    // 注册
    {
        path: '/register',
        component: () => import('@/pages/Register'),
        meta: { show: false }
    },
    // 详情
    {
        path: '/detail/:skuId',
        component: () => import('@/pages/Detail'),
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