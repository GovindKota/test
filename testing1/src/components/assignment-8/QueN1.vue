<template>
  <div>
    <form name="myform" method="post" onsubmit="func()"></form>
    <input type="text" name="word" placeholder="Enter Text" />
    <button @click="func()">Search</button>
  </div>
</template>
<script>
export default {
  name: "QueN1",
  data() {
    return {
      search: "",
      array: ["agile", "crm", "mantra", "technologies", "500apps", "infinity"],
    };
  },
  methods: {
    func() {
      if (this.search) {
        return this.array.filter((item) => {
          return this.search.toLowerCase().split(" ").every((v) => item.title.toLowerCase().includes(v));
        });
      } 
      else {
        return this.array;
      }
    },
  },
};
</script>
