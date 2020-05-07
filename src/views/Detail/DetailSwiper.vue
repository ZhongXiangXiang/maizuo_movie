<template>
    <div :class="'swiper-container detail ' + swipername">
        <!-- {{perview}} -->
        <div class="swiper-wrapper">
                <slot></slot>
        </div>
        
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'  //引入swiper的css文件。
export default {
    mounted(){
        console.log('mounted');
        new Swiper('.'+this.swipername, {
            // loop: true,  // 循环模式选项
            slidesPerView: this.perview,
            spaceBetween: 5,
            freeMode: true,
            
        })
    },

    props:['perview', 'swipername']
}
</script>

<style lang="scss" scoped>
.swiper-wrapper {
    
    img{
        width: 100%;
    }
}
</style>