<template>
    <div>
        <h1 align="center">Question4</h1>
        <button @click="func()">Submit</button>
    </div>
</template>
<script>
export default {
    name:"QueS3",
    data() {
        return{
            array:[1,1,2,2,2,3,4,3,2]
        }     
    },
    methods:{
        func(){
            var unique = this.array.filter((v, i, a) => a.indexOf(v) === i);
            console.log(unique);
        }
    }
}
</script>
