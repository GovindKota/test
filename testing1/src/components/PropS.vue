<template>
  <div>
    <p>Number:{{ num }}</p>
    <p>name:{{ name }}</p>
  </div>
</template>
<script>
export default {
  props: {
    num: String,
    name: String,
  },
  methods: {
    fun() {
      document.write("Hello");
    },
  },
};
</script> 
