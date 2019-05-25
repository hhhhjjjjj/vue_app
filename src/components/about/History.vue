<template>
  <div class="container row">
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="../../assets/shuiguo_1.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">草莓（斤）*4</h5>
        <p class="card-text" text-success>已支付</p>
        <a href="#" class="btn btn-primary" >订单详情</a>
      </div>
    </div>
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="../../assets/shuiguo_3.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">水果沙拉*2</h5>
        <p class="card-text" text-success>已支付</p>
        <a href="#" class="btn btn-primary" >订单详情</a>
      </div>
    </div>
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="../../assets/shucai.jpg" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">蔬菜（斤）*3</h5>
        <p class="card-text" text-success>已支付</p>
        <a href="#" class="btn btn-primary" >订单详情</a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "History"
    }
</script>

<style scoped>
  .box{display: flex;}
   .card{flex: 1;margin: 0 5px 0 5px;} 
  img{width: 100%;height: 200px;}
  .btn{position: absolute;width: 100px;left:50px;bottom:-50px;}
  .card-text{color:green;}
</style>
