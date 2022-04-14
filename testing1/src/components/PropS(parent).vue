<template>
  <div>
    <Props :msg="msg" ref="Mani" :name="name" />

    <button @click="func()">ClickMe</button>
  </div>
</template>

<script>
import Props from "./PropS.vue";

export default {
  components: {
    Props,
  },

  data() {
    return {
      msg: "Hi",

      name: "Govind",
    };
  },

  methods: {
    func() {
      this.$refs.Mani.fun();
    },
  },
};
</script>
