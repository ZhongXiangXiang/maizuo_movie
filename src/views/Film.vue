<template>
  <div>
    <div class="city" @click="handleClick()">city</div>
    <filmswiper :key="datalist.length" ref="filmswiper">
      <div class="swiper-slide" v-for="data in datalist" :key='data.bannerId'>
        <img :src="data.imgUrl" >
      </div>
    </filmswiper>
    <header v-show="isFixed">电影</header>
    <filmnav :class="isFixed ? 'fixed' : ''"></filmnav>
    <div>
      <router-view></router-view>
      <!-- 路由容器 -->
    </div>
  </div>
</template>

<script>
import filmnav from './Film/FilmNav'
import filmswiper from './Film/FilmSwiper'
import axios from 'axios'
import { Indicator } from 'mint-ui';  //indicator是一个对象，而非组件，所以是需要单独引入

export default {

  data(){
    return {
      datalist: [],
      isFixed:false
    }
  },

  components: {
    filmnav,
    filmswiper
  },

  mounted(){
    //开启loading
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });

    axios({
      url: 'https://m.maizuo.com/gateway?type=2&cityId=310100&k=2333682',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1584856153910533068055","bc":"310100"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(res=>{
      console.log(res.data);
      this.datalist = res.data.data;

      //数据请求完后，关闭Loading框
      Indicator.close();
    })

    window.onscroll = this.handleScroll; // 这里不加小括号(),加了就是调用该函数，而该函数无返回值，结果会是undefined赋给window.onscroll
  },

  methods:{
    handleScroll(){
      // console.log(this.$refs.filmswiper.$el.offsetHeight);  //先通过this.$refs.filmswiper拿到组件对象，再通过$el拿到该组件对象的原生dom节点，并拿到其高度offsetHeight

      if(document.documentElement.scrollTop > this.$refs.filmswiper.$el.offsetHeight){
        // fixed
        // console.log('fixed');
        this.isFixed = true;
      }else{
        // unfixed
        // console.log('unfixed');
        this.isFixed = false;
      }
    },
    handleClick(){
      this.$router.push('/city');
    }
  },

  destroyed(){
    window.onscroll = null;  //关闭事件监听
  }

}
</script>
 
<style lang="scss" scoped>
  header{
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 40px;
    background: white;
    line-height: 40px;
    text-align: center;
  }
  .city{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: fixed;
    top: 5px;
    left: 5px;
    z-index: 10;
    background: rgba(65, 64, 64, 0.5);
    color: white;
    text-align: center;
  }
</style>
