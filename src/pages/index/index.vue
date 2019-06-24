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
        <span @click="login">Login</span>
    </div>
    <!-- bottom tab -->
    <van-goods-action>
  <van-goods-action-icon icon="chat-o" text="home" />
  <van-goods-action-icon icon="cart-o" text="jk"  />
  <van-goods-action-icon icon="cart-o" text="gl"  />
</van-goods-action>
  </div>
</template>

<script>
export default{
  data(){
    return {
       enterpriseCode: "111111111",
        name: "admin",
        passWord: "18f4f4d01f8ec4393a12e25521980cb26ad0484783ec6fdc431cc51a8aed71e5385bd22e691736cc504df19a10e6296487d6bd0f2be9e4215a910690162530b8",
        language:'zh_CN'
    }
  },
  created () {
  
    
  },
  methods: {
    /**
     * 登陆请求数据
     */
    login() {
     this.$fly.get(this.$config.baseUrl+'/login?enterpriseCode='+this.enterpriseCode+'&account='+this.name+'&password='+this.passWord+'&language='+this.language)
     .then(res=>{
       const {flag,data}=res.data
       if(flag){

         this.$store.commit('SETUSER',data)
         console.log( this.$COMMON)
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
  },
  mounted(){

  },
  watch: {
  }
}
</script>
