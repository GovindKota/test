<template>
    <div>
        <h1 align="center">Question4</h1>
        <button @click="func()">ClickMe</button>

    </div>
</template>
<script>
export default {
    name:"QueS4",
    data() {
        return{

        }       
    },
    methods:{
        func(){
          var x= function(input) {
if (toString.call(input) === "[object Array]")
    return true;
    return false;   
    };
       console.log(x('w3resource'));
       console.log(x([1, 2, 4, 0]));
        }
    }
}
</script>
