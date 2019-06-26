import $http from "../../utils/fly";
import zip from "../../utils/zip";
export default{
    state:{
      listAll: [], //所有轨迹
    },
    mutations:{
      FINDDAILYMILEAGE(state,params){
        state.listAll=JSON.parse(params.listAll)

      }
    },
    actions:{
        /**
         * 请求车辆数数据
         */
        getTreeData({commit}) {
           return $http({
                url: '/monitor/findVehicleTreeInfoList',
                method: 'POST'
            })
        },
         /**
          * 请求轨迹回放
          */
        findDailyMileage({commit},params){
          return $http({
              url: '/vtrack/findDailyMileage.do',
              method: 'POST',
              params,
              responseType: "arraybuffer"
            }).then(result => {
              const zipData = JSON.parse(zip.methods.unzip(result.data));
                commit('FINDDAILYMILEAGE', zipData)
            })
        }
    },
    getters: {
       listAll(state){
         return state.listAll
       }
    }
}