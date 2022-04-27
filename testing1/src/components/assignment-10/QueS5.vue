<template>
  <div>
    <h1>University Data</h1>
    <b-form-input v-model="text" placeholder="Enter country" required></b-form-input><br />
    <b-button @click="getData()" variant="success">Click here!</b-button><br /><br />
    <b-card>
      <b-table striped hover :items="posts" :fields="fields"></b-table>
    <b-card v-for="data in posts" :key="data.id">
          <!--<b-col> Website:<b-link @click="redirect(data.website_url)" href="#web_pages">{{ data.web_pages[0] }}
         </b-link></b-col>
        <b-container class="bv-example-row">
          <b-row>
            <b-col>University Name:{{ data.name }}</b-col>
          </b-row>
          <b-row>
            <b-col>Domains:{{ data.domains }}</b-col>
          </b-row>
        </b-container>-->
      </b-card>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "QueN5",
  data() {
    return {
      posts: "",
      data:"",
      fields:["name","domains[0]","web_pages[0]"]
    };
  },
  methods: {
    async getData() {
        let response = await fetch("http://universities.hipolabs.com/search?country=" + this.text);
        this.posts = await response.json();
    },
  },
    
};
</script>
