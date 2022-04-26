<template>
  <div>
    <b-form-input v-model="value" placeholder="Enter country" required></b-form-input><br>
    <b-button @click="getData1()" variant="danger">Click here!</b-button><br><br>
    <b-card>
      <b-table striped hover :items="posts" :fields="fields"></b-table>
     <!-- <b-card v-for="data1 in posts" :key="data1.id">
            <b-col md="6">University Name:{{ data1.name }}</b-col>
            <b-col md="10">Domains:{{ data1.domains }}</b-col>
            <b-col md="15">Website :{{ data1.web_pages[0] }}</b-col>
      </b-card>-->
    </b-card>
  </div>
</template>
<script>
export default {
  name: "QueS5",
  data() {
    return {
      posts: "",
      fields:["name","web_pages","state-province"]
    };
  },
  methods: {
    async getData1() {
      try {
        let response = await fetch("http://universities.hipolabs.com/search?country=" + this.value );
        this.posts = await response.json();
      } 
      catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getData1();
  },
};
</script>
