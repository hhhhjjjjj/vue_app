<template>
  <div id="app" class="container">

    <!--<img src="./assets/logo.png">-->

    <Header></Header>
    <router-view></router-view>

    <div>
      <router-view name="his"></router-view>
    </div>
    <div>
      <router-view name="del"></router-view>
    </div>
  </div>
</template>
<script>
import Header from './components/Header'
export default {
  name: 'App',
  data(){
    return{

    }
  },
  methods:{},

  components:{
        Header
  }
}
</script>
<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
</style>
