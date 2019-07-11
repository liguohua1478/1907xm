import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Ranking from './views/ranking.vue'
import Recommend from './views/recommend.vue'
import Singer from './views/singer.vue'
import Mine from './views/mine.vue'
import Record from './views/record.vue'
import Search from './views/search.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:{'name':'recommend'},
    },
    {
      path:'/home',
      name:'home',
      redirect:{'name':'recommend'},
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/record',
      name: 'record',
      component: Record
    },
    
    {
      path: '/recommend',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/ranking',
      name: 'ranking',
      component: Ranking
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
