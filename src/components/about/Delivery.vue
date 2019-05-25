<template>
  <div class="container row box">

    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="../../assets/del-sf.png" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">顺丰速运</h5>
        <p class="card-text">您的快递信息已发送至河北张家口</p>
        <a href="#" class="btn btn-primary" @click.prevent="onAlert">快递详情</a>
      </div>
    </div>
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="../../assets/del-yt.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">圆通快递</h5>
        <p class="card-text">您的快递信息已发送至山东青岛</p>
        <a href="#" class="btn btn-primary" @click.prevent="onAlert">快递详情</a>
      </div>
    </div>
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="../../assets/del-zt.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">中通快递</h5>
        <p class="card-text">您的快递信息已发送至河南洛阳</p>
        <a href="#" class="btn btn-primary" @click.prevent="onAlert">快递详情</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Delivery",
      data(){
          return{

        }
      },
      methods:{
          onAlert(){
            alert('别着急，我们的快递员正在快马加鞭为你运送心爱的物品...')
          }
      }
    }
</script>

<style scoped>
.box{display: flex;}
  .card{flex: 1;margin: 0 5px 0 5px;}
  img{width: 100%;height: 200px;}
.btn{position: absolute;width: 100px;left:50px;bottom:-50px;}
</style>
