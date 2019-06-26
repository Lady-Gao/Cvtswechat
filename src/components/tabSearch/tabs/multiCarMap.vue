<template>
    <div>
1dfdf
    </div>
</template>

<script>
    export default {
        props:{
            data:{}
        },
        created () {
            /**所有轨迹数据 */
            console.log(this.data)
            //   this.$store.dispatch('findDailyMileage',this.data).then(data=>{
            //      this.$store.getters.listAll
            //   })
        }
        
    }
</script>

<style scoped>

</style>