<template>
  <form>
    <h3 class="text-center text-warning">添加新的果蔬</h3>
    <div class="form-group">
      <label for="Input1" class="text-warning"><h5 class="text-warning">品种</h5></label>
      <input v-model="newPizza.name" type="text" class="form-control" id="Input1" placeholder="请输入您的果蔬种类">
    </div>
    <div class="form-group">
      <label for="Textarea1"><h5 class="text-warning">商品描述：</h5></label>
      <textarea v-model="newPizza.description" class="form-control" id="Textarea1" rows="3" placeholder="请写下这款果蔬有什么特点..."></textarea>
    </div>
    <div class="form-group">
      <label for="Select1"><h5 class="text-warning">尺寸&价格</h5></label>
      <br/>
      <span class="spans">尺寸：</span>
      <select v-model="newPizza.size1" class="form-control col-2" id="Select1">
        <option value="7" selected>7</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="12">12</option>
        <option value="14">14</option>
      </select>
      <span class="spans">价格：</span>
      <input v-model="newPizza.price1" type="text" class="form-control col-4" id="input2">
    </div>
    <br/>
      <span class="spans">斤数：</span>
      <select v-model="newPizza.size2" class="form-control col-2" id="Select2">
        <option value="7">2</option>
        <option value="9" selected>5</option>
        <option value="10">7</option>
        <option value="12">8</option>
        <option value="14">10</option>
      </select>
      <span class="spans">价格：</span>
      <input v-model="newPizza.price2" type="text" class="form-control col-4" id="input3">
    <button type="button" @click.prevent="addPizza()" class="btn btn-primary btn-lg btn-block mt-3">添加果蔬</button>

  </form>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "NewPizza",
      data(){
          return{
            newPizza:{}
          }
      },
      methods:{
        addPizza(){
          const data={
            name:this.newPizza.name,
            description:this.newPizza.description,
            option:[
              {
                size:this.newPizza.size1,
                price:this.newPizza.price1
              },
              {
                size:this.newPizza.size2,
                price:this.newPizza.price2
              }
            ]
          }
            axios.post('./menu-hj.json',data)
              .then(res=>{
                // this.$router.push('Menu')
                this.$store.commit('pushMenuItems',data)
              })
        }
      }
    }
</script>

<style scoped>
#Select1,#input2,#Select2,#input3{
  display: inline;
}
  .spans{
    margin-left: 55px;
  }
</style>
