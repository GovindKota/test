<template>
    <div>
<button @click="func()">Submit</button>
    </div>
</template>
<script>
export default{
    name:"QueN3",
    data() {
        return {
            arraynum:[1,2,2,2,3,4,3,2],
        }
        
    },
    methods:{
        func() {
       console.log([...new Set(this.arraynum)])
        }
    }
}
</script>
