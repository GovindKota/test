<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
     <QueN6 refs="name" name="Govind" > {{name}}</QueN6>
      <!-- <button type="submit" @click="f1()">ClickMe</button> -->
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
//import QueN6 from './components/assignment-8/QueN6.vue'
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
  components:{
    //QueN6,
   // HelloWorld,
   //QuestioN3
    //Btable,
    //Loginform,
    //Tableview2,
   //QuestioN7,
   //Demo,
   //Cookies,
  },
  methods:{
   f1(){
   this.$refs.name.func();
   console.log("this is Parent")

},
  }
  // methods: {
  //    func() {
  //     // this.$refs.Mani.fun();
  //     // this.msg = this.$refs.msg;
  //     this.name = this.$refs.name;
  //   },
  // }
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
