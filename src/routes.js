import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register'

//二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

export const routes=[
  {path:'/',name:'home',components:{
    default:Home,
    'history':History,
    'delivery':Delivery,
    'orderingGuide':OrderingGuide,
  }},
  {path:'/menu',name:'menu',component:Menu},
  {path:'/admin',name:'admin',component:Admin},
  {path:'/about',name:'about',component:About,redirect:'/about/contact',children:[
    {path:'/history',name:'history',component:History},
    {path:'/about/contact',name:'contact',component:Contact},
    {path:'/delivery',name:'delivery',component:Delivery},
    {path:'/orderingGuide',name:'orderingGuide',component:OrderingGuide},
  ]},
  {path:'/login',name:'login',component:Login},
  {path:'/register',name:'register',component:Register},
  {path:'*',name:'home',redirect:'/'},
]






