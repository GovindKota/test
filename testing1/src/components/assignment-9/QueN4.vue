<!--<template>
    <div>
        <h1>hi</h1>
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
};
</script>-->
<template>
    <div>
        <h1>Hii</h1>
        <h1>message:{{msg}}</h1>
        <h1>name:{{name}}</h1>
    </div>
</template>
<script>
export default {
    name:"PropsChild",
    props: {
        msg:String,
        name:String
        
    },
}
</script>

