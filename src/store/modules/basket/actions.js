export default {
    create({commit}, param) {
        commit('ADD_PRODUCT_ITEM', param)
    },
    remove({commit}, param) {
        commit('REMOVE_PRODUCT_ITEM', param)
    }
}
