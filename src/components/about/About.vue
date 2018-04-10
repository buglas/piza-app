<template>
  <div class="row">
    <div class="col-sm-4">
      <ul class="list-group">

        <router-link v-for="(menu,ind) in menus" class="list-group-item" :class="{ active: menu.act }"  @click.native="cliMenu(menu)" :to="{name:menu.name}" :key="ind">
          {{menu.name}}
        </router-link>


        <!--<li v-for="menu in leftMenus"  :class="{ active: menu.act }" v-on:click="cliMenu(menu)">
          <router-link :to="{name:menu.name}">{{menu.name}}</router-link>
        </li>-->
      </ul>
    </div>
    <div class="col-sm-8">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  let mns=[
    {name:'history',txt:'历史订单',act:true},
    {name:'contact',txt:'联系我们',act:false},
    {name:'orderingGuide',txt:'点餐文档',act:false},
    {name:'delivery',txt:'快递信息',act:false},
  ];
  export default{
    data(){
      return{
        menus:mns,
        curMenu:mns[0],
      }
    },
    methods:{
      cliMenu:function(menu){
        let {curMenu,menus}=this.$data;
        if(!curMenu){
          curMenu=menus[0];
        }
        curMenu.act=false;
        menu.act=true;
        this.$data.curMenu=menu;
      },
    }
  }
</script>
<style>
  .about-cont{

  }
</style>
