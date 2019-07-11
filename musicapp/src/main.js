import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.prototype.$axios=axios;
Vue.config.productionTip = false
import './assets/js/flexble.js'
import '../public/iconfont/iconfont.css'
import './module/module.js'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
