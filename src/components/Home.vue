<template>
    <div>
        <div class="text-center box1">
           <div class="bg">
             <h1>欢迎大家来品尝!!!</h1>
             <h2>这里有各种您想吃的口味...</h2>
             <button  class="btn btn-success" @click="goMenu">Let's Order</button>
           </div>
        </div>
      <router-link to="/history" class=" text-center list-group-item list-group-item-action">历史订单</router-link>
      <!--<History class="box2"></History>-->

      <!--<Delivery></Delivery>-->
    </div>
</template>

<script>
  import Delivery from '../components/about/Delivery'
  import History from '../components/about/History'
    export default {
        name: "Home",
      data(){
          return{

          }
      },
      methods:{
          goMenu(){
            this.$router.push('/menu')
          }
      },
      components:{
         Delivery,
        History
      }
    }
</script>

<style scoped>
.box1{
  background: url("../assets/guoshu_2.jpg") no-repeat;
  background-size:100% 100%;
  padding-top: 22%;
  width: 100%;
  height: 700px;
}
  .bg{
    margin: 0 auto;
    background: #bbb;
    width:600px;
    height: 200px;
    opacity: 0.8;
  }
  .btn{
    margin-top: 20px;
  }
  .box2{
    width: 800px;
    margin: 0 auto;
  }

</style>
