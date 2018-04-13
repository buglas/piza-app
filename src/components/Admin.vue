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
          <tr v-for="item in getMenuItems" :key="item.key">
            <td>{{item.name}}</td>
            <td>
              <button class="btn btn-xs btn-warning" @click="deleteData(item)">
                <span class="glyphicon glyphicon-remove"></span>
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
      name:'瑶瑶',
      //menuItems:[]
    }
  },
  //组件内守卫
  beforeRouteEnter:(to,fron,next)=>{
    // vm 就是this
    next(vm=>vm.$store.commit('setCurrentRoute','admin'));
  },
  components:{
    AppNewPizza,
    'app-new-pizza':NewPizza,
  },
  computed:{
    getMenuItems(){
      //return this.$store.state.menuItems;
      //通过getters 获取数据
      return this.$store.getters.getMenuItems;
    }
  },
  created(){
    fetch('https://wd2468178309upkmpi.wilddogio.com/menu.json')
      .then(res=>res.json())
      .then(data=>{
        let ary=[];
        for(let key in data){
          data[key].key=key;
          ary.push(data[key]);
        }
        //this.menuItems=ary;
        // 将数据同步到vuex 里
        this.$store.commit('setMenuItems',ary);
      })
      .catch(err=>console.error(err))
  },
  methods:{
    deleteData(item){
      console.log(item.key);
      fetch('https://wd2468178309upkmpi.wilddogio.com/menu/'+item.key+'/.json',{
        method:'DELETE',
        headers:{
          'Content-type':'application/json'
        }
      })
        .then(res=>res.json())
        //.then(data=>this.$router.push({name:'menu'}))
        .then(data=>this.$store.commit('removeMenuItem',item))
        .catch(err=>console.error(err))
    }
  }
}
</script>
