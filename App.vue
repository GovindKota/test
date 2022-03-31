<template>
  <div id="app">
  <!--  <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Demo/>
    <Tableview/>
  </div>
</template>

<script>
  
//import HelloWorld from './components/HelloWorld.vue'
import Demo from './components/Demo.vue'
import Tableview from './components/Tableview.vue'
export default {
  name: 'App',
  components: {
    //HelloWorld
    Tableview,
    Demo
  
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
