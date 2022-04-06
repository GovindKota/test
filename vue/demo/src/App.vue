<template>
  <div id="app">
  <!--  <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Demo/>
    <Tableview/>
    <forloop/>
    <loginform/>
    <fun/>
    <callback/>
    <Tableview2/>
    <Question6 ref="name" name="Govind">{{name}}</Question6>
    <button @click="func()">submit</button>
  
  </div>
</template>

<script>
  
//import HelloWorld from './components/HelloWorld.vue'
//import Demo from './components/Demo.vue'
//import Tableview from './components/Tableview.vue'
//import forloop from './components/forloop.vue'
//import Loginform from './components/loginform.vue'
//import fun from './components/function.vue'
//import callback from './components/callback.vue'
//import Tableview2 from './components/Tableview2.vue'
import Question6 from './components/Question6.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
    //Tableview,
    //Demo,
    //forloop,
    //Loginform,
   //fun,
   //callback,
   //Tableview2,
   Question6,
  
  },
methods:{
  func() {
    this.$refs.name.fun();
    console.log("parent");

}
},
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
