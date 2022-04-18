<template>
  <div>
    <p>msg:{{ msg }}</p>

    <p>name:{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
<<<<<<< HEAD
=======

>>>>>>> 244b63e1a78664e24eac52d5e745182cfbe5f3b1
    name: String,
  },

  methods: {
    fun() {
      document.write("Hello");
    },
  },
};
</script>
