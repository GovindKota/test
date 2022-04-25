<template>
  <div>
    <h1>Hello</h1>
    <b-form-input v-model="value" placeholder="enter country name" required></b-form-input>
    <button @click="getData()">click</button>
    <b-table striped hover :items="posts" :fields="fields"></b-table>
  </div>
</template>
<script>
export default {
  name:"FetcH",
  data() {
    return {
      posts: " ",
      fields: ["name", "domains", "state-province", "web-pages"],
    };
  },
  methods: {
    async getData() {
     // try {
        let response = await fetch("http://universities.hipolabs.com/search?country=" + this.value);
        this.posts = await response.json();
      //} 
      //catch (error) {
        //console.log(error);
     // }
    },
  },
  created() {
    this.getData();
  },
};
</script>
