<template>
  <div>
    <!-- <form name="myform" method="post" onsubmit="myfun()">-->
       <input type="text"  v-model="res" placeholder="Enter Text" />
      <b-button @click="myfun">Map</b-button>
      <b-button @click="fun">ForEach</b-button>
      <b-button @click="func()">Filter</b-button>
      <b-button @click="f1()">Find</b-button>
    <!-- </form> -->
  </div>
</template>
<script>
export default {
  name: "QuestioN1",
  data() {
    return {
      array: ["agile", "crm", "mantra","technologies","500apps", "infinity"],
      res:"",
    }
  },
  methods: {
    myfun() {
      var res = this.array.map(r=>{
        return r.name
      })
      console.log(res);
    },
fun(){
  this.array.forEach((row) => {
    console.log(row);
  })
},
func(){
   var value = this.array.filter((row)=>{
     return row.includes(this.res);
   })
   console.log(value);
}
    },
    f1(){
      var value=this.array.find((row)=>{
          return row.includes("ag");
      })
      console.log(value);
    }
}
</script>
