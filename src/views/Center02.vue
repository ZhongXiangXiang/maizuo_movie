<template>
  <div>
    <div>支持手势事件</div>
    <v-touch @swipeleft="onSwipeLeft" tag='p'>Swipe me!</v-touch>  <!-- v-touch组件(已在main.js中注册为了全局组件，这里不需再引入，直接使用)渲染的是div标签，用tag属性指定支持的标签 -->

    <mt-swipe :auto="4000">  <!-- 要自己设置一个高度 -->
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>

    <el-row>
      <el-button @click="handleclick()" size='mini'>默认按钮</el-button>  <!-- 这里是封装的组件，其封装时刚好可以这么用，添加一个点击事件。而我们自己封装的组件，不能这么使用，因为其不是普通的dom节点。如果不能正常使用，查文档，看看怎么用 -->
      <el-button type="primary" :circle='true'>主要按钮</el-button>  <!-- 要保证circle是布尔值，前面加冒号: -->
      <el-button type="success" :loading='true'>成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in 6" :key="item">
        <h3 class="medium">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
    <mt-button type="danger" size='large' @click='sheetVisible=!sheetVisible'>danger</mt-button>
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
  </div>
</template>

<script>
export default {
  data(){
    return {
      //actions 属性绑定一个由对象组成的数组，每个对象有 name 和 method 两个键，name 为菜单项的文本，method 为点击该菜单项的回调函数。将 v-model 绑定到一个本地变量，通过操作这个变量即可控制 actionsheet 的显示与隐藏。
      actions:[
        {
          name:'拍照',
          method:()=>{}
        },
        {
          name:'相册',
          method:()=>{}
        }
      ],
      sheetVisible:false
    }
  },

  methods:{
    onSwipeLeft(){
      console.log('onSwipeLeft');
    },
    handleclick(){
      console.log('click');
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

<style scoped>
 .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .mint-swipe{
    height: 200px;
  }
</style>
