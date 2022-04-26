<template>
  <div>
    <form>
      1st Number:<input type="text" id="Firstnumber" /><br />
      2nd Number:<input type="text" id="Secoundnumber" /><br />
      <button @click="func()">Multiply</button>
      <button @click="func1()">Divide</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "QueS2",
  data() {
    return {

    }
  },
  methods: {
    func() {
   var num1 = document.getElementById("Firstnumber").value;
   var num2 = document.getElementById("Secoundnumber").value;
      var res = num1 * num2;
      document.write(res);
    },
    func1() {
     var num1 = document.getElementById("Firstnumber").value;
     var num2 = document.getElementById("Secoundnumber").value;
      var res = num1/num2;
      document.write(res);
    },
  },
};
</script>
