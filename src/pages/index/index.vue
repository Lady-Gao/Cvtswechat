<template>
  <div>
    <div>
        <van-field
          left-icon="contact"
          label='公司编号'
          v-model="enterpriseCode"
          placeholder="请输入公司编号"
          @change='onchangeEnterpriseCode'
        />
        <van-field
          left-icon="contact"
          label='用户名'
          v-model="name" 
          placeholder="请输入用户名"
          @change='onchangeName'
        />
        <van-field
          left-icon="contact"
          label='密码'
          v-model="passWord"
          type="password"
          placeholder="请输入用户密码"
          @change='onchangePassWord'
        />
        <van-button plain type="primary" @click="login">Login</van-button>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return {
       enterpriseCode: "11111111",
        name: "admin",
        // passWord: "18f4f4d01f8ec4393a12e25521980cb26ad0484783ec6fdc431cc51a8aed71e5385bd22e691736cc504df19a10e6296487d6bd0f2be9e4215a910690162530b8",
        passWord:'de6976852ac3933f61b8e1e66e796f6c2c7ca8ddc4e6d37b594dc8ecbc3ad5d7a636a80c416f1333bcfd6090d66eb53909b3e27b1c9a2ae110df22ad21ee6e8e',
        language:'zh_CN'
    }
  },
  mounted() {
    /**
     * 如果已经登陆直接跳转页面
     */
    if(wx.getStorageSync('userInfo')){
      this.$router.push({path:"/pages/monitorPlatform/multiCar/main"})
    }
    
  },
  methods: {
    /**
     * 登陆请求数据
     */
    login() {
     this.$http({
       url:'/login?enterpriseCode='+this.enterpriseCode+'&account='+this.name+'&password='+this.passWord+'&language='+this.language,
       method:'get'
     })
     .then(res=>{
       const {flag,data}=res.data
       if(flag){
         //存储用户信息
         this.$store.commit('SETUSER',data)
         //页面跳转
         this.$router.push({path:"/pages/monitorPlatform/multiCar/main"})
       }
      })
    },
    onchangeEnterpriseCode(val){
      this.enterpriseCode=val.mp.detail
    },
    onchangeName(val){
      this.name=val.mp.detail
    },
    onchangePassWord(val){
      this.passWord=val.mp.detail
    },
  }
}
</script>
