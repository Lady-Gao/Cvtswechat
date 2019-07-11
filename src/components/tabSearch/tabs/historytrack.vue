<template>
    <div>dd
        <map id="map" 
        :longitude="127.399816" 
        :latitude="42.43709" 
        scale="14" 
        :markers="markers" 
        :polyline="polyline" 
        style="width: 100%; height: 300px;">
        </map>
    </div>
</template>

<script>
    export default {
        props:{
            data:{}
        },
        data(){
             return {
                markers: [],
                polyline:[],
              }
        },
        created () {
            /**所有轨迹数据 */
              this.$store.dispatch('findDailyMileage',this.data).then(res=>{
                  console.log(this.$store.getters.listAll,'list')
                  this.distribution()
                })
            // this.$http('http://api.map.baidu.com/api?v=2.0&ak=8GrVRotzGKj3xzIRu07hCzx2'  
            //  ).then(res=>{
            //      console.log(res.data)
            //     })
        },
        computed: {
            listAll(){
                return this.$store.getters.listAll
            }
        },
        methods: {
            /**
             * 初始化更新数据
             */
            distribution() {
                 let points=this.listAll.map(item=>{
                      return {longitude:item.mapLongitude,latitude:item.mapLatitude,locationDesc:item.locationDesc}
                  })
                 //线路
                  this.polyline=[
                 { 
                     points,
                     color:"#2196f3",
                    width: 5
                }]
                //marker起始点
                this.markers=[
                    {
                    iconPath: "/static/images/map/start1.png",
                    id: 0,
                    latitude: this.listAll[0].mapLatitude,
                    longitude: this.listAll[0].mapLongitude,
                    width: 28,
                    height: 35
                    },
                    {
                    iconPath: "/static/images/map/end1.png",
                    id: 1,
                    latitude: this.listAll[this.listAll.length-1].mapLatitude,
                    longitude: this.listAll[this.listAll.length-1].mapLongitude,
                    width: 28,
                    height: 35
                    },
                    
                ]
            },
        },
    }
</script>

<style scoped>

</style>