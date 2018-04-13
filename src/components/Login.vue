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
    <div class="tip" v-show="tip">{{tip}}</div>
    <button type="submit" class="btn btn-default">登陆</button>
  </form>
</template>
<script>
  export default{
    data(){
      return {
        email:'',
        password:'',
        tip:null,
      }
    },
    //组件内守卫
    beforeRouteEnter:(to,fron,next)=>{
      // vm 就是this
      next(vm=>{
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        vm.$store.dispatch('setUser',null);
        vm.$store.commit('setCurrentRoute','login');
      });
    },
    methods:{
      onSubmit(){
        const bodyData=`username=${this.email}&password=${this.password}&ans='right'`
        fetch('http://localhost:8080/mvc/doLogin.do', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: bodyData
        })
          .then((response)=>response.text())
          .then((responseText)=>{
            if(responseText==='right'){
              localStorage.email=this.email;
              localStorage.password=this.password;

              this.$store.dispatch('setUser',this.email);
              this.$router.push({name:'home'});
            }else{
              this.$store.dispatch('setUser',null);
              this.tip='邮箱或密码错误！'
            }
          })
      }
    }
  }
</script>
<style>
  .tip{color:red;margin:12px;}
</style>
