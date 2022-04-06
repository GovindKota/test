<template>
<div>
    <h1> for loop </h1>
    <button @click="fun()">click</button>
</div>
</template>
<script>
export default{
    name:"FoR",
    data(){
        return{
    
        }
    },
    methods:{
        fun(){
             var array=["This","is","Govind"];
             var b=""
            for (var i=0;i<=array.length;i++)
            {
                b+=array[i]+"<br>";
            }

document.write(b);

        }
    }
    
}
</script>


