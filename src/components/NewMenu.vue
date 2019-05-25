<template>
  <div class="container">
    <h3 class="text-center text-success">菜单管理</h3>
    <table class="table" >
    <thead>
    <tr>
      <th class="text-center" >序号</th>
      <th class="text-center" >品种</th>
      <th class="text-center" >删除</th>
    </tr>
    </thead>
    <tbody v-for="(item,index) in items" :key="index">
    <tr>
      <td class="text-center" >{{index+1}}</td>
      <td class="text-center" >{{item.name}}</td>
      <td class="text-center" >
      <template v-if="index%2==0">
        <button class="btn btn-danger" @click="delectItem(item)">X</button>
      </template>
        <template v-if="index%2==1">
          <button class="btn btn-warning" @click="delectItem(item)">X</button>
        </template>
      </td>
    </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "NewMenu",
      data(){
          return{
            // items:[]
          }
      },
      mounted(){
          this.getdata()
      },
      methods:{
          delectItem(item){
            axios.delete('./menu-hj/'+item.id+'/.json')
            .then(res=>{
              // this.$router.push('Menu')
              this.$store.commit('deleteMenuItems',item)
            })
          },
          getdata(){
            axios.get('./menu-hj.json')
              .then(res=>{
                var menus=[]
                let data=res.data
                for(let key in data){
                  data[key].id=key;
                  menus.push(data[key])
                }
                this.$store.commit('setMenuItems',menus)
              })
          }
      },
      computed:{
          items:{
            get(){
              return this.$store.getters.getMenuItems
            },
            set(){

            }
          }
      }
    }
</script>

<style scoped>

</style>
