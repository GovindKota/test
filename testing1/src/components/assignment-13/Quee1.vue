<template>
  <div>
    <b-form id="form">
      Enter FirstName:<b-form-input  v-model="value" placeholder="enter First name"></b-form-input>
      Enter LastName:<b-form-input  v-model="value1" placeholder="enter Last name"></b-form-input>
      <b-button @click="Add()" variant="success">Add</b-button>
      <b-button @click="Delete()" variant="danger">Delete</b-button>
      <b-button @click="Update()" variant="primary">Update</b-button>
    </b-form>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>
<script>
export default {
  name: "QuestoN3",
  data() {
    return {
      items: [{ first_name: "Agile", last_name: "CRM" }],
      fields: ["first_name", "last_name"],
      value:"",
      value1:"",
    };
  },
  methods: {
    Add() {
      this.items.push({
        first_name: this.value,
        last_name: this.value1,
      });
      this.value="",
      this.value1=""
    },
    Delete() {
      this.items.pop();
    },
   Update() {
      this.items.put({
         first_name: this.value,
        last_name: this.value1,
      });
      this.value="",
      this.value1=""
    }
  },
};
</script>