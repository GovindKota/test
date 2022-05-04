<template>
  <div>
    <h1 align="center">ClickMe</h1>
    <button @click="func()">ClickMe</button>
  </div>
</template>
<script>
export default {
  name: "QueS5",
  data() {
    return {
      array: ["Red", "Green", "White", "Black"],
    };
  },
  methods: {
    func() {
      document.write(this.array.toString()) + "<br>" +this.array.join("+") + "<br>" + this.array.join(" ");
    },
  },
};
</script>
