export default {
  state:{
      a:1
  },
  mutations:{
    ADD(state) {
       state.a = 3
    }
  },
  actions:{
    add({commit},param){
        commit('ADD')
    }
  },
  getters:{
    a(state){
        return state.a
    }
  }
}