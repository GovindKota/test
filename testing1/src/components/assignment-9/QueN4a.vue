<template>
    <div>
      <props  :msg="msg" :name="name"></props>
    </div>
</template>
<script>
import props from './QueN4.vue'
export default {
    name:"PropsParent",
    components:{
          props,
    },
    data() {
        return{
              msg:"Hi",
              name:"Govind"
        }
    },
}
</script>
