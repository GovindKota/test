<template>
  <div>
    <b-form-input type="text" placeholder="enter text" v-model="search"></b-form-input>
    <button @click="func()">Submit</button>
  </div>
</template>
<script>
export default {
  name: "QueS4",
  data() {
    return {
      list: ["orange", "red", "blue", "black", "white"],
      search: "",
    };
  },
  methods: {
    func() {
      var value = this.list.filter((row) => {
        return row.includes(this.search);
      });
      document.write(value);
    },
  },
};
</script>
