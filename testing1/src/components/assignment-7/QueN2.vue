<template>
  <div>
    <h1 align="center">QueN2</h1>
    <button @click="func()"></button>
  </div>
</template>
<script>
export default {
  name: "QueN2",
  data() {
    return {
      arraynum: [15, 30, 60, 80],
    };
  },
  methods: {
    func() {
     const doubled = this.arraynum.reduce((accumulator, currentValue) => {

accumulator.push(currentValue * 2);

return accumulator;

}, []);

document.write("input : " + this.arraynum),

document.write("</br>Output : " + doubled);
    },
  },
};
</script>
