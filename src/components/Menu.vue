<template>
  <div class="container row">
    <div class="col-md-8">
      <h3 class="text-center">点餐</h3>
      <table class="table">
        <thead class="bg-primary text-white">
        <tr class="text-center">
          <th scope="col">尺寸</th>
          <th scope="col">价格</th>
          <th scope="col">加入</th>
        </tr>
        </thead>
        <tbody v-for="(item,index) in items" :key="index">
        <tr class="text-center">
          <td colspan="3">{{item.name}}</td>
        </tr>
        <tr class="text-center" v-for="(item1,index) in item.option" :key="index">
          <td>{{item1.size}}</td>
          <td>{{item1.price}}</td>
          <td>
            <button class="btn btn-info" @click="addToBasket(item,item1)">+</button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-4">
      <h3 class="text-center">购物车</h3>
      <table class="table">
        <thead class="bg-primary text-white">
        <tr>
          <th class="text-center">数量</th>
          <th class="text-center">品种</th>
          <th class="text-center">价格</th>
        </tr>
        </thead>
        <template v-if="this.newItem.length>0">
        <tbody v-for="(item,index) in newItem" :key="index">
        <tr>
          <td>
            <button class="btn btn-info" @click="reduceItem(item,index)">-</button>
            <input type="text" v-model="item.quantity" class="text-center">
            <button class="btn btn-info" @click="item.quantity>=20?item.quantity=20:item.quantity++">+</button>
          </td>
          <td>{{item.name}}---{{item.size}}</td>
          <td>{{item.price}}</td>
        </tr>
        </tbody>
        <tr>
          <td colspan="3" class="text-center">商品总数量（件）：<span class="text-info strong">{{totalNum}}</span></td>
        </tr>
        <tr>
          <td colspan="3" class="text-center">商品总价钱（元）：<span class="text-info strong">{{totalPrice}}</span></td>
        </tr>
        </template>
        <template v-else>
          <tbody>
          <tr>
            <td colspan="3"><h3 class="text-center">您的购物车空空如也~</h3></td>
          </tr>
          </tbody>
        </template>
      </table>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "Menu",
      data(){
          return{
            // items:{
              // 1:{
              //   name:'芝士pizza',
              //   description:'这是一款我比较喜欢的pizza',
              //   option:[
              //     {
              //       size:10,
              //       price:90
              //     },
              //     {
              //       size:12,
              //       price:120
              //     }
              //   ]
              // },
              // 2:{
              //   name:'榴莲PIZZA',
              //   description:'这是一款有特殊味道的pizza',
              //   option:[
              //     {
              //       size:9,
              //       price:75
              //     },
              //     {
              //       size:12,
              //       price:120
              //     }
              //   ]
              // }
            // },
            num:1,
            newItem:[]
          }
      },
      mounted(){
          axios.get('./menu-hj.json')
            .then(res=>{
              this.items=res.data
              this.$store.commit('setMenuItems',res.data)
            })
      },
      methods:{
          addToBasket(item,option){
            var result=this.newItem.filter((item1,index1)=>{
              return item1.name===item.name&& item1.size===option.size;
            })
            if(result!=null&&result.length>0){
              result[0].quantity++;
            }else{
              this.newItem.push({
                name:item.name,
                size:option.size,
                price:option.price,
                quantity:1
              })
            }
          },
        reduceItem(item,index){
            if(item.quantity<=1){
              item.quantity==1;
              this.newItem.splice(index,1)
            }else{
              item.quantity--;
            }
        }
      },
      computed:{
        totalNum(){
           return this.newItem.length;
        },
        totalPrice(){
          return this.newItem.reduce((sum,item)=>{
            return sum+item.quantity*item.price;
          },0)
        },
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
input[type="text"]{
  width: 35px;
}
  .btn{
    width: 35px;
  }
  .strong{
    font-weight: bold;
  }
</style>
