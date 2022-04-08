<template>
  <div id="app">
  <!--  <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Demo/>
    <Tableview/>
    <forloop/>
    <loginform/>
    <fun/>
    <Btable />
  
  </div>
</template>

<script>
  
//import HelloWorld from './components/HelloWorld.vue'
import Demo from './components/Demo.vue'
import Tableview from './components/Tableview.vue'
import forloop from './components/forloop.vue'
import Loginform from './components/loginform.vue'
import fun from './components/function.vue'
import Btable from './components/Btable.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld
    Tableview,
    Demo,
    forloop,
    Loginform,
   fun,
   Btable,
  
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
