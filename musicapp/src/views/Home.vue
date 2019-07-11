<template>
  <div class="home">
    <router-view class="home_box"/>
<!-- 头部 -->
     <ul class="header">
        <li class="">
          <router-link to="/mine">
            <i class="iconfont icon-zhanghao"></i>
          </router-link>
        </li>
        <li>
          <router-link to="/search">
            <input type="text" placeholder="搜索" class="search_box" autofocus="autofocus">
            <i class="iconfont icon-fangdajing"></i>
            </router-link>
        </li>
        <li>
          <router-link to="/record">
            <i class="iconfont icon-liebiao"></i>
          </router-link>
        </li>
      </ul>


      <div class="box" v-gd="vis" dis="240">
        <!-- 吸顶 -->
        <div class="myheader" v-show="vis.flag">
           <ul class="nav" >
            <li >
              <router-link to="/recommend">
                <i class="iconfont icon-tuijian"></i>
                推荐
              </router-link>
            </li>
            <li>
              <router-link to="/ranking">
                <i class="iconfont icon-paixingbang"></i>
                排行榜
              </router-link>
            </li>
            <li>
              <router-link to="/singer">
                <i class="iconfont icon-geshou
    "></i>
                歌手
              </router-link>
            </li>
          </ul>
          
    </div>
 <!-- 轮播图 -->       
          <div class="swiper" >
            <mySwiper/>
          </div>
    <!-- 导航路由 -->
          <ul class="nav" >
            
            <li class="">
              <router-link to="/recommend">
                <i class="iconfont icon-tuijian"></i>
                推荐
              </router-link>
            </li>
            <li>
              <router-link to="/ranking">
                <i class="iconfont icon-paixingbang"></i>
                排行榜
              </router-link>
            </li>
            <li>
              <router-link to="/singer">
                <i class="iconfont icon-geshou
    "></i>
                歌手
              </router-link>
            </li>
          </ul>
          <div id="lists">
          <h3>推荐歌单</h3>
          <ul class="list">
            <li v-for="item in list">
                <img :src="item.picUrl"/>
                <p>{{item.name}}</p>
            </li>
          </ul>
          <h3>推荐歌曲</h3>
          <ul class="list">
            <li v-for="item in list1">
                <img :src="item.song.album.picUrl" />
                <i>{{item.name}}</i>
                <i>{{item.song.artists[0].name}}</i>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>

import mySwiper from '../components/mySwiper'
export default {
    name: 'home',
    components: {
       mySwiper
    },
    data(){
        return{
            type:'',
            list:[],
            list1:[],
            vis:{
                flag:false
            }
        } 
    },
    created(){
      //this.$router.push("/home/recommend");
      this.getData();
      this.getData1();
    },
    methods:{
        getData(){
            this.$axios.get("http://120.79.162.149:3000/personalized").then((res)=>{
            this.list=res.data.result;
            //console.log(res)
          })
        },
        getData1(){
            this.$axios.get("http://120.79.162.149:3000/personalized/newsong").then((res)=>{
            this.list1=res.data.result;
            console.log(res.data)
          })
        },
    },
    //  watch:{
    //     $route:{
    //         handler(newV){
    //                 if(newV.path==="/home/recommend"){
    //                 this.$router.push("/home/recommend/")
    //             }
    //             else{
    //                 this.type = newV.params.type;
    //                 //this.resetList();
    //                 this.getData();
    //             }
    //         },
    //         deep:true,
    //         immediate:true,
    //     }
    // }
}
    


</script>
<style>
.header{
  height: 0.88rem;
  width: 100%;
  background:#d44439;
  position:fixed;
  top:0;
  z-index:10;
  display:flex;
}
.header li{
  height: 100%;
  position: relative;
  display:flex;
  justify-content:center;
  align-items:center;
}
.header i{
  color:#fff;
  font-size:0.4rem;
  position:absolute;
  top:50%;
  left:50%;
  margin-left:-0.22rem;
  margin-top:-0.22rem;
}
.header li:nth-of-type(2) i{
  color:#999;
}
.header li:nth-of-type(1){
  flex: 1;
}
.header li:nth-of-type(3){
  flex: 1;
}
.header li:nth-of-type(2){
  flex: 6;
}
.search_box{
  width:4rem;
  height:0.46rem;
  padding:0 0.2rem;
  border-radius:0.2rem;
  border:none;
}
.box{
  position: fixed;
  top:0.88rem;
  bottom:0;
  right:0;
  left:0;
  overflow: auto;
}
.myheader{
  width: 100%;
  position: fixed;
  top:-2.65rem;
  left:0;
  z-index: 10;
  background: #fff;
}
.nav{
  height:1.2rem;
  width:100%;
  background:#fff;
  display:flex;
  position:absolute;
  top:3.53rem;
}
.swiper{
  width:100%;
  height:0rem;
  position: absolute;
  top:0rem;
}
.nav li{
  display:flex;
  flex: 1;
  justify-content:center;
  align-items:center;
  padding-bottom:0.1rem;
}
.nav li a{ 
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  color: #000;
  /* display: inline-block; */
  width: 50%;
  height: 100%;
  font-size:0.3rem;
  border-bottom:0.04rem solid transparent;
}
.nav i{
  font-size:0.5rem;
}

.nav a.router-link-active{
    color:#d44439;
    border-bottom: 0.04rem solid #d44439;
  }
#lists{
  position: absolute;
  top:4.8rem;
  }
#lists h3{
  width:7.5rem;
  height: 1rem;;
  line-height: 1rem;
  margin-left:0.13rem;
}
.list{
  display:flex;
  flex-flow:wrap;
  width:100%;
}
.list li{
  margin:0 0.05rem;
  padding-left:0.05rem;
}
.list img{
  width:2.3rem;
  height:2.3rem;
  display: block;
  border-radius:0.2rem;
}
.list p{
  display:block;
  width: 2.3rem;
  height: 0.64rem;
  margin-top:0.2rem;
  margin-bottom:0.2rem;
}
.list i{
  display: block;
  width:2.3rem;
  height:0.32rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>

