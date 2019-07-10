<template>
  <div class="home">
      <div>
             <img src="https://static.maizuo.com/v5/upload/2ca6f424a5d43e2928847ad65a807666.jpg?x-oss-process=image/quality,Q_70" alt="">
      </div>
      <div id="NavTop">
             <li><router-link to="/Home/Hotshow"> 正在热映</router-link> </li>
            <li><router-link to="/Home/Comming"> 即将上映 </router-link></li>
      </div>
         <transition mode="out-in" enter-active-class="animated slideInLeft" >
        <router-view />
      </transition>
</div>
</template>

<script>

// import HelloWorld from '@/components/HelloWorld.vue'

export default {
 
  components: {
    // HelloWorld
  },
   created(){
   
}
}
</script>
<style scoped>
  img{
    width:100%
  }
  #NavTop{
      height: 0.98rem;
      width: 100%;
      display: flex;
      position:sticky;
      top:0;
      background: #fff;
      border-bottom: 0.02rem solid #f8f8f8;
  }
  #NavTop li{
    display:flex;
    flex: 1;
    justify-content:center;
    align-items:center;
  }
 

</style>