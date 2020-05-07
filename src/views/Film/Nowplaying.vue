<template>
  <div>
    
    <ul v-infinite-scroll="loadMore" infinite-scroll-immediate-check='false' infinite-scroll-disabled='isDisabled'>  <!-- v-infinite-scroll指令，loadMore是自己封装的回调函数。infinite-scroll-disabled数据加载时禁用，一开始为false，不禁用。 -->
        <li v-for="data in datalist" :key="data.filmId" @click='handleClick(data.filmId)'> <!-- 将数据当成id传过来 -->
          <img :src="data.poster" alt="">
          <div>
            <h3>{{data.name}}</h3>
            <p>观众评分：{{data.grade}}</p>
            <p>主演：{{data.actors | actorsfilter}}</p> <!-- 过滤器 -->
            <p>{{data.nation}} | {{data.runtime}}分钟</p>
          </div>
        </li>
    </ul>
    <!-- <ul>
      <li v-for="data in datalist" :key="data.id" @click='handleClick(data.id)'>
          <img :src="data.img" alt="">
          <h3>{{data.nm}}</h3>
          <p>主演：{{data.star | actorsfilter}}</p>
        </li>
    </ul> -->
    <!-- <div>正在加载中...</div> -->
    <div class="noMore">-无更多电影-</div>
  </div>
</template>

<script>
import '@/filters/ActorsFilter'
import axios from 'axios'

export default {
  data () {
    return {
      datalist: [],
      isDisable:false,
      current:1,  //数据请求的接口有规律，pageNum=1 2 3 ...，设置开始是1
      total:0
    }
  },

  mounted(){
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=3053073',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1584856153910533068055","bc":"310100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res=>{
      console.log(res.data);
      this.datalist = res.data.data.films;
    })
    /* axios.get('@/public/json/maoyan.json').then(res=>{
      this.datalist = res.data.movieList;
    }) */
  },

  methods: {
    handleClick (id) {
      // 跳转路由--编程式导航-路径跳转
      // this.$router.push(`/detail/${id}`) // this.$router对象就是(router/index.js导出来的对象)在main.js中初始化时，自动做成了实例的属性$router其有个方法push跳转方法，

      // 跳转路由--编程式导航-名字跳转
      this.$router.push({name:'detail', params:{id:id}});
    },
    loadMore(){  //一刷新后就会检查一次是否到底，因为刚开始没有滚动条，也是到底状态。所以将其取消infinite-scroll-immediate-check='false'
      this.current++;  //每加载一次就加一次current
      this.isDisable = true;  //数据加载完禁用无限滚动
      console.log('到底了，ajax请求数据');
      //每次到底了，对比
      if(this.datalist.length === this.total){
        return ;
      }
      /* //2秒后，数据请求回来后，再触发。所以2秒内不会再次重复触发
      setTimeout(()=>{
        this.isDisable = false;
      }, 2000) */

      axios({
        url: `https://m.maizuo.com/gateway?cityId=310100&pageNum=${this.current}&pageSize=10&type=1&k=3053073`,
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1584856153910533068055","bc":"310100"}',
          'X-Host': 'mall.film-ticket.film.list'
        }
      }).then(res=>{
        console.log(res.data);
        this.datalist = [...this.datalist, ...res.data.data.films];
        this.isDisable = false  //开启无限滚动。
        this.total = res.data.data.total  //后端返回了一个total总个数，电影数
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  li{
    overflow: hidden;
    padding: 10px;
    img{
      width: 100px;
      // height: 100px;
      float: left;
    }
    div{
      width: 100%;
      padding-left: 120px;
      padding-top: 10px;
      color: gray;
      font-size: 14px;
      p{
        padding-top: 5px
      }
    }
  }
  .noMore{
    width: 100%;
    height: 50px;
    background: rgb(241, 240, 240);
    font-size: 13px;
    line-height: 50px;
    text-align: center;
    color: rgb(199, 194, 194);
  }
</style>
