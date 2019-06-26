

export default{
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
    }
      
}