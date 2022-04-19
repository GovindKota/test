<template>
    <div>
        <button @click="func()">Click</button>
    </div>
</template>
<script>
export default {
    name:"QueN7",
    data() {
        return{
            nums : [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6],
        }
    },
    methods:{
        func() {
            document.write([...new Set(this.nums)]);
        }
    }
}
</script>
