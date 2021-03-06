import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'
import { Carousel, CarouselItem } from 'element-ui'
import secondComponent from './components/SecondComponent.vue'
import firstComponent from './components/FirstComponent.vue'
import loginComponent from './components/LoginComponent.vue'

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Carousel);
Vue.use(CarouselItem);

// 定义组件, 也可以像教程之前教的方法从别的文件引入
// const First = { template: '<div><h2>我是第 1 个子页面</h2></div>' };

// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/first',
            component: firstComponent
        },
        {
            path: '/second',
            component: secondComponent
        },
        {
            path: '/login',
            component: loginComponent
        },
    ]
});

// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#root');

// new Vue({
//   el: '#app',
//   render: h => h(App)
// });
