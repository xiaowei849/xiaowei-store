import { reqCartList, reqDeleteCartById, reqUpdateCheckedById} from "@/api";

const state = {
    cartList: []
}

const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList
    }
}

const actions = {
    // 获取购物车数据
    async getCartList({ commit }) {
        let result = await reqCartList()
        if (result.code == 200) {
            commit('GETCARTLIST', result.data)
        }
    },
    // 删除购物车数据
    async deleteCartListBySkuId({commit}, skuId) {
        let result = await reqDeleteCartById(skuId)
        if (result.code == 200) {
            return 'ok'
        }else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 修改商品选中状态
    async updateCheckedBySkuId({commit}, {skuId, isChecked}) {
        let result = await reqUpdateCheckedById(skuId, isChecked)
        if (result.code == 200) {
            return 'ok'
        }else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 删除所有选中的产品a
    deleteAllCheckedCart({dispatch, getters}) {
        // context：小仓库
        // 获取购物车全部数据
        let promiseAll = []
        getters.cartList.cartInfoList.forEach(item => {
            let promise = item.isChecked == 1 ? dispatch('deleteCartListBySkuId', item.skuId) : ''
            promiseAll.push(promise)
        })
        // 只有所有都成功才成功
        return Promise.all(promiseAll)
    },
    // 全选/全不选
    updateAllCartIsChecked({dispatch, state}, isChecked){
        let promiseAll = []
        state.cartList[0].cartInfoList.forEach(item => {
            if (item.isChecked != isChecked) {
                let promise = dispatch('updateCheckedBySkuId', {skuId: item.skuId, isChecked})
                promiseAll.push(promise)
            }
        })
        // 全部成功才成功
        return Promise.all(promiseAll)
    }
}

const getters = {
    cartList() {
        return state.cartList[0] || {}
    }
}

export default {
    state, mutations, actions, getters
}