// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {store} from './store/store'
//axios是vue的插件用来请求数据
import axios from 'axios'
axios.defaults.baseURL='https://wd0136729579swdozs.wilddogio.com/'
Vue.config.productionTip = false
//全局守卫
// router.beforeEach((to,from,next)=>{
//   if(to.path=='/login' || to.path=='/register'){
//     next()
//   }else{
//     alert('您还没有成功登陆或注册')
//     alert('页面正在跳转中...')
//     next('/login')
//   }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
