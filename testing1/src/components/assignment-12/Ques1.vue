<template>
    <div>
        <button @click="func()">Submit</button>
        <p>{{diameter()}}</p>
        <p>{{perimeter()}}</p>
        
    </div>
</template>
<script>
export default {
    name:"QueS1",
    data() {
        return{
              radius:20,
            PI:3.14,
            perimeter:()=>2*this.PI*this.radius,
        }
    },
    methods:{
        diameter(){
             const circle={
                radius:20,
            }
            console.log(circle);
           return this.radius*2;
        }
    }
}
</script>
