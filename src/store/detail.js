import { reqGoodsInfo, reqAddOrUpdateShopCart} from "@/api";
import { getUUID } from '@/utils/uuid_token'
// detail模块小仓库
const state = {
    goodsInfo: {},
    // 游客临时身份
    uuid_token: getUUID()
}

const mutations = {
    GETGOODSINFO(state, goodsInfo) {
        state.goodsInfo = goodsInfo
    }
}

const actions = {
    // 获取产品信息的action
    async getGoodsInfo({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId)
        if (result.code === 200) {
            commit('GETGOODSINFO', result.data)
        }
    },
    // 将产品添加到购物车中
    async addOrUpdateShopCart({ commit }, {skuId, skuNum}) {
        // 加入购物车返回一个Promise对象
        let result = await reqAddOrUpdateShopCart(skuId, skuNum)
        // 当code为200代表加入购物车成功，否则失败
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    }
}

// 简化数据
const getters = {
    // 路径导航简化的数据
    categoryView(state) {
        return state.goodsInfo.categoryView || {}
    },
    // 产品信息的数据
    skuInfo(state) {
        return state.goodsInfo.skuInfo || {}
    },
    // 产品售卖属性的简化
    spuSaleAttrList(state) {
        return state.goodsInfo.spuSaleAttrList || []
    } 
}

export default {
    state, mutations, actions, getters
}