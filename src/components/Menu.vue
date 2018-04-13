<template>
  <div>
    <div class="col-sm-8">
      <table class="table">
        <thead>
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="(item,itemInd) in getMenuItems" :key="itemInd">
          <tr>
            <td><strong>{{item.name}}</strong></td>
          </tr>
          <tr v-for="(option,optionInd) in item.options" :key="optionInd">
            <td>{{option.size}} 寸</td>
            <td>{{option.price}} RMB</td>
            <td>
              <button class="btn btn-xs btn-success" @click="addToBasket(item,option)">
                <span class="glyphicon glyphicon-plus"></span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-sm-4" v-show="!baskets.length">
      <div>{{basketText}}</div>
    </div>
    <div class="col-sm-4" v-show="baskets.length">
      <table class="table">
        <thead>
          <tr>
            <th>数量</th>
            <th>品种</th>
            <th>价格</th>
          </tr>
        </thead>
        <tbody v-for="(item,ind) in baskets" :key="ind">
          <tr>
            <td>
              <button class="menu-btn" @click="decreaseQuantity(item)">
                <span class="glyphicon glyphicon-minus"></span>
              </button>
              <span>{{item.quantity}}</span>
              <button class="menu-btn" @click="increaseQuantity(item)">
                <span class="glyphicon glyphicon-plus"></span>
              </button>
            </td>
            <td>{{item.name}}</td>
            <td>{{item.price*item.quantity}}</td>
          </tr>
        </tbody>
      </table>
      <p>总价：{{total}}</p>
      <button class="btn btn-success btn-block">提交</button>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        baskets:[],
        basketText:'购物车没有物品',
        //menuItems:{}
      }
    },
    //组件内守卫
    beforeRouteEnter:(to,fron,next)=>{
      // vm 就是this
      next(vm=>vm.$store.commit('setCurrentRoute','menu'));
    },
    computed:{
      getMenuItems(){
        //从vuex 中获取数据
        //return this.$store.state.menuItems;
        //通过getters 获取数据
        return this.$store.getters.getMenuItems;
      },
      total(){
        let totalCost=0;
        for(let key in this.baskets){
          let individualItem=this.baskets[key];
          totalCost+=individualItem.quantity*individualItem.price;
        }
        return totalCost;
      }
    },
    created(){
      this.fetchData();
    },
    methods:{
      fetchData(){
        fetch('https://wd2468178309upkmpi.wilddogio.com/menu.json')
          .then(res=>res.json())
          .then(data=>{
            //this.menuItems=data;
            // 将请求数据存储到vuex 中
            this.$store.commit('setMenuItems',data);
          })
          .catch(err=>console.error(err));
      },
      addToBasket(item,option){
        let basket={
          name:item.name,
          size:option.size,
          price:option.price,
          quantity:1,
        }
        if(this.baskets.length){
          const result=this.baskets.filter((ele)=>{
            return (ele.name===basket.name&&ele.price===basket.price);
          })
          if(result.length){
            result[0].quantity++;
          }else{
            this.baskets.push(basket);
          }
        }else{
          this.baskets.push(basket);
        }
      },
      decreaseQuantity(item){
        if(item.quantity>1){
          item.quantity--;
        }else{
          this.removeFromBasket(item);
        }
      },
      increaseQuantity(item){
        item.quantity++;
      },
      removeFromBasket(item){
        this.baskets.splice(this.baskets.indexOf(item),1);
      }
    }
  }
</script>
<style>
  .menu-btn{
    border:none;
    background:none;
    font-size:12px;
    padding:3px 6px;
    border-radius:3px;
  }
  .menu-btn:hover{
    color:#fff;
    background-color:#398439;
  }
</style>
