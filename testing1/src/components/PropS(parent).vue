<template>
  <div>
    <Props :num="num" ref="Mani" :name="name" />
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
      num:26742378,
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
