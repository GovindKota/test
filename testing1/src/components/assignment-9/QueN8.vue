<template>
    <div>
        <input type="text" v-model="res" placeholder="enter the text"/>
       <button @click="func()">ClickMe</button>
    </div>
</template>
<script>
export default {
    name:"QueN8",
    data() {
        return{
             officers : [ { id: 20, name: 'Captain Piett' },
                             { id: 24, name: 'General Veers' },
                             { id: 56, name: 'Admiral Ozzel' },
                             { id: 88, name: 'Commander Jerjerrod' } ],
        }
    },
    methods:{
        func(){
            var value=this.officers.filter((row)=>{
                return row.name==("General Veers")
            });
            console.log(value);
        }
    }
}
</script>
