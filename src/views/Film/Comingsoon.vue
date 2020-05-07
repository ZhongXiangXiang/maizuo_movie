<template>
  <div>
    <ul>
        <li v-for="data in comingsoonlist" :key="data.filmId" @click='handleClick(data.filmId)'> <!-- 将数据当成id传过来 -->
          <img :src="data.poster" alt="">
          <div>
            <h3>{{data.name}}</h3>
            <p>观众评分：{{data.grade}}</p>
            <p>主演：{{data.actors | actorsfilter}}</p> <!-- 过滤器 -->
            <p>{{data.nation}} | {{data.runtime}}分钟</p>
          </div>
        </li>
    </ul>
    <div class="noMore">-无更多电影-</div>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  mounted(){
    if(this.comingsoonlist.length === 0){
      //数据请求 -存储store
      this.$store.dispatch('GetComingSoonAction', '传去参数');
    }else{
      // console.log('使用缓存数据', this.$store.state.comingsoonlist);
      console.log('使用缓存数据state', this.comingsoonlist);  //用计算属性
      // console.log('使用缓存数据getters', this.$store.getters.filterComingSoonList);
      console.log('使用缓存数据getters', this.filterComingSoonList);
    }
  },

  computed:{
    ...mapState(['comingsoonlist']),
    ...mapGetters(['filterComingSoonList'])
  },

  methods: {
    handleClick (id) {
      // 跳转路由--编程式导航-路径跳转
      // this.$router.push(`/detail/${id}`) // this.$router对象就是(router/index.js导出来的对象)在main.js中初始化时，自动做成了实例的属性$router其有个方法push跳转方法，

      // 跳转路由--编程式导航-名字跳转
      this.$router.push({name:'detail', params:{id:id}});
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
    font-size: 14px;
    line-height: 50px;
    text-align: center;
    color: rgb(199, 194, 194);
  }
</style>
