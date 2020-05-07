<template>
  <div>

    <!-- <tabbar v-show="$store.state.isTabbarShow"></tabbar>  而在模板中从来不加this -->
    <!-- <tabbar v-show="computedShow"></tabbar>  定义一个计算属性 -->
    <tabbar v-show="isTabbarShow"></tabbar>
    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
import tabbar from '@/components/Tabbar'

// import obj from '@/module/moduleA'  //es6 导入-1 -全部导入
// import {mapState, mapFilter} from '@/module/moduleB'  //es6 导入-2，-好处：可以只导入几个想要用的方法

import {mapState} from 'vuex'  //es6的另一种导入方法，导入vuex中的mapState方法

import bus from '@/bus'

// console.log(mapState);  //直接导出了mapState这个方法

// ES6 标准导出
export default {
  data () {
    return {
      
    }
  },

  // beforeMount(){
  //   //监听事件
  //   bus.$on('zhong1', (data)=>{
  //     console.log('接受detail', data);
  //     this.isShow = data;
  //   })
  // },

  mounted(){
    console.log('app-mounted');
    //监听事件

  },

  //计算属性，返回值是什么，结果就是什么，定义起来像函数，使用起来像属性

  //计算属性-- 第一种写法
  // computed:{
  //   computedShow(){
  //     return this.$store.state.isTabbarShow;
  //   }
  // },

  //计算属性-- 第二种写法。但这种写法有一个缺点，如果当前页面有自己的计算属性，这个会被覆盖，所以这种基本没人用
  // computed: mapState(['isTabbarShow']),  //里面有一个计算属性，一会返回true，一会返回false。 mapState(['isTabbarShow']) === {isTabbarShow(){return false}} 返回值还是一个大对象，只是这个大对象返回的是一个函数

  //计算属性-- 第三种写法
  computed:{
    ...mapState(['isTabbarShow']),  //es6的展开运算符，把这个对象展开。数组合并，把1 2 3拿出来放在这个数组里，在把4 5 6拿出来放在这个数组里，[...a, ...b, 7, 8, 9] --> [1,2,3,4,5,6,7,8,9]。也可将对象合并。
    //然后就可以写该页面自己的计算属性
    a(){
      return 'a'
    },
    b(){
      return 'b'
    }
  },

  components: {
    tabbar
  }
}
</script>

<style lang='scss'>
  ul{
    li{list-style: none; }
  }

  *{margin: 0; padding: 0;}
  html, body{height: 100%;}

  section{
    margin-bottom: 50px;
  }
</style>
