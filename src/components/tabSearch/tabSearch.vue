<template>
    <div >
      <van-tabs :active="tabsIndex" @change="tabsChange">
     <van-tab title="标签 1">
     
       <van-field label='开始时间' type='number' placeholder='2018-09-24 13:59:59' :value="SEtim[0]"></van-field>
       <van-field label='结束时间' type='number' placeholder='2018-09-24 13:59:59' :value="SEtim[1]"></van-field>

       <van-picker :columns="columns" :default-index='pickIndex' @change="pickerChange"/>

      <van-button @click="landTab2">搜索</van-button>
        </van-tab>
        <van-tab title="标签 2" :disabled="tabsdisabled">
          <!-- 多车 -->
          <historytrack v-if="tabs1Name=='historytrack'&&tabsIndex=='1'" :data='params'></historytrack>
        </van-tab>
      </van-tabs>
    </div>
</template>

<script>
import multiCarMap from "./tabs/multiCarMap";
import historytrack from "./tabs/historytrack";
    export default {
      props:{
         tabs1Name:{
           type:String,
           default: 'historytrack'
         }
      },
        data(){
            return {
              tabsdisabled:true,
                tabsIndex:'0',
                pickIndex:'0',
                vehicleId:'5210997679423329',
                columnsList:[
                  {palteCode:'势A17788', vehicleId: 5210997679423329},
                  {palteCode:'民航C81026', vehicleId: 1073000856247349886},
                  {palteCode:'沪QQ7781', vehicleId: 2059029861699900082},
                  {palteCode:'沪ANS320', vehicleId: 5046830642271902},
                  ],
                SEtim:[
                  // this.$COMMON.formatDate(new Date()),
                  //  this.$COMMON.formatDate(new Date()),
                  '2019-06-26 13:00:00',
                  '2019-06-26 15:06:39'
                ],
               params:{}
               
            }
        },
        components:{
          multiCarMap,historytrack
        },
        computed:{
          /**
           * 车牌号
           */
          columns(){
            return this.columnsList.map(item=>{
              return item.palteCode
            })
          }
        },
        created(){
        },
        methods: {
           
            /**
             * tab改变事件
             */
            tabsChange(val){
              this.tabsIndex=val.mp.detail.index
            },
            /**
             * 车辆选择事件
             */
            pickerChange(val){
              this.pickIndex=val.mp.detail.index
            },
            /**
             * 请求数据
             * 跳转tab2
             */
            landTab2(){
              this. params={
                vehicleId: this.vehicleId,
                startTime: this.SEtim[0],
                endTime: this.SEtim[1],
                isCompress: true,
                isAllLocations: false,
                mapType: 3,
                trackType: 0,
                isPoi: true
              }
              this.tabsdisabled=false
              this.tabsIndex='1'
            } 
            /**
             * 获取车辆数数据
             */
            // getTreeData() {
            //     this.$store.dispatch('getTreeData').then(res=>{
            //       console.log(res)
            //         if(res.data.flag){
            //           this.treeList=res.data.data
            //         }
            //     })
            // },
           
        },
        watch:{
          /**
           * 监听当前车辆取vehicleid
           */
          pickIndex(val){
            this.vehicleId=this.columnsList[val].vehicleId
          }
        }
    }
</script>

<style scoped>

</style>