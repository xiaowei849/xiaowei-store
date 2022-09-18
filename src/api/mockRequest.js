// 对axios进行二次封装
import axios from "axios";
// 引入进度条  start进度条开启  done进度条结束
import nprogress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'

// 利用axios对象的方法，去创建一个axios实例
const requests = axios.create({
    // 配置对象
    baseURL: '/mock',
    timeout: 5000,
})

// 请求拦截器：在发出请求前，请求拦截器可以检测到，可以在发出请求之前去做一些事情
requests.interceptors.request.use((config) => {
    // config:配置对象，对象里面有一个属性很重要，header请求头
    // 进度条开始动
    nprogress.start()
    return config
})

// 响应拦截器：
requests.interceptors.response.use((res) => {
    // 成功的回调函数：服务器相应数据返回来以后，响应拦截器可以检测到，可以做一些事情
    // 进度条结束
    nprogress.done()
    return res.data
}, (error) => {
    // 响应失败的回调函数
    return Promise.reject(new Error('false'))
})

// 对外暴露
export default requests