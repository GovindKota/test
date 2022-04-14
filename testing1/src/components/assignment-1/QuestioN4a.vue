<template>
    <div>
        <props :msg="msg"  ref="Mani" :name="name"/>
            <button @click="func()">Clickme</button>
 </div>
</template>
<script>
import Props from './QuestioN5a.vue'
export default {
components:{
    Props,
},
data(){
    return {
        msg:"Hi",
        name:"Govind",
    }
},
methods:{
func(){
   this.$refs.Mani.fun();
},
},
};
</script>
