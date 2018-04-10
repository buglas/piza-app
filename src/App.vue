<template>
  <div id="app">
    <app-header ></app-header>
    <div class="container">
      <router-view></router-view>
      <div class="row">
        <div class="col-sm-4">
          <router-view name="orderingGuide"></router-view>
        </div>
        <div class="col-sm-4">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-4">
          <router-view name="history"></router-view>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import Header from './components/Header'
/*fetch('http://localhost:8080/mvc/getArticles.do')
  .then((response)=>response.text())
  .then((responseText)=>{
    console.log(responseText);
  })
  .catch((error)=>{

  })*/

export default {
  name: 'app',
  data () {
    return {
    }
  },
  components:{
    appHeader:Header //可以写'app-header':Header
  },
  method:{

  }
}
</script>
<style>
</style>
