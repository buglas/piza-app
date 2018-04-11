<template>
  <div class="row">
    <div class="col-sm-8">
      <app-new-pizza></app-new-pizza>
    </div>
    <div class="col-sm-4">
      <h3>菜单</h3>
      <table class="table">
        <thead>
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>榴莲pizza</td>
            <td>
              <button class="btn btn-xs btn-success" @click="addToBasket(item,option)">
                <span class="glyphicon glyphicon-plus"></span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import NewPizza from './NewPizza.vue'
import AppNewPizza from "./NewPizza";
export default{
  data(){
    return{
      name:'瑶瑶'
    }
  },
  components:{
    AppNewPizza,
    'app-new-pizza':NewPizza,
  }
}
</script>
