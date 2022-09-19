// 当前模块：API进行统一管理
import requests from "./request";
import mockRequests from './mockRequest'

// 三级联动接口
// /api/product/getBaseCategoryList  get请求  无参数
// 发请求：axios发请求返回结果Promise对象
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' })

// 获取banner（首页轮播图）
export const reqGetBannerList = () => mockRequests({ url: '/banners', method: 'get' })

// 获取floor数据
export const reqFloorList = () => mockRequests({ url: '/floors', method: 'get' })

// 获取搜索模块数据  地址：/api/list  请求方式：post  有参数
export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })

// 获取详情数据/api/item/{ skuId }
export const reqGoodsInfo = (skuId) => requests.get(`/item/${skuId}`)

// 将产品添加到购物车中（获取更新某一个产品的个数）
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests.post(`/cart/addToCart/${skuId}/${skuNum}`)

// 获取购物车列表数据的接口
export const reqCartList = () => requests.get('/cart/cartList')

// 删除购物车数据  /api/cart/deleteCart/{skuId}  delete
export const reqDeleteCartById = skuId => requests({url: `/cart/deleteCart/${skuId}`, method: 'delete'})

// 修改商品选中状态  /api/cart/checkCart/{skuID}/{isChecked}
export const reqUpdateCheckedById = (skuId, isChecked) => requests({url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get'})

// 获取验证码 /api/user/passport/sendCode/{phone}
export const reqGetCode = phone => requests(`/user/passport/sendCode/${phone}`)

// 用户注册/api/user/passport/register  phone password code
export const reqUserRegister = (data) => requests({url: '/user/passport/register', method: 'post', data})

// 用户登录 /api/user/passport/login post phone password
export const reqUserLogin = (data) => requests({url: '/user/passport/login', method: 'post', data})

// 获取用户信息/user/passport/auth/getUserInfo
export const reqGerUserInfo = () => requests({url: '/user/passport/auth/getUserInfo', method: 'get'})

// 退出登录
export const reqLogout = () => requests('/user/passport/logout')

// 获取用户地址信息
export const reqAddressInfo = () => requests('/user/userAddress/auth/findUserAddressList')

// 获取商品清单 
export const reqOrderInfo = () => requests('/order/auth/trade')

// 提交订单/order/auth/submitOrder?tradeNo={tradeNo}
export const reqSubmitOrder = (tradeNo, data) => requests({url: `/order/auth/submitOrder?tradeNo=${tradeNo}`, method: 'post', data})

// 获取订单支付信息
export const reqPayInfo = (orderId) => requests(`/payment/weixin/createNative/${orderId}`)

// 查询订单支付状态/payment/weixin/queryPayStatus/{orderId}
export const reqPayStatus = orderId => requests(`/payment/weixin/queryPayStatus/${orderId}`)

// 获取我的订单列表
export const reqMyOrderList = (page, limit) => requests(`/order/auth/${page}/${limit}`)
