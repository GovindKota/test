<template>
  <div>
    <h1>Alphabetical and Reverse</h1>
    <button @click="func()">Alphabetical</button>
    <button @click="func1()">reverse</button>
    <p v-for="user in Users" :key="user.id"></p>
  </div>
</template>
<script>
export default {
  name: "QueN1",
  data() {
    return {
      Users: [
        { name: "500apps", id: 1 },
        { name: "Technologies", id: 2 },
        { name: "Agile", id: 3 },
        { name: "Mantra", id: 4 },
        { name: "Clockly", id: 5 },
        { name: "CRM", id: 6 },
        { name: "500apps", id: 7 },
      ],
    };
  },
  methods: {
    func() {
      var field = "name";
      var res = this.Users.sort((a, b) =>
        (a[field] || "").toString().localeCompare((b[field] || "").toString())
      );
      document.write(JSON.stringify(res));
    },
    func1() {
      var field = "name";
      var res = this.Users.sort((a, b) =>
        (a[field] || "").toString().localeCompare((b[field] || "").toString())
      );
      document.write(JSON.stringify(res.reverse()));
    },
  },
};
</script>
