<template>
  <div>{{msg}}</div>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
  data () {
    return {
      msg: 'Hello Vue3.0'
    }
  }
})
</script>
