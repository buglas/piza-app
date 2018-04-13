import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import {routes} from './routes'
import {store} from './store/store.js'

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
let firstOpen=true;
router.beforeEach((to,from,next)=>{
  //to 要进入的路由
  //from 来自哪个路由
  //next 函数
  //console.log('to: ',to);
  //console.log('from: ',from);
  //console.log('-------------');
  //实际是需要做一个状态判断的
  const email=localStorage.email;
  const password=localStorage.password;
  console.log('email: ',email);
  console.log('password: ',password);
  if(email&&password){
    //去后端判断email 和password 的准确性
    //sendUser(email,password,to,next)
    if(firstOpen){
      sendUser(email,password,to,next);
      firstOpen=false;
    }else{
      next();
    }
    
  }else{
    toLogin(to,next);
  }
  
})
function sendUser(email,password,to,next){
  const bodyData=`username=${email}&password=${password}&ans='right'`
  fetch('http://localhost:8080/mvc/doLogin.do', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: bodyData
  })
    .then((response)=>response.text())
    .then((responseText)=>{
      if(responseText==='right'){
        store.dispatch('setUser',email);
        next();
      }else{
        store.dispatch('setUser',null);
        toLogin(to,next);
      }
    })
}

function toLogin(to,next){
  if(to.name=='login'||to.name=='register'){
    next();
  }else{
    alert('请先登录');
    next({name:'login'});
  }
}

/*router.afterEach((to,from)=>{
  console.log('to: ',to);
  console.log('from: ',from);
  console.log('-------------');
})*/
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
