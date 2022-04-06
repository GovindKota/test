<template>
  <div>
    <h1>callback functions</h1>
    <button @click="f4()">click</button>
    <p id="demo"></p>
  </div>
</template>
<script>i

export default {
  data() {
  },
    methods:{
                f1(){
                console.log("First");
            },
             f2(w){
                console.log("Secound");
                w();
            },
           f3(a,b){
                console.log("Third");
                f2(f1);
            },
             f4(c,d,e){
                console.log("Fourth");
                f3(f1,f2);

           },
           document.write(document.getElementById("demo").innerHTML)=f1
  },
}
</script>
