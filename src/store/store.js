import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store =new Vuex.Store({
  state:{//数据源
    menuItems:[],
    currentUser:null,
    isLogin:false
  },
  getters:{//派生状态数据源
    getMenuItems:state=>state.menuItems,
    currentUser:state=>state.currentUser,
    isLogin:state=>state.isLogin
  },
  mutations:{//更改vuex的store中的状态
    //set主要用来get请求数据并更新
    setMenuItems(state,data){//data来源于数据库
        state.menuItems=data
    },
    //push主要用来post发送数据并添加
    pushMenuItems(state,data){//data是即将抛出的数据源
      state.menuItems.push(data)

    },
    //delete主要用来删除数据
    deleteMenuItems(state,data){
      state.menuItems.forEach((item,index)=>{
        if(data==item){
          state.menuItems.splice(index,1)
        }
      })
    },
    UserStatus(state,user){
      if(user){
        state.currentUser=user
        state.isLogin=true
      }else{
        state.currentUser=null
        state.isLogin=false
      }
    }

  },
  actions:{
      setUser({commit},user){
        commit('UserStatus',user)
      }
  }
})
