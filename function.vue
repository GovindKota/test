<template>
    <div>
        <h1>Function</h1>
        <button @click="fun()">click</button>
    </div>
</template>
<script>

export default {
    name:"FunctioN",
    data() {
        return {

a:[
{name:"Govind",Phone:"2222222222"},
{name:"Manikanta",Phone:"5555555555"},
{name:"srinu",Phone:"33333333"},
]
         }     
        
    },
    methods: {
        fun(){
            console.log(this.a);
        }
    }
}
</script>
