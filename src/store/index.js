
import { createStore } from 'vuex'

export default createStore({
  state: {
    orderList: []
  },
  mutations: {
    setOrderList(state, payload) {
      state.orderList.push(payload)
    },
    deleteOrder(state, payload) {
      let index = state.orderList.findIndex(v => v.id == payload.id)
      state.orderList.splice(index, 1)
    },
    resetOrder(state) {
      state.orderList = []
    }
  },
  actions: {
  },
  modules: {
  }
})
