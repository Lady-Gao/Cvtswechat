
import Vue from 'vue'
import config from "./config";
import store from "../store/index"

var Fly = require("flyio/dist/npm/wx")
const fly = new Fly

Vue.prototype.$fly = fly
Vue.prototype.$COMMON = config
Vue.prototype.$store = store;