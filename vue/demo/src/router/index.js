import Vue from 'vue'
import Router from 'vue-router'
import Fun from "../components/function.vue"


Vue.use (Router)
const routes=[
    
    {
        path:'/about',
        name:"About",
        component:Fun
    }
]
let router =new Router ({routes})
export default router