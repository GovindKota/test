<template>
  <div>
    <h3>Fetch data from API</h3>
    <b-table striped hover :items="user" :fields="fields"></b-table>
  </div>
</template>
<script>
import userdata from "../assignment-8/user.json";
export default {
  name: "QUe4",
  data() {
    return {
      user: userdata,
       fields: ["name", "email","_id"],
    };
  },
};
</script>
