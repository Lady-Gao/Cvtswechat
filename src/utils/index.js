
import Vue from 'vue'
import config from "./config";
import store from "../store/index"
import common from "./common"
import http from "./fly";

Vue.prototype.$http = http
Vue.prototype.$config = config
Vue.prototype.$COMMON = common
Vue.prototype.$store = store;