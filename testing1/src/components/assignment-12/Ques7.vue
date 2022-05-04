<template>
  <div>
    <h1 align="center">Question7</h1>
    <button @click="func()">ClickMe</button>
  </div>
</template>
<script>
export default {
  name: "QueS7",
  data() {
    return {
      array: [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6],
    };
  },
  methods: {
    func() {
      var unique = this.array.filter((v, i, a) => a.indexOf(v) === i);
      console.log(unique);
    },
  },
};
</script>
