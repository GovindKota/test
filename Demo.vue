<template>
    <div>
        <h1> vue basic </h1>
        <button @click="f()">submit</button>
    </div>
</template>
<script>


export default {
    name:"GovinD",
  data() {
        return {
            a:"hello world",
        }
        
    },
    methods:{
        f(){
            alert(this.a);
            }
    }
}
</script>
