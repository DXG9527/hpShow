import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
import Element  from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import './app/style/icon.less'

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Element);

new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
});
