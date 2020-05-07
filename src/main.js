import Vue from 'vue' // ES6 标准导入写法。commonJS写法--> var Vue = require('vue');
import App from './App.vue' // .vue好用，是webpack帮忙解析了的
import router from './router'
import store from './store'

import $ from 'jquery' ;

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

//引入PC端的组件库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';  //引入其css样式
Vue.use(ElementUI)  //注册

//引入移动端组件库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)  //而indicator是服务中的一个对象，需要单独引入

//引入vue-touch
var VueTouch = require('vue-touch')
Vue.use(VueTouch, {name: 'v-touch'})

Vue.config.productionTip = false

new Vue({
  router,
  store,  //简写store: store，即将store整个引入项目中
  render: h => h(App)
}).$mount('#box')

// render: function(h){
//   return h(App)
// }
