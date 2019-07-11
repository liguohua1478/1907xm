<template>
    <div>
        <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in list">
            <img :src="item.picUrl" />
        </div>
        
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <!-- <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div> -->
    
    <!-- 如果需要滚动条 -->
    <!-- <div class="swiper-scrollbar"> -->
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import "swiper/dist/css/swiper.css"
export default {
    data(){
        return{
            list:[]
        }
    },
    created(){
        this.$axios.get("http://47.100.53.108:8081/banner").then((res)=>{
            this.list=res.data.banners;
            //console.log(res.data.banners)
        })
    },
    mounted(){
                
    },
    watch:{
        list(){
            this.$nextTick(()=>{
                var mySwiper = new Swiper ('.swiper-container', {
                //direction: 'vertical', // 垂直切换选项
                loop: true, // 循环模式选项
                autoplay: {
                delay: 3000,
                // stopOnLastSlide: false,
                disableOnInteraction:false,
                },
                
                // 如果需要分页器
                pagination: {
                el: '.swiper-pagination',
                },
                
                // 如果需要前进后退按钮
                navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                },
                
                // 如果需要滚动条
                // scrollbar: {
                // el: '.swiper-scrollbar',
                // },
            })
            })
            
        }
    }
}
</script>
<style>
.swiper-container{
    width:7.9rem;
    height:3.5rem;
}
.swiper-slide img{
    width:7.9rem;
    height:3.6rem;
    display: block;
}
.swiper-pagination-bullet-active {
    opacity: 1;
    background: #d44439;
}
</style>