import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'

Vue.use(VueRouter)

const router=new VueRouter({
  routes,
  mode:'history',
  //只对主页有效
  scrollBehavior:(to,from,savePossition)=>{
    //数值定位
    //return {x:0,y:200}
    //元素定位
    //return {selector:'.home-banner'}
    //savePossition 在浏览器前进或后退时，才会被触发
    /*console.log(savePossition)
    if(savePossition){
      return savePossition;
    }else{
      return {x:0,y:0}
    }*/
  }
})
/*router.beforeEach((to,from,next)=>{
  //to 要进入的路由
  //from 来自哪个路由
  //next 函数
  //console.log('to: ',to);
  //console.log('from: ',from);
  //console.log('-------------');
  //实际是需要做一个状态判断的
  if(to.name=='login'||to.name=='register'){
    console.log('to: ',to);
    next();
  }else{
    alert('请先登录');
    next('/login');
  }
})*/
/*router.afterEach((to,from)=>{
  console.log('to: ',to);
  console.log('from: ',from);
  console.log('-------------');
})*/
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
