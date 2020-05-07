<template>
  <div>
    
    
    <ul>
      <li v-for="data in datalist" :key="data.id" @click='handleClick(data.id)'>
          <img :src="data.img" alt="">
          <h3>{{data.nm}}</h3>
          <p>主演：{{data.star | actorsfilter}}</p>
        </li>
    </ul>
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
    
    axios.get('@/assets/json/maoyan.json').then(res=>{
        console.log(res.data);
      this.datalist = res.data.movieList;
    })
  },

  methods: {
    handleClick (id) {
      // 跳转路由--编程式导航-路径跳转
      // this.$router.push(`/detail/${id}`) // this.$router对象就是(router/index.js导出来的对象)在main.js中初始化时，自动做成了实例的属性$router其有个方法push跳转方法，

      // 跳转路由--编程式导航-名字跳转
      this.$router.push({name:'detail', params:{id:id}});
    },
    
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
