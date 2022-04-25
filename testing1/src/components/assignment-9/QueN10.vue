<template>
    <div>
        <h1>index values</h1>
       <button @click="func()">ClickMe</button>
    </div>
</template>
<script>

export default{
    name:"QueN1",
    data() {
        return{
             array:[
              {id: 20, name:"Captain Piett"},
              { id: 24, name: 'General Veers' },
              { id: 56, name: 'Admiral Ozzel' },
              { id: 88, name: 'Commander Jerjerrod'}],
        }
    },
    methods:{
        func(){
            var result=this.array.map(x => x.id)
           console.log(result);
        }
    }
}
</script>
