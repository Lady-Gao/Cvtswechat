export default {
  state:{
  },
  mutations:{
    SETUSER(state,params) {
       wx.setStorageSync('userInfo', params)
       wx.setStorageSync('token', params.token)
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