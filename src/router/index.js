import Vue from 'vue'
import Router from 'vue-router'
//一级路由
import  Home from '@/components/Home'
import  Menu from '@/components/Menu'
import  Login from '@/components/Login'
import  Register from '@/components/Register'
import  About from '@/components/About'
import Admin from '@/components/Admin'
//二级路由
import Contact from '@/components/about/Contact'
import History from '@/components/about/History'
import Delivery from '@/components/about/Delivery'
import Order from '@/components/about/Order'
//三级路由
import Address from '@/components/about/contact/Address'
import Person from '@/components/about/contact/Person'
import Phone from '@/components/about/contact/Phone'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'Home',
      components:{
        default:Home,
        'his':History,
        'del':Delivery
      }
    },
    {
      path:'/menu',
      name:'Menu',
      component:Menu
    },
    {
      path:'/about',
      name:'About',
      component:About,
      redirect:'/contact',
      children:[
        {
          path:'/contact',
          name:'Contact',
          component:Contact,
          redirect:'/address',
          children:[
            {
              path:'/address',
              name:'Address',
              component:Address
            },
            {
              path:'/person',
              name:'Person',
              component:Person
            },
            {
              path:'/phone',
              name:'Phone',
              component:Phone
            }
          ]
        },
        {
          path:'/history',
          name:'History',
          component:History
        },
        {
          path:'/delivery',
          name:'Delivery',
          component:Delivery
        },
        {
          path:'/order',
          name:'Order',
          component:Order
        }
      ]
    },
    {
      path:'/login',
      name:'Login',
      component:Login
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path:'/admin',
      name:'Admin',
      component:Admin,
      beforeEnter:((to,from,next)=>{
        alert('您正在进入admin页面，请确保有权限操作...')
        if(sessionStorage.getItem('currentUser')){
          next()
        }else{
          alert('您还没有成功登陆或注册')
          alert('页面正在跳转中...')
          next('/login')
        }
})
    }

  ],
  mode:'history',
  scrollBehavior(to,from,savedPosition) {
    if(savedPosition){
      return savedPosition
    }else{
      return {x:0,y:500}
    }
  }

})
