<template>
  <div class="singer">
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
            <ul>
        <li v-for="(item,index) in singers">
            <h3 v-if="index===0 || index!==0 && item.letter!==singers[index-1].letter">{{item.letter}}</h3>
            <p>{{item.name}}</p> 
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
            singers:[],
            type:'',
            list:[],
            list1:[],
            vis:{
                flag:false
            }
        }
    },
    created(){
        this.$axios.get("http://120.79.162.149:3000/top/artists?limit=100").then((res)=>{
            
            res.data.artists.forEach((item,index) => {
              console.log(res.data.artists[index])
                var arr=res.data.artists[index].name.sort((a,b)=>{
                  return a.pinyin.localeCompare(b.pinyin)
              }).map((item)=>{
                  return{
                      'letter':item.pinyin[0].toUpperCase(),
                      'name':item.name
                  }
              })
            });
            
            //console.log(arr)
            this.singers=arr;
        })
    }
}
</script>