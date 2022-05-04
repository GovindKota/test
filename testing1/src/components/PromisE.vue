<template>
    <div>
     <h1>Axios using in promise </h1>{{res}}
     <button @click="func()">ClickMe</button>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name:"PromisE",
    data() {
        return{
        res:""
        }
            },
    methods:{
         func(){
              new Promise( (rejectionFunc) => { axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
         .then((response) => {this.res = response})
         .catch((error) => { rejectionFunc(error);});
             });
        }
    }
}
</script>
