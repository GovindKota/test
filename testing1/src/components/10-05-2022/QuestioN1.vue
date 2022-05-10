<template>
    <div>
   <b-table :items="items" :fields="fields" align="center"></b-table>
    </div>
</template>
<script>
export default {
    name:"BtablE",
    data() {
        return{
            fields:["productName","productPrice","productCategory"],
          items:[
              productName = "mantra",
              productPrice = 10000000,
              productCategory = "technologies"
          ]
        }
    },
}
</script>
<style scoped>
b-table {
  font-family: fantasy;
  text-align: center;
  color: white;
  margin-top: 70px;
  border: 2px;
}
</style>
