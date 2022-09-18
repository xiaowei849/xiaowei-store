import { reqAddressInfo, reqOrderInfo } from "@/api";

const state = {
    address: [],
    order: {}
}

const mutations = {
    // 地址列表
    GETADDRESSINFO(state, address) {
        state.address = address
    },
    GETORDERINFO(state, order) {
        state.order = order
    }
}

const actions = {
    // 获取地址信息
    async getAddressInfo({commit}) {
        let result = await reqAddressInfo()
        if (result.code == 200) {
            commit('GETADDRESSINFO', result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error(resule.message || 'faile'))
        }
    },
    // 获取订单清单数据
    async getOrderInfo({commit}) {
        let result = await reqOrderInfo()
        if (result.code == 200) {
            commit('GETORDERINFO', result.data)
        } else {
            return Promise.reject(new Error(result.message || 'faile'))
        }
    }
}

const getters = {}

export default {state, mutations, actions, getters}
