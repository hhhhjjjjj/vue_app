<template>
  <div class="container  ">

    <form class="text-center">
      <img src="../assets/logo.png" alt="" class="text-center">
      <p>注册</p>
      <div class="form-group">

        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="请输入您的账号" v-model="emails">

      </div>
      <div class="form-group">

        <input type="password" class="form-control" id="" placeholder="请输入您的密码" v-model="password">
      </div>
      <div class="form-group">

        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="请确认您的密码" v-model="repassword">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Remember me</label>
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="onSubmit">Sign up</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "Register",
      data(){
        return{
          emails:'',
          password:'',
          repassword:''
        }
      },

      methods:{
          onSubmit(){
            if(this.password===this.repassword&&this.password!=''&&this.repassword!=''){
              const formData={
                emails:this.emails,
                password:this.password,
                repassword:this.repassword
              }
              //传递数据到后台
              axios.post('/user-hj.json',formData)
                .then(res=>{
                  //处理成功的结果
                  this.$router.push('/login')

                })
            }else{
              alert('用户和密码不能为空')
            }
          }
      }

    }
</script>

<style scoped>
.form-control{width: 500px;margin-left: 28%;}
   .btn{margin-top: 10px;}
  img{width: 100px;}
</style>
