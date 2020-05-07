<template>
  <div>
    <div class="login">
        <i class="iconfont icon-denglu"  @click="handleClick()"></i>
        <span  @click="handleClick">立即登录</span>
    </div>
    <div class="order"  @click="handleClick()">
        <div class="order_movie">
            <i class="iconfont icon-dingdan"></i>
            <br>
            <span>电影订单</span>
        </div>
        <div class="order_goods">
            <i class="iconfont icon-dingdan1"></i>
            <br>
            <span>商品订单</span>
        </div>
    </div>
    <div class="card" @click="handleClick()">
        <i class="iconfont icon-dianyingpiao"></i>
        <span>卖座券</span>
        <i class="iconfont icon-weimingmingwenjianjia_jiantou"></i>
    </div>
    <div class="redpacket"  @click="handleClick()">
        <i class="iconfont icon-hongbao"></i>
        <span>组合红包</span>
        <i class="iconfont icon-weimingmingwenjianjia_jiantou"></i>
    </div>
    <div class="balance"  @click="handleClick()">
        <i class="iconfont icon-yue"></i>
        <span>余额</span>
        <span>￥0</span>
        <i class="iconfont icon-weimingmingwenjianjia_jiantou"></i>
    </div>
    <div class="setting"  @click="handleClick()">
        <i class="iconfont icon-shezhi"></i>
        <span>设置</span>
        <i class="iconfont icon-weimingmingwenjianjia_jiantou"></i>
    </div>
  </div>
</template>

<script>

export default {
  
  methods:{
    handleClick(){
        this.$router.push('/login');
    }
  }
  // beforeRouteEnter (to, from, next) {   // 路由进入前的守卫
  //   // 在渲染该组件的对应路由被 confirm 前调用
  //   // 不！能！获取组件实例 `this`，组件还未实例化
  //   // 因为当守卫执行前，组件实例还没被创建
  //   if(false){
  //     next();
  //     // this.
  //   }else{
  //     next('/login');
  //   }
  // },
}
</script>

<style lang="scss" scoped>
*{
    margin: 0px;
    padding: 0px;
}
html{
    background-color: rgb(241, 241, 241);
}
 .login{
    //  width: 100%;
     height: 136px;
     background: orangered;
     padding: 64px 0px 0px 22px;
     i{
         font-size: 67px;
         margin-right: 20px;
         color: white;
         line-height: 136px;
         text-align: center;
     }
 }
 .order{
     width: 100%;
     height: 79px;
     border-bottom: 10px solid rgb(241, 241, 241);
    //  position: relative;
      .order_movie{
            width: 50%;
            height: 50px;
            line-height: 35px;
            text-align: center;
            //  position: absolute;
            //  left: 0px;
            float: left;
            margin-bottom: -10px;
            i{
                font-size: 26px;
                color: orange;
            }
         }
         .order_goods{
             width: 50%;
            height: 50px;
            line-height: 35px;
            text-align: center;
            //  position: absolute;
            //  right: 0px;
            float: right;
             i{
                 font-size: 26px;
                 color: green;
             }
         }
 }
.card, .redpacket, .balance, .setting{
    // width: 100%;
    height: 49px;
    border-bottom: 1px solid rgb(241, 241, 241);
    line-height: 49px;
    text-align: left;
    position: relative;
    padding: 0px 15px;
    i:first-of-type{
        // margin-left: 10px;
        font-size: 20px;
    }
    span{
        margin-left: 15px;
    }
    i:last-of-type{
        // margin-right: 10px;
        font-size: 16px;
        position: absolute;
        right: 15px;
    }
}
</style>
