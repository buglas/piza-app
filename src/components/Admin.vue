<template>

  <h1>admin</h1>
</template>
<script>
export default{
  data(){
    return{
      name:'瑶瑶'
    }
  },
  //进入路由之前
  /*beforeRouteEnter:(to,from,next)=>{
    next((dt)=>{
      console.log(dt.name)
    })
  },*/
  //离开路由之前
  /*beforeRouteLeave:(to,from,next)=>{
    console.log('leave')
    if(confirm('亲，你确定离开？')){
      next();
    }else{
      next(false);
    }
  },*/
}
</script>
