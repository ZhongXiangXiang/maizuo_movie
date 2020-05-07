import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {SHOW_TABBAR_MUTATION, HIDE_TABBAR_MUTATION} from '@/type'

Vue.use(Vuex)  //注册vuex模块

export default new Vuex.Store({
  state: {
    //共享状态
    isTabbarShow: true,
    comingsoonlist:[]  //缓存到了内存中
  },
  mutations: {
    [SHOW_TABBAR_MUTATION](state, payload){  //es6属性 变量名的写法。改成常量(const)的写法，为了可维护
      //显示tabbar
      state.isTabbarShow = payload;
    },
    [HIDE_TABBAR_MUTATION](state, payload){
      //隐藏tabbar
      state.isTabbarShow = payload;
    },
    ComingSoonMutation(state, payload){
      state.comingsoonlist = payload;
    }
  },
  actions: {
    GetComingSoonAction(store){  //将store实例传入
      //发ajax请求
      axios({
        url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=2&k=2840455',
        headers:{
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1584856153910533068055"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res=>{
        console.log(res.data);
        //
        store.commit('ComingSoonMutation', res.data.data.films);  //再提交到mutations中，操作状态
      })
    }
  },
  getters:{
    filterComingSoonList(state){
      return state.comingsoonlist.filter((item,index)=>index<5);
    }
  },
  modules: {
  }
})


// //es6支持，把属性做成从变量传过来的值，用中括号[]
// var name = 'key'
// var obj = {
//   [name]:'111'
// }