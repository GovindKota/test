import Vue from 'vue'
import Router from 'vue-router'
import Helloworld from '../components/HelloWorld'
//import Question5 from '../components/assignment-4(08-04-22)/Question5'
//import Question6 from '../components/assignment-4(08-04-22)/Question6'
//import Question7 from '../components/assignment-4(08-04-22)/QuestioN7'
//import Question1 from '../components/assignment-5/QuestioN1'
//import QuestioN2 from '../components/assignment-5/QuestioN2'
//import PropS from '../components/PropS(parent)'
//import EmitParent from '../components/EmitParent'
//import QuestioN4a from '../components/assignment-1/QuestioN4a'
//import QuestioN5a from '../components/assignment-1/QuestioN5a'
//import QueN1 from '../components/assignment-7/QueN1.vue'
//import QueN2 from '../components/assignment-7/QueN2.vue'
//import QueN3 from '../components/assignment-7/QueN3.vue'
//import QueN4 from '../components/assignment-7/QueN4'
//import FetchApi from '../components/FetchApi'
//import AxioS from '../components/AxioS.vue'
//import QueN5 from '../components/assignment-7/QueN5'
//import QueN7 from '../components/assignment-7/QueN7'
//import CallBack from '../components/CallBack'
import QueN1 from '../components/assignment-8/QueN1.vue'
//import QueN3 from '../components/assignment-8/QueN3'
//import QueN4 from '../components/assignment-8/QueN4'
//import QueN8 from '../components/assignment-8/QueN8'
//import QueN9 from '../components/assignment-8/QueN9'
//import QueN6 from  '../components/assignment-8/QueN6'
//import QueN5 from '../components/assignment-8/QueN5'
//import QueN7 from '../components/assignment-8/QueN7'
//import QueN10 from '../components/assignment-8/QueN10'
//import QueN2 from '../components/assignment-8/QueN2'
Vue.use(Router)
const routes=[
    
    {
       path:'/about',
       name:"About",
        component:Helloworld 
    },
    //{
      //  path:'/question5',
       // name:"question5",
       // component:Question5

    //},
    //{
      //  path:'/question6',
       // name:"question6",
        //component:Question6

    //},
    // {
    //     path:'/question7',
    //     name:"question7",
    //     component:Question7

    // }
    //{
      //  path:'/Question1',
        //name:"QuestioN1",
        //component:Question1 
     //},
     //{
       // path:'/Question2',
        //name:"QuestioN2",
        //component:QuestioN2 
     //},
   //   {
   //      path:'/props',
   //     name:"PropS",
   //     component:PropS
   //   },
   //   {
   //      path:'/emit',
   //      name:"EmitParent",
   //      component:EmitParent
   //   }
  //  {
  //     path:'/Question4',
  //     name:"Question4",
  //     component:QuestioN4a
  //  },
   // 
    {
      path:'/Q1',
      name:"QueN1",
      component:QueN1
   },
  //  {
  //     path:'/Q3',
  //     name:"QueN3",
  //     component:QueN3
  //  }
  //   {
  //     path:'/Q4',
  //     name:"QueN4",
  //     component:QueN4
  //  },
  //  {
  //     path:'/fetchapi',
  //     name:"FetchApi",
  //     component:FetchApi
  //   },
   // {
   //    path:'/axios',
   //    name:"AxioS",
   //    component:AxioS
   // },
// {
//   path:'/Quen5',
//   name:"QueN5",
//   component:FetchApiQueN7
// },
// {
//   path:'/callback',
//   name:"CallBack",
//   component:CallBack
// },
// {
//   path:'/Q1',
//   name:"QueN1",
//   component:QueN1
// },
// {
//   path:'/Q3',
//   name:"QueN3",
//   component:QueN3
// },
// {
//   path:'/Q4',
//   name:"QueN4",
//   component:QueN4
// },
// {
//   path:'/Q6',
//   name:"QueN6",
//   component:QueN6
// },
// {
//   path:'/Q8',
//   name:"QueN8",
//   component:QueN8
// },
// {
//   path:'/Q9',
//   name:"QueN9",
//   component:QueN9
// },
// {
//   path:'/Q7',
//   name:"QueN7",
//   component:QueN7
// },
// {
//   path:'/Q2',
//   name:"QueN2",
//   component:QueN2
// },
// {
//   path:'/Q10',
//   name:"QueN10",
//   component:QueN10
// }
]

let router =new Router ({routes})
export default router