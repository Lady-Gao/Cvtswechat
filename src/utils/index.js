
import Vue from 'vue'
import config from "./config";
import store from "../store/index"
import common from "./common"

var Fly = require("flyio/dist/npm/wx")
const fly = new Fly

Vue.prototype.$fly = fly
Vue.prototype.$config = config
Vue.prototype.$COMMON = common
Vue.prototype.$store = store;