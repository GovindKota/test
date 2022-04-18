<template>
    <div>
    </div>
</template>
<script>
export default {
    name:"QueN4",
    data() {
        
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

