import Vue from 'vue'
import Router from 'vue-router'
import Helloworld from '../components/HelloWorld'
import QuestioN3 from '../components/assignment-4(08-04-22)/QuestioN3'
import Question5 from '../components/assignment-4(08-04-22)/Question5'
import Question6 from '../components/assignment-4(08-04-22)/Question6'
import Question7 from '../components/assignment-4(08-04-22)/QuestioN7'
import Question1 from '../components/assignment-5/QuestioN1'
import QuestioN2 from '../components/assignment-5/QuestioN2'
import PropS from '../components/PropS(parent)'
import EmitParent from '../components/EmitParent'
import QuestioN4a from '../components/assignment-1/QuestioN4a'
import QuestioN5a from '../components/assignment-1/QuestioN5a'
import QueN71 from '../components/assignment-7/QueN1'
import QueN72 from '../components/assignment-7/QueN2'
import QueN73 from '../components/assignment-7/QueN3'
import QueN74 from '../components/assignment-7/QueN4'
import FetchApi from '../components/FetchApi'
import AxioS from '../components/AxioS.vue'
import QueN75 from '../components/assignment-7/QueN5'
import QueN77 from '../components/assignment-7/QueN7'
import CallBack from '../components/CallBack'
import QueN81 from '../components/assignment-8/QueN1'
import QueN83 from '../components/assignment-8/QueN3'
import QueN84 from '../components/assignment-8/QueN4'
import QueN88 from '../components/assignment-8/QueN8'
import QueN89 from '../components/assignment-8/QueN9'
import QueN86 from  '../components/assignment-8/QueN6'
import QueN85 from '../components/assignment-8/QueN5'
import QueN87 from '../components/assignment-8/QueN7'
import QueN810 from '../components/assignment-8/QueN10'
import QueN82 from '../components/assignment-8/QueN2'
import promises from '../components/PromiseS'
import PromisE from '../components/PromisE'
import QueN1 from '../components/assignment-9/QueN1'
import QueN2 from '../components/assignment-9/QueN2'
import QueN4a from '../components/assignment-9/QueN4a'
import QueN5a from '../components/assignment-9/QueN5a'
import QueN6 from '../components/assignment-9/QueN6'
import QueN7 from '../components/assignment-9/QueN7'
import QueN8 from '../components/assignment-9/QueN8'
import QueN9 from '../components/assignment-9/QueN9'
import QueN10 from '../components/assignment-9/QueN10'
import QueS1 from '../components/assignment-10/QueS1'
import QueS2 from '../components/assignment-10/QueS2'
import QueS3 from '../components/assignment-10/QueS3'
import QueS4 from '../components/assignment-10/QueS4'
import QueS5 from '../components/assignment-10/QueS5'
import QueS6 from '../components/assignment-10/QueS6'
import QueS7 from '../components/assignment-10/QueS7'
import Ques1 from '../components/assignment-11/Ques1'
import Ques2 from '../components/assignment-11/Ques2'
import Ques3 from '../components/assignment-11/Ques3'
import Que1 from '../components/assignment-12/Ques1'
import Que2 from '../components/assignment-12/Ques2'
import Que3 from '../components/assignment-12/Ques3'
import Que4 from '../components/assignment-12/Ques4'
import Que5 from '../components/assignment-12/Ques5'
import Que7 from '../components/assignment-12/Ques7'
import Que6 from '../components/assignment-12/Ques6'
import Que8 from '../components/assignment-12/Ques8'
import Que9 from '../components/assignment-12/Ques9'
import Que10 from '../components/assignment-12/Ques10'

Vue.use(Router)
const routes=[
 {
     path:'/about',
     name:"About",
   component:Helloworld 
},
    {
      path:'/Q43',
      name:"QuestioN3",
      component:QuestioN3
    },
    {
       path:'/Q45',
       name:"question5",
       component:Question5
    },
    {
       path:'/Q46',
       name:"question6",
        component:Question6

    },
    {
        path:'/Q47',
        name:"question7",
        component:Question7

    },
    {
       path:'/Q51',
        name:"QuestioN1",
        component:Question1 
   },
   {
    path:'/Q52',
     name:"QuestioN2",
     component:QuestioN2 
},

  {
       path:'/props',
       name:"PropS",
       component:PropS
},
     {
        path:'/emit',
        name:"EmitParent",
        component:EmitParent
     },
   {
      path:'/Question4a',
      name:"Question4",
      component:QuestioN4a
   },
   {
     path:'/Question5a',
     name:"Question5a",
     component:QuestioN5a
   },
    {
      path:'/Q71',
      name:"QueN1",
      component:QueN71
   },
  {
    path:'/Q72',
    name:"QueN2",
    component:QueN72
  },
   {
      path:'/Q73',
      name:"QueN3",
      component:QueN73
   },
    {
      path:'/Q74',
      name:"QueN4",
      component:QueN74
   },
   {
     path:'/Q75',
     name:"QueN5",
     component:QueN75
   },
   {
     path:'/Q77',
     name:"QueN7",
     component:QueN77
   },
   {
      path:'/fetchapi',
      name:"FetchApi",
      component:FetchApi
    },
   {
      path:'/axios',
      name:"AxioS",
      component:AxioS
   },
{
  path:'/callback',
  name:"CallBack",
  component:CallBack
},
{
  path:'/Q81',
  name:"QueN1",
  component:QueN81
},
{
  path:'/Q3',
  name:"QueN3",
  component:QueN83
},
{
  path:'/Q84',
  name:"QueN4",
  component:QueN84
},
{
  path:'/Q86',
  name:"QueN6",
  component:QueN86
},
{
  path:'/Q85',
  name:"QueN5",
  component:QueN85
},
{
  path:'/Q88',
  name:"QueN8",
  component:QueN88
},
{
  path:'/Q89',
  name:"QueN9",
  component:QueN89
},
{
  path:'/Q87',
  name:"QueN7",
  component:QueN87
},
{
  path:'/Q82',
  name:"QueN2",
  component:QueN82
},
{
  path:'/Q810',
  name:"QueN10",
  component:QueN810
},
{
  path:'/Promise',
  name:"PromiseS",
  component:promises
},
{
  path:'/promise',
  name:"PromisE",
  component:PromisE
},
{
  path:'/Q91',
  name:"QueN1",
  component:QueN1
},
{
  path:'/Q92',
  name:"QueN2",
  component:QueN2
},
{
  path:'/Q94',
  name:"QueN4",
  component:QueN4a
},
{
  path:'/Q95',
  name:"Question5",
  component:QueN5a
},
{
  path:'/Q96',
  name:"QueN6",
  component:QueN6
},
{
  path:'/Q97',
  name:"QueN7",
  component:QueN7
},
{
  path:'/Q98',
  name:"QueN8",
  component:QueN8
},
{
  path:'/Q99',
  name:"QueN9",
  component:QueN9
},
{
  path:'/Q910',
  name:"Quen10",
  component:QueN10
},
{
  path:'/Q101',
  name:"QueS1",
  component:QueS1
},
{
  path:'/Q102',
  name:"QueS2",
  component:QueS2
},
{
    path:'/Q103',
    name:"QueS3",
    component:QueS3
},
{
  path:'/Q104',
  name:"QueS4",
  component:QueS4
},
{
  path:'/Q105',
  name:"QueS5",
  component:QueS5
},
{
  path:'/Q106',
  name:"QueS6",
  component:QueS6
},
{
  path:'/Q107',
  name:"QueS7",
  component:QueS7
},
{
  path:'/Q111',
  name:"Ques1",
  component:Ques1
},
{
  path:'/Q112',
  name:"Ques2",
  component:Ques2
},
{
  path:'/Q113',
  name:"Ques3",
  component:Ques3
},
{
  path:'/Q121',
  name:"Ques1",
  component:Que1
},
{
  path:'/Q122',
  name:"Ques2",
  component:Que2
},
{
  path:'/Q123',
  name:"Ques3",
  component:Que3
},
{
  path:'/Q124',
  name:"Ques4",
  component:Que4
},
{
  path:'/Q125',
  name:"Ques5",
  component:Que5
},
{
  path:'/Q127',
  name:"Ques7",
  component:Que7
},
{
 path:'/Q126',
 name:"Ques6",
 component:Que6
},
{
  path:'/Q128',
  name:"Ques8",
  component:Que8
 },
 {
  path:'/Q129',
  name:"Ques9",
  component:Que9
 },
 {
  path:'/Q1210',
  name:"Ques10",
  component:Que10
 },
]

let router =new Router ({routes})
export default router