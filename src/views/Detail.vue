<template>
  <div v-if="filminfo">  <!-- 等filminfo有数据了再渲染 -->
    <header v-show="isFixed">{{filminfo.name}}</header>
    <img :src="filminfo.poster" alt="" class="poster">
    <div class="title">
      <h2>{{filminfo.name}}</h2>
      <p>{{filminfo.category}}</p>
      <p>{{filminfo.nation}} | {{filminfo.runtime}}分钟</p>
      <p>{{filminfo.synopsis}}</p>
    </div>

    <div class="actors">
      <h3>演职人员</h3>
      <p v-show="isActors">暂无演职人员</p>
      <detailswiper perview='4' swipername='detail_actors'>
        <div class="swiper-slide" v-for="(item,index) in filminfo.actors" :key="index">
          <img :src="item.avatarAddress" alt="">
          <span>{{item.name}}</span>
          <br>
          <span>{{item.role}}</span>
        </div>
      </detailswiper>
    </div>

    <div class="photos">
      <h3>剧照</h3>
      <p v-show="isPhotos">暂无电影剧照</p>
      <detailswiper perview='3' swipername='detail_photos'>
        <div class="swiper-slide" v-for="(item,index) in filminfo.photos" :key="index">
          <img :src="item" alt="">
        </div>
      </detailswiper>
  </div>
    </div>
</template>

<script>
import axios from 'axios'
import detailswiper from './Detail/DetailSwiper'
import {SHOW_TABBAR_MUTATION, HIDE_TABBAR_MUTATION} from '@/type'  //这里只是将写死的字符串改成通过变量来控制字符串，是为了可维护。
import { MessageBox } from 'mint-ui';

// import bus from '@/bus'
export default {
  data(){
    return {
      filminfo: null,  //对象，初始化为null
      isActors: false,
      isPhotos: false,
      isFixed: false
    }
  },

  mounted () {
    console.log('detail-mounted');
    // console.log(location.hash); //BOM方法
    // 获取动态路由的参数
    // console.log(this.$route.params.id) // this.$route是当前显示的路由，即当前的detail路由，而this.$router是整个路由对象
    if(this.$route.params.id === '2119'){
      // MessageBox('提示', '操作成功');
      MessageBox({
        title: '提示',
        message: '该影片未排期，需要查看其他影片吗?',   //跳不出提示框?????????????????
        showCancelButton: true
      }).then(res=>{
        console.log(res);
        if(res==='confirm'){
          // console.log(this.$router);  //VueRouter的_proto_中有back、go、push等方法
          this.$router.back();  //back()返回上一页
        }
      })
    }

    // 1.隐藏底部选项卡
    // bus.$emit('zhong1', false)
    // this.$store.state.isTabbarShow = false;
    // this.$store.commit('HideTabbarMutation', false);  //同步，可不需actions
    this.$store.commit(HIDE_TABBAR_MUTATION, false);

    // 拿到id，进行ajax请求数据
    axios({
      url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.id}&k=9134809`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1584856153910533068055","bc":"310100"}',
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res=>{
      console.log(res.data);
      this.filminfo = res.data.data.film;
    })

    

    // window.onscroll = this.handleScroll;
  },
  updated(){
    window.onscroll = this.handleScroll;

    if(!this.filminfo.actors){
      this.isActors = true;
    }
    if(!this.filminfo.photos){
      this.isPhotos = true;
    }
  },
  methods:{
    handleScroll(){
      
      if(document.documentElement.scrollTop > 4){
        // fixed
        // console.log('fixed');
        this.isFixed = true;
      }else{
        // unfixed
        // console.log('unfixed');
        this.isFixed = false;
      }
    }
  },


  components:{
    detailswiper
  },

  beforeDestroy(){
    //2.显示底部选项卡
    // bus.$emit('zhong1', true)
    // this.$store.state.isTabbarShow = true;  //***不可这么写，耦合度过高，任何组件都可修改，也无法做时光旅行
    // this.$store.commit('ShowTabbarMutation', true);
    this.$store.commit(SHOW_TABBAR_MUTATION, true);
  },

  destroyed(){
    window.onscroll = null;  //关闭事件监听
  },
}
</script>

<style lang="scss" scoped>
.poster{
  width: 100%;
}
span{font-size: 12px;text-align: center;display: inline-block;}

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

h2,h3{font-weight: normal; font-size: 18px;}
.title{
  // width: 100%;
  height: 108px;
  padding: 10px;
  overflow: hidden;
  margin-bottom: 20px;
  p{
    color: gray;
    font-size: 14px;
    margin-top: 5px;
  }
}
.actors{
  height: 180px;
  border-top: 10px solid rgb(243, 241, 241);
  padding: 10px;
  p{
    color: gray;
    text-align: center;
    padding: 30px;
  }
  h3{
    margin-bottom: 10px;
  }
}
.photos{
  height: 200px;
  border-top: 10px solid rgb(243, 241, 241);
  padding: 10px;
  p{
    color: gray;
    text-align: center;
    padding: 30px;
  }
  h3{
    margin-bottom: 10px;
    /* div{
      text-align: center;
      img{
        display: inline-block;
        vertical-align: middle;
      }
    } */
  }
}

</style>
