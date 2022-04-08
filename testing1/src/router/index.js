import Vue from 'vue'
import Router from 'vue-router'
import Helloworld from '../components/HelloWorld'

Vue.use(Router)
const routes=[
    
    {
        path:'/about',
        name:"About",
        component:Helloworld 
    }
]
let router =new Router ({routes})
export default router