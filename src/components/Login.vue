<template>
  <div class="container  ">

    <form class="text-center">
      <img src="../assets/logo.png" alt="" class="text-center">
      <p>登录</p>
      <div class="form-group">

        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="请输入您的账号" v-model="email">

      </div>
      <div class="form-group">

        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="请输入您的密码" v-model="password">
      </div>

      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Remember me</label>
      </div>
      <button type="submit" class="btn btn-primary" @click.prevent="onSubmit()">Sign in</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios';
    export default {
        name: "Login",
      data(){
          return{
            email:'',
            password:''
          }
      },
      methods:{
          onSubmit(){
            axios.get('/user-hj.json')
              .then(res=>{
                console.log(res.data)
                const result=[];
                var data=res.data;
                for(var key in data){
                  var user=data[key]
                  result.push(user)
                }
                var trueEmail=result.filter((item,index)=>{
                  return item.emails==this.email && item.password==this.password
                })
                if(trueEmail!='' && trueEmail.length>0){
                  alert('登陆成功')
                  this.$store.dispatch('setUser',trueEmail[0].emails)
                  sessionStorage.setItem('currentUser',trueEmail[0].emails)
                  this.$router.push('/')
                }else{
                  alert('对不起，您输入的账号或密码不正确！')
                  this.$store.dispatch('setUser',null)
                }

              })
          }
      }
    }
</script>

<style scoped>
  .form-control{width: 500px;margin-left: 28%;}
  .btn{margin-top: 10px;}
  img{width: 100px;}

</style>
