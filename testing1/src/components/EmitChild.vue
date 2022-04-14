<template>
    <div>
        <button  @click="func">Click me!</button>
    </div>
</template>
<script>
export default {
name:"EmiTchild",
        components:{
        },
        methods:{
           func() {
               this.$emit("Clickme");
           }
         },
         
        }
</script>
