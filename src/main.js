import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from "echarts"
import '@/assets/iconfont/iconfont.css'
import allFun from './assets/public'
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
Vue.prototype.$echarts = echarts

Vue.use(allFun)
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
