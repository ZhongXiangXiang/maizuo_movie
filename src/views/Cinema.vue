<template>
  <div class="cinema_container" :style="{height:cinemaheight}">
    <!-- <header>影院</header> -->
    <ul>
      <li v-for="data in datalist" :key="data.cinemaId">
        {{data.name}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import BetterScroll from 'better-scroll'
export default {
  data(){
    return {
      datalist:[],
      cinemaheight:'0px'
    }
  },

  mounted(){
    this.cinemaheight = document.documentElement.clientHeight - 50 + 'px';  //等于当前页面的高度
    axios({
      url:"https://m.maizuo.com/gateway?cityId=310100&ticketFlag=1&k=3302442",
      headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"1584856153910533068055","bc":"310100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res=>{
      console.log(res.data);
      this.datalist = res.data.data.cinemas;

      //数据渲染完，不一定dom节点就渲染完
      this.$nextTick(()=>{
        var myscroll = new BetterScroll('.cinema_container', {
          //增加滚动条
          scrollbar:{
            fade: true,
            interactive:false  // 1.8.0新增
          },
          //上栏加载
          pullUpLoad:{
            threshold: 50
          }
        });

        // 用myscroll监听事件
        myscroll.on('pullingUp', ()=>{
          console.log('到底了');  // 然后做数据请求，往里插入东西
          this.datalist.push({
            cinemaId:'232111111111144',
            name: '到底了'
          })
          myscroll.refresh(); // 插入完数据后，重新计算高度
        })
      })
    })
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
    background-color: white;
    line-height: 40px;
    text-align: right;
    font-size: 18px;
  }
ul{
  padding-top: 41px;
  overflow: hidden;
  li{
    height: 50px;
    padding-left: 20px;
  }
}
.cinema_container{
  overflow: hidden;  //hidden溢出隐藏，浏览器不管，管不了了；auto还是浏览器管。
  position: relative;  // 修正滚动条位置，不超出底部别人的位置
}
</style>
