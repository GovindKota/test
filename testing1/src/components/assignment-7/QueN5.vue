<template>
    <div>
        <p>QuesN5</p>
        <button @click="func()">Click</button>
    </div>
</template>
<script>
export default {
    name:"QueN5",
    data() {
        return{
            array: ["Red", "Green", "White", "Black"],
        }
    },
    methods:{
       func(){
           document.write(this.array.toString())+"<br>"+(this.array.join('+'))+"<br>"+(this.array.join(' '));
    }
}
}
</script>
