<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <router-view/>
    <QuestioN3 />
   <QuestioN7 />
   <Btable />
   <loginform />
   <Tableview2 />
   <Demo/>
   <cookies/>
   <QuestioN5/>
   <Question6/>
  </div>
</template>


<script>
//import Btable from './components/Btable.vue'
//import Loginform from './components/loginform.vue'
//import Tableview2 from './components/Tableview2.vue'
//import HelloWorld from './components/HelloWorld.vue'
//import QuestioN3 from './components/assignment-4(08-04-22)/QuestioN3.vue'
//import QuestioN7 from './components/assignment-4(08-04-22)/QuestioN7.vue'
//import Demo from './components/Demo.vue'
//import Cookies from './components/07-04-2022/Cookies.vue'
export default {
  name: 'App',
  components: {
   // HelloWorld,
   //QuestioN3
    //Btable,
    //Loginform,
    //Tableview2,
   //QuestioN7,
   //Demo,
   //Cookies,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
