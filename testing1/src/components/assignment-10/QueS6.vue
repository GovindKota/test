<template>
  <div>
    <h1 align="center"> universities data form each country</h1>
    <b-form-select v-model="value" :options="countries"></b-form-select><br /><br />
    <b-button variant="primary" @click="getData()">Get Data</b-button>
    <b-card v-for="value in items" :key="value.domains">
      <b-card-text>{{ value.university_name }} </b-card-text>
      <p>{{ value.domains }}</p>
       <p>{{ value.state_province }}</p>
       <b-link href="#website_url" @click="redirect(value.website_url)">website_url:--{{ value.website_url }} </b-link>
    </b-card>
  </div>
</template>
<script>
const { getNames } = require("country-list");
export default {
  name: "QueS6",
  data() {
    return {
      value: "",
      items: [],
      countries: [],
    };
  },
  mounted() {
    let countries = getNames();
    this.countries = countries.map((row) => {
      return { value: row, text: row };
    });
    if (this.countries.length) this.value = this.countries[0].text;
  },
  methods: {
    redirect(value) {
      window.open(value, "_blank");
    },
    async getData() {
      let response = await fetch("http://universities.hipolabs.com/search?country=" + this.value,
        {
          method: "GET",
        }
      );
      let responseText = await response.json();
      this.items = responseText.map((row) => {
        return {
          university_name: row.name,
          domains: row.domains,
          website_url: row.web_pages[0],
          state_province: row["state-province"],
        };
      });
    },
  },
};
</script>
