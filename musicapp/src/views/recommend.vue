<template>
  <div class="recommend">
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
            //console.log(res.data)
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
<style scoped>
.recommend{
  position: absolute;
    top:4.5rem;
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