<template>
    <nav>
        <!-- <header>电影</header> -->
        <!-- 声明式导航。会自动转换为a标签，这里不用加#，这是组件，会自动加#。支持tag属性，改为li标签，仍可像a标签一样可几点跳转。加属性activeClass，rounter-link组件知道此时在哪个路径上，会动态的将active加给哪个标签，就形成高亮效果 -->
        <ul>
            <router-link to='/film/nowplaying' tag='li' activeClass='active'>正在上映</router-link>
            <router-link to='/film/comingsoon' tag='li' activeClass='active'>即将上映</router-link>
        </ul>
    </nav>
</template>

<style lang="scss" scoped>
    .active{color: red; border-bottom: 5px solid red;}

    ul{
        display: flex;
        li{
            flex: 1;
            height: 40px;
            line-height: 40px;
            text-align: center;
        }
    }

    .fixed{
        position: fixed;
        left: 0px;
        top: 40px;
        width: 100%;
        height: 40px;
        background: white;
    }
</style>
