import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store=new Vuex.Store({
  state:{
    //设置属性
    menuItems:{},
    currentUser:null, //当前用户
    isLogin:false, //登陆状态
    currentRoute:'/', //当前路由
  },
  getters:{
    //获取属性的状态
    getMenuItems:state=>state.menuItems,
    currentUser:state=>state.currentUser,
    isLogin:state=>state.isLogin,
    currentRoute:state=>state.currentRoute,
  },
  mutations:{
    // 改变属性的状态
    setMenuItems(state,data){
      state.menuItems=data;
    },
    removeMenuItem(state,item){
      let ind=state.menuItems.indexOf(item);
      if(ind!=-1){
        state.menuItems.splice(ind,1);
      }
    },
    pushToMenuItems(state,item){
      state.menuItems.push(item);
    },
    //更改用户的状态信息
    userStates(state,user){
      state.currentUser=user;
      if(user){
        state.isLogin=true;
      }else{
        state.isLogin=false;
      }
    },
    setCurrentRoute(state,route){
      state.currentRoute=route;
    },
  },
  actions:{
    // 应用mutations
    setUser({commit},user){
      commit('userStates',user);
    }
  }
})
