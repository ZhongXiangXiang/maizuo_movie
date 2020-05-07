<template>
    <div class="swiper-container zhong">
        <div class="swiper-wrapper">
                <slot></slot>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        
        
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'  //引入swiper的css文件。
export default {
    mounted(){
        console.log('mounted');
        new Swiper('.zhong', {
            loop: true,  // 循环模式选项
            pagination: {
                el: '.swiper-pagination',
            },
            /* autoplay: {
                delay: 2500,
                disableOnInteraction: true,
            }, */
            // speed:3000,
// 　　        autoplayDisableOnInteraction : false, // 这样，即使我们滑动之后， 定时器也不会被清除
            
        })
    }
}
</script>

<style lang="scss" scoped>
.swiper-wrapper {
    
    img{
        width: 100%;
    }
}
</style>