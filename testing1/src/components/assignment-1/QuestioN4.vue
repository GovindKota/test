<template>
    <div>
        <p msg:{{msg}}></p>
        <p name:{{name}}></p>
    </div>
</template>
<script>
export default {
    name:"PropsChild",
    props:{
        msg: String,
        name: String,
    },
  methods: {
        fun(){
            document.write("hello");
        },
    },
};
</script>
