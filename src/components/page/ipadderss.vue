<template>
    <div class='ipadderss'>
<van-row>
    <van-icon name="location-o" />地址: {{adderss.formatted_address}}
</van-row>
<van-row>
   <van-icon name="location-o" />经度：{{adderss.location.lng}} 
</van-row>
<van-row>
    <van-icon name="location-o" />纬度：{{adderss.location.lat}}
</van-row>
<van-row>
     <van-icon name="underway-o" />时间: {{timer}}
</van-row>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                adderss:{
                    formatted_address:'',
                    location:{}
                },//位置信息
                timer:''
            }
        },
        created(){
            const _self=this
                //微信获取坐标
        wx.getLocation({
                type: 'wgs84', //默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标 
                success: function(res) {
                    //  res中longitude和latitude就是所获的的用户位置
                    //调用坐标解析方法
                  _self.$COMMON.loadCity(res.longitude, res.latitude).then(res=>{
                            _self.adderss=res.result
                            _self.timer=_self.$COMMON.formatDate(new Date())
                            console.log( _self.timer)
                  })
                }
            })
        }
        
    }
</script>

<style scoped lang='scss'>
.ipadderss{
    background-color: rgba(0, 0, 0, 0.1);
    padding-top: 30px;
    text-align: center;
    ._van-row{
        height: 60px;
        display: block;
    }
}
</style>