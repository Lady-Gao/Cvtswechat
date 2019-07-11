<template>
    <div class='forensic'>
        <div v-show='src' class='picBox'>
            <image  mode="widthFix" :src="src"></image>
            <div id='adderss'><ipadderss /></div>
        </div>
         <camera device-position="back" flash="off" binderror="error" style="width: 100%; height: 300px;"></camera>
        <button type="primary" @click="takePhoto">拍照</button>
    </div>
</template>

<script>
import ipadderss from "../../components/page/ipadderss";
    export default {
        components:{
           ipadderss
        },
        data() {
            return {
                 src:""
            }
        },
         methods: {
            takePhoto() {
                var _self=this
                const ctx = wx.createCameraContext()
                ctx.takePhoto({
                quality: 'high',
                success: (res) => {
                    
                     _self.src=res.tempImagePath
                }
                })
            }
        },
        
    }
</script>

<style scoped lang='scss'>
.forensic{
    position: relative;
    .picBox{
        height:800px;
    }
    image{
        position: absolute;
    }
    #adderss{
        position: absolute;
    }
}
</style>