import { reqGetCode, reqUserRegister, reqUserLogin, reqGerUserInfo, reqLogout } from "@/api"
import {getToken, setToken, removeToken} from '@/utils/token'

const state = {
    code: '',
    token: getToken(),
    userInfo: {}
}

const mutations = {
    // 获取验证码
    GETCODE(state, code) {
        state.code = code
    },
    // 写入token
    USERLOGIN(state, token) {
        state.token = token
        setToken(token)
    },
    // 获取用户信息
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo || {}
    },
    // 退出登录
    USERLOGOUT(state) {
        state.token = ''
        state.userInfo = {}
        removeToken()
    }
}

const actions = {
    // 获取验证码
    async getCode({commit}, phone) {
        let result = await reqGetCode(phone)
        if(result.code == 200) {
            commit('GETCODE', result.data)
        }else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 注册
    async userRegister({commit}, user) {
        let result = await reqUserRegister(user)
        // 登录成功，获得token
        if (result.code == 200) {
            commit('USERLOGIN', result.data.token)
            alert('注册成功！')
        }else {
            return Promise.reject(new Error(result.message || 'faile'))
        }
    },
    // 用户登录
    async userLogin({commit}, user) {
        let result = await reqUserLogin(user)
        if(result.code == 200) {
            commit('USERLOGIN', result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error(result.message || 'faile'))
        }
    },
    // 获取用户信息
    async getUserInfo({commit}) {
        let result = await reqGerUserInfo()
        if (result.code == 200) {
            commit('GETUSERINFO', result.data)
            return 'ok'
        }else {
            return Promise.reject(new Error(result.message || 'faile'))
        }
    },
    // 退出登录
    async userLogout({commit}) {
        let result = await reqLogout()
        if (result.code == 200) {
            commit('USERLOGOUT')
            return 'ok'
        } else {
            return Promise.reject(new Error(result.message || 'faile'))
        }
    }
}

const getters = {}

export default {state, mutations, actions, getters}