<template>
  <div class="container">
    <div class="card text-center">
      <div class="card-header">
        联系我们
      </div>
      <div class="card-body">
        <h5 class="card-title">欢迎来到果蔬联系我们</h5>
        <p class="card-text">这里有各种各种满足你口味的果蔬.</p>
        <router-link to="/address" class="btn btn-primary">地址信息</router-link>
        <router-link to="/person" class="btn btn-primary">法人代表</router-link>
        <router-link to="/phone" class="btn btn-primary">联系方式</router-link>
        <router-view></router-view>
      </div>
      <div class="card-footer text-muted">
        2 days ago
      </div>
    </div>

  <!--<router-view></router-view>-->
  </div>
</template>

<script>
    export default {
        name: "Contact"
    }
</script>

<style scoped>
 .btn{margin-bottom: 20px;}
</style>
