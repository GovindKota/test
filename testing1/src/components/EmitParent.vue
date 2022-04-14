<template>
    <div>
        <Emitchild @Clickme="fun"></Emitchild>
    </div>
</template>
<script>
import Emitchild from './EmitChild.vue'
export default {
    name:"EmiT",
    components: {
        Emitchild
       
    },
    methods:{
        fun(){
            document.write("Hi this is Govind");
        },
    },
};
</script>
