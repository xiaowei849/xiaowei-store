import { reqGetSearchInfo } from "@/api"
// search模块的小仓库
const state = {
    // 仓库初始化状态
    searchList: {}
}
const mutations = {
    GETSEARCHLIST(state, searchList) {
        // 处理不正常商品
        searchList.goodsList.forEach(good => {
            if (
                good.title.length < 5 ||
                good.price < 10 ||
                good.price > 50000 ||
                !good.defaultImg
            ) {
                good.price = "0";
                good.title = "获取标题失败";
                good.defaultImg = "";
            }
        })
        // 处理不正常的售卖属性
        searchList.attrsList = searchList.attrsList.filter(item => !parseInt(item.attrName) > 0)
        state.searchList = searchList
    }
}
const actions = {
    // 获取search模块的数据
    async getSearchList({ commit }, params = {}) {
        let result = await reqGetSearchInfo(params)
        if (result.code === 200) {
            commit('GETSEARCHLIST', result.data)
        }
    }
}
// 简化仓库中的数据
const getters = {
    // 当前形参的state是当前仓库的state，并非大仓库的state
    goodsList(state) {
        return state.searchList.goodsList || []
    },
    attrsList(state) {
        return state.searchList.attrsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList || []
    }
}
export default {
    state,
    mutations,
    actions,
    getters
}