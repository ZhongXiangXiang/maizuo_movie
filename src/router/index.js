import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '@/views/Film.vue'
import Nowplaying from '@/views/Film/Nowplaying'
import Comingsoon from '@/views/Film/Comingsoon'

import Cinema from '@/views/Cinema.vue'
import Center from '@/views/Center.vue'
import Detail from '@/views/Detail.vue'
import City from '@/views/City.vue'
import Login from '@/views/Login.vue'

Vue.use(VueRouter) // 注册路由模块

const router = new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/film', // 加载film组件
      // name: 'Home',
      component: Film,
      children: [
        {
          path: 'nowplaying', // film/nowplaying，只要写组件名字就行，会自动拼上路径
          component: Nowplaying
        },
        {
          path: 'comingsoon',
          component: Comingsoon
        },
        {
          path: '', // 因为已经在film里面了，这里是直接是'/film'，然后匹配到'/film/nowplaying'
          redirect: '/film/nowplaying'
        }
      ]
    },
    {
      path: '/cinema',
      // name: 'Home',
      component: Cinema
    },
    {
      path: '/city',
      // name: 'Home',
      component: City
    },
    {
      path: '/center',
      alias: '/wode', // 路由别名，路径输入'/center'或'/wode'都会跳转到Center路由
      // name: 'Home',
      component: Center
    },

    // 动态路由配置
    {
      path: '/detail/:id', // 想要路径/detail/1111    detail/2222。加/:id，id是不固定的，冒号是占位符，:id是获取将来属性的值。动态路由可传多个值，'/detail/:id/:id2/:id3'
      name: 'detail', // 路由名字，可通过名字跳转，在Nowplaying.vue中
      component: Detail
    },

    {
      path: '/login',
      // name: 'Home',
      component: Login
    },

    {
      path: '*', // * 匹配所有文件到/film路径，除了存在的文件
      redirect: '/film'
    }

  ]
})

const user = {
  isLogin(){
    return true;  // 没有token为flase，有为true
  }
}

//全局守卫，不再有重定向功能，要先拦截
router.beforeEach((to, from, next) => {
  // console.log(to);
  if(to.path === '/center'){
    if(user.isLogin()){
      next();
    }else{
      next('/login');  // 到login页面
    }
  }else{
    next(); // 如果是/center路径，就拦截，不是，就运行跳转，next()表示允许过去
  }
})

export default router
