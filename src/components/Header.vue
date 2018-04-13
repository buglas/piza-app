<template>
  <header>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">
            <img src="../assets/logo.png" width="32">
          </a>
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li v-for="(menu,ind) in leftMenus" :class="{active:(menu.name==currentRoute) }" :key="ind">
              <router-link :to="{name:menu.name}">{{menu.name}}</router-link>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right" v-show="!isLogin">
            <li v-for="(menu,ind) in rightMenus"  :class="{active:(menu.name==currentRoute)}" :key="ind">
              <router-link :to="{name:menu.name}">{{menu.name}}</router-link>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right" v-show="isLogin">
            <li class="nav-link">
              <a>{{currentUser}}</a>
            </li>
            <li class="nav-link">
              <router-link :to="{name:'login'}">退出</router-link>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        curMenu:null,
        leftMenus:[
          {name:'home',txt:'主页',act:true},
          {name:'menu',txt:'菜单',act:false},
          {name:'admin',txt:'管理',act:false},
          {name:'about',txt:'关于我们',act:false}],
        rightMenus:[
          {name:'login',txt:'登陆',act:false},
          {name:'register',txt:'注册',act:false}],
      }
    },
    computed:{
      currentUser(){
        return this.$store.getters.currentUser;
      },
      isLogin(){
        return this.$store.getters.isLogin;
      },
      currentRoute(){
        return this.$store.getters.currentRoute;
      }
    },
    methods: {
      cliMenu:function(menu){
        let {curMenu,leftMenus}=this.$data;
        if(!curMenu){
          curMenu=leftMenus[0];
        }
        curMenu.act=false;
        menu.act=true;
        this.$data.curMenu=menu;
      },
      actMenu:function(menuName){
        const {leftMenus,rightMenus}=this.$data;
        const menus=leftMenus.concat(rightMenus);
        for(let ele of menus){
          if(ele.name===menuName){
            this.$methods.cliMenu(ele);
            break;
          }
        }
      },
    },
    props:['actMenuApp']
  }
</script>
<style>
  .navbar-brand{
    padding:9px 15px;
    font-size:12px;
  }
</style>
