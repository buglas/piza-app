<template>
  <form class="col-sm-6 col-sm-offset-3" @submit.prevent="onSubmit">
    <div class="form-group">
      <label>邮箱</label>
      <input type="email"
             class="form-control"
             placeholder="Email"
             v-model="email"
      >
    </div>
    <div class="form-group">
      <label>密码</label>
      <input type="password"
             class="form-control"
             placeholder="Password"
             v-model="password"
      >
    </div>
    <div class="form-group">
      <label>确认密码</label>
      <input type="password"
             class="form-control"
             placeholder="Confirm password"
             v-model="confirmPassword"
      >
    </div>
    <div class="tip" v-show="tip">{{tip}}</div>
    <button type="submit" class="btn btn-default">注册</button>
  </form>
</template>
<script>
  export default{
    data(){
      return {
        email:'',
        password:'',
        confirmPassword:'',
        tip:null
      }
    },
    methods:{
      onSubmit(){
        console.log(this.email,this.password,this.confirmPassword);
        const bodyData=`username=${this.email}&password=${this.password}`
        if(this.password===this.confirmPassword){
          fetch('http://localhost:8080/mvc/doRegister2.do', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: bodyData
          })
            .then((response)=>response.text())
            .then((responseText)=>{
              if(responseText==='suc'){
                this.$router.push({name:'login'});
              }
            })
        }else{
          this.tip='密码不一致!';
        }


      }
    }
  }
  function upUser(name,password){

  }
</script>
<style>
  .tip{color:red;margin:12px;}
</style>
