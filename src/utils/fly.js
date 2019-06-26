import config from "./config";
var Fly = require("flyio/dist/npm/wx")
var fly = new Fly
/**
 * 请求拦截
 */
fly.interceptors.request.use((request) => {
      //给所有请求添加自定义header
      if (wx.getStorageSync('token')) {
        request.timeout = 30000,
          request.headers = {
            "token": wx.getStorageSync('token')
          }
        wx.showLoading({
          title: "加载中",
          mask: true,
        });
        return request;
      }
      fly.unlock()

    })
/**
 * 响应拦截
 */
fly.interceptors.response.use(
    (response) => {
      wx.hideLoading();
      return response
    },
    (err) => {
      wx.hideLoading();
      if (err.status == 0) {
        return "网络连接异常"
      } else if (err.status == 1) {
        return "网络连接超时"
      } else if (err.status == 401) {
        return "用户未登录"
      } else {
        if (err.response.data.message) {
          return err.response.data.message
        } else {
          return '请求数据失败,请稍后再试'
        }
      };
      // Do something with response error
    }
  )

var http = function (data) {
    return fly.request({
      ...data,
      url: config.baseUrl + data.url,
    })

}
export default http