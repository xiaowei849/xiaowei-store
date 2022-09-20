import { reqAddressInfo, reqOrderInfo } from "@/api";

const state = {
    address: [],
    order: {}
}

const mutations = {
    // 地址列表
    GETADDRESSINFO(state, address) {
        state.address = address.length ? address : [
            {
                "id": 2254,
                "userAddress": "海珠区阅江西路222号",
                "userId": 2,
                "provinceId": 6,
                "consignee": "小伟",
                "phoneNum": "13700000000",
                "isDefault": "0",
                "regionId": 2,
                "fullAddress": "广州市海珠区阅江西路222号"
            },
            {
                "id": 2255,
                "userAddress": "东城区中华路12号",
                "userId": 2,
                "provinceId": 1,
                "consignee": "李子龙",
                "phoneNum": "13578966581",
                "isDefault": "1",
                "regionId": 1,
                "fullAddress": "北京市东城区中华路12号"
            }
        ]
    },
    // 购物清单
    GETORDERINFO(state, order) {
        state.order = order
    }
}

const actions = {
    // 获取地址信息
    async getAddressInfo({ commit }) {
        let result = await reqAddressInfo()
        if (result.code == 200) {
            commit('GETADDRESSINFO', result.data)
            return 'ok'
        }
    },
    // 获取订单清单数据
    async getOrderInfo({ commit }) {
        let result = await reqOrderInfo()
        if (result.code == 200) {
            commit('GETORDERINFO', result.data)
        }
    }
}

const getters = {}

export default { state, mutations, actions, getters }
