export default {
  state:{
  },
  mutations:{
    SETUSER(state,params) {
       wx.setStorageSync('userInfo', params)
    }
  },
  actions:{
    add({commit},param){
        
    }
  },
  getters:{
    a(state){
        return state.a
    }
  }
}