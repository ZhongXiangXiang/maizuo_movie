<template>
    <nav>
        <!-- 高亮效果：用BOM方法中的location.hash获得路径，在路径改变时添加高亮 -->
        <!-- <ul>
            <li>
                <a href="#/film">电影</a>
            </li>
            <li>
                <a href="#/cinema">影院</a>
            </li>
            <li>
                <a href="#/center">我的</a>
            </li>
        </ul> -->

        <!-- 声明式导航。会自动转换为a标签，这里不用加#，这是组件，会自动加#。支持tag属性，改为li标签，仍可像a标签一样可点击跳转。加属性activeClass，rounter-link组件知道此时在哪个路径上，会动态的将active加给哪个标签，就形成高亮效果 -->
        <ul>
            <router-link to='/film' tag='li' activeClass='active'>
                <span>电影</span>
                <i class="iconfont icon-dianying"></i>
            </router-link>
            <router-link to='/cinema' tag='li' activeClass='active'>
                <span>影院</span>
                <i class="iconfont icon-yingyuan"></i>
            </router-link>
            <router-link to='/center' tag='li' activeClass='active'>
                <span>我的</span>
                <i class="iconfont icon-wode"></i>
            </router-link>
        </ul>
        <!-- 图片用base64，因为页面下载下来后，图片的src中是路径还要向服务器发请求下载图片，发起了多次请求，不如将小图片打成base64格式，直接和页面请求时渲染出来，可减少请求的次数，提高页面性能，减少http请求。 -->
    </nav>
</template>

<script>
import '@/assets/iconfont/iconfont.css'
export default {
    
}
</script>

<style lang="scss" scoped>
    .active{color: red;}
    nav{
        position: fixed; bottom: 0px; left: 0px; width: 100%; height: 50px; line-height: 50px; background: gray;
        ul{
            display: flex;
            li{
                flex: 1;
                text-align: center;
            }
        }    
    }

</style>
