<template>
  <div class="container row">
    <div class="col-4">
      <div class="list-group ">
        <router-link to="/contact" class="text-center list-group-item list-group-item-action">联系我们</router-link>
        <router-link to="/delivery" class="text-center list-group-item list-group-item-action">快递信息</router-link>
        <router-link to="/history" class="text-center list-group-item list-group-item-action">历史订单</router-link>
        <router-link to="/order" class="text-center list-group-item list-group-item-action">热门活动</router-link>
      </div>


    </div>
    <div class="col-8"> <router-view></router-view></div>
  </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>
.list-group-item{margin: 5px 0 5px 0;}
</style>
