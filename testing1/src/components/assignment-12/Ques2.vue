<template>
    <div>
        <h1 align="center">Question2</h1>
        <button @click="func()">ClickMe</button>

    </div>
</template>
<script>
export default {
    name:"QueS2",
    data() {
        return{
            arraynum:[15,30,60,80]
        }
    },
    methods:{
        func(){
            const doubled=this.arraynum.reduce((accumulator,currentValue)=>{
              accumulator.push(currentValue*2);
              return accumulator;
            },[]);
             document.write("input : " + this.arraynum),
             document.write("</br>Output : " + doubled);
        }
    }
}
</script>
