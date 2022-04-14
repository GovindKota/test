<template>
    <div>
        <h1>Hello</h1>
        <QuestioN5 @Clickme="fun"></QuestioN5>
    </div>
</template>
<script>
import QuestioN5 from './QuestioN5.vue'
export default {
    name:"EmiT",
    components: {
        QuestioN5
       
    },
    methods:{
        fun(){
            document.write("Hi this is Govind");
        },
    },
};
</script>
