<template>
  <div>
    <h1>Table view</h1>
    <table align="center">
      <thead>
        <tr>
          <th>Email</th>
          <th>id</th>
          <th>name</th>
        </tr>
      </thead>
      <tr v-for="array in array" :key="array.id">
          <td>{{ array.Email }}</td>
          <td>{{ array.id }}</td>
          <td>{{ array.name }}</td>
        </tr>
      <tbody>
      </tbody>
    </table>
  </div>
</template>
 <script>
export default {
  name: "TablevieW2",
  data() {
    return {
      array: [
        {Email: "Eliseo@gardner.biz", id: 1, name: "id labore ex et quamlaborum"}, 
        {Email: "Jayne_Kuhic@sydney.com", id: 2, name: "quo vero reiciendisvelit similique earum"},
         {Email: "Nikita@garfield.biz", id: 3, name: "odio adipisci rerumaut animi"}, 
         {Email: "Lew@alysha.tv", id: 4, name: "alias odio sit"}
],
    };
  },
};
</script>
<style scoped>

table {

font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
border-collapse: collapse;
width: 50%;
background-color: white;

}

td,
th {
border: 5px solid #dddddd;
text-align: left;
padding: 8px;

}

</style>
                