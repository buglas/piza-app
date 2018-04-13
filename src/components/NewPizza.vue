<template>
  <form>
    <h3>添加新的pizza</h3><br/>
    <div class="form-group row">
      <label class="col-sm-2">品种</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model="newPizza.name"/>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2">描述</label>
      <div class="col-sm-10">
        <textarea type="text" rows="5" class="form-control" v-model="newPizza.description"/>
      </div>
    </div>
    <p><strong>选项1</strong></p>
    <div class="form-group row">
      <label class="col-sm-2">尺寸</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model="newPizza.options[0].size"/>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2">价格</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model="newPizza.options[0].price"/>
      </div>
    </div>
    <p><strong>选项2</strong></p>
    <div class="form-group row">
      <label class="col-sm-2">尺寸</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model="newPizza.options[1].size"/>
      </div>
    </div>
    <div class="form-group row">
      <label class="col-sm-2">价格</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" v-model="newPizza.options[1].price"/>
      </div>
    </div>

    <div class="form-group row">
      <div class="col-sm-10 col-sm-offset-2">
      <button @click="addMenuItem" type="button" class="btn btn-success btn-block">添加</button>
      </div>
    </div>
  </form>
</template>
<script>
  export default {
    data(){
      return{
        newPizza:{options:[{},{}]}
      }
    },
    methods:{
      addMenuItem(){
        console.log(this.newPizza);
        fetch('https://wd2468178309upkmpi.wilddogio.com/menu.json',{
          method:'post',
          headers:{
            'Content-type':'application/json'
          },
          body:JSON.stringify(this.newPizza)
        })
          .then(res=>res.json())
          //.then(data=>this.$router.push({name:'menu'}))
          .then(data=>this.$store.commit('pushToMenuItems',this.newPizza))
          .catch(err=>console.error(err))
      }
    }
  }
</script>
<style>

</style>
