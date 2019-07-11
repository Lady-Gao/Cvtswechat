

export default{
  /***************************************************************************************事件格式转换 */
    /**
     * 
     * @param {*} date new Date()  返回字符串格式 "2019-06-25 17:04:019"
     */
    formatDate :function (date) {
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? ('0' + m) : m;
      var d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      var h = date.getHours();
      var minute = date.getMinutes();
      minute = minute < 10 ? ('0' + minute) : minute;
      var second = date.getSeconds();
      second = minute < 10 ? ('0' + second) : second;
      return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
    },
  /***************************************************************************************地图类方法 */
    loadCity:function (longitude, latitude) {
      return new Promise((resolve, reject) => {
        //这里的ak记得要使用百度申请的ak账号
        wx.request({
          url: 'https://api.map.baidu.com/geocoder/v2/?ak=GdPeCYD6KCzwzCqjG7R0XBaswX69wyPV&location=' + latitude + ',' + longitude + '&output=json',
          data: {},
          header: {
            'Content-Type': 'application/json'
          },
          success: function (res) {
            let city = res.data;
            resolve(city);
            //city为解析后的城市
          },
          fail: function () {
           reject("获取定位失败")
          },
        })
      })
    }
}