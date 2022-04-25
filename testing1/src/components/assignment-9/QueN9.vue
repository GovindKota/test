<template>
    <div>
        <h1>spread operators</h1>
        <button @click="func()">ClickMe</button>
    </div>
</template>
<script>
export default {
    name:"SpreaDoperators",
    data() {
        return{
            array:["Govind","Mani","Nithya"],
            array1:["Srinu","Rajubabu","Laxmi"],
        }
    },
    methods:{
        func(){
            var value=[...this.array,...this.array1]
            document.write(value);
        }
    }
}
</script>
