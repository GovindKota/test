<template>
    <div>
        <p @click="func">Clickme</p>
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
