<template>
  <div>
    <div class="home-banner">
      <button class="home-banner-btn" @click="gotoMenu">Let's order !</button>
    </div>
    <div class="home-banner">
      <button class="home-banner-btn" @click="gotoMenu">Let's order !</button>
    </div>
  </div>
</template>
<script>
  export default{
    methods:{
      gotoMenu(){
        this.$router.push({name:'menu'})
      }
    },
    props: [],
  }
</script>
<style>
  .home-banner{
    height:600px;
    background-attachment:fixed;
    background-size:cover;
    background-position:center;
    margin-bottom:28px ;
  }
  .home-banner:nth-child(1){
    background-image:url('../assets/pizza.jpg');
  }
  .home-banner:nth-child(2){
    background-image:url('../assets/pizza2.jpg');
  }
  .home-banner-btn{
    color:#fff;
    background-color:#5cb85c;
    padding:6px 12px;
    border:none;
    border-radius:0 0 12px 0;
  }
  .home-banner-btn:hover{
    background-color:#5cb000;
  }
</style>
