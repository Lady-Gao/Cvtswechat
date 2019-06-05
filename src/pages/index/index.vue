<template>
  <div>
`
  </div>
</template>

<script>
export default{
  data(){
    return {

    }
  },
  created () {
    
    this.login()
  },
  methods: {
    /**
     * 请求数据
     */
    login() {
      
     this.$fly.post('ttp://test.cvtsp.com/api/login',{
        enterpriseCode:111111111,
        account:'admin',
        password:'18f4f4d01f8ec4393a12e25521980cb26ad0484783ec6fdc431cc51a8aed71e5385bd22e691736cc504df19a10e6296487d6bd0f2be9e4215a910690162530b8',
        language:'zh_CN'
      }).then(res=>{
        console.log(res)
      })
    },
  },
  mounted(){
      console.log(this)

  }
}
</script>
