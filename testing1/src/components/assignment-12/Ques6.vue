<template>
  <div>
      <h1 align="center">Question6</h1>
      <button @click="func()">ClickMe</button>
  </div>
</template>
<script>
export default {
  name: "QueS6",
  data() {
    return {
      a: [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3],
      b: 1,
      c: 0,
    };
  },
  methods: {
    func() {
      for (var i = 0; i < this.a.length; i++) {
        for (var j = i; j < this.a.length; j++) {
          if (this.a[i] == this.a[j])this. c++;
          if (this.b < this.c) {
            this.b = this.c;
           this. item =this. a[i];
          }
        }
        this.c = 0;
      }
      document.write(this.item + " ( " + this.b + " times ) ");
    },
  },
};
</script>
