import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);
/**
 * https://webpack.js.org/guides/dependency-management/#requirecontext
 * 不需要再使用Import方式来引用
 * 这里会require所有的模块从“./modules”目录下，关于require.context是webpack的api。可参考上面链接
 * 里面包含了resolve、keys、id三个属性
 * 如果分了多级目录，那么第二个参数为true
 */
const modulesFiles = require.context("./modules", false, /\.js$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    //index.js会转换成index，即index.js=>index
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
    const value = modulesFiles(modulePath);
    //default
    modules[moduleName] = value.default;
    return modules;
}, {});
export default new Vuex.Store({
    modules
})