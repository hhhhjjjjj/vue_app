<template>
  <div class="container row">
    <div class="col-8">
      <NewPizza></NewPizza>
    </div>

    <div class="col-4">
      <NewMenu></NewMenu>
    </div>

  </div>
</template>

<script>
  import  NewPizza from './NewPizza';
  import  NewMenu from './NewMenu';
    export default {
        name: "Admin",
      components:{
        NewPizza,
        NewMenu
      },
      computed:{
        isLogin(){
          return this.$store.getters.isLogin
        }
      }
    }
</script>

<style scoped>

</style>
