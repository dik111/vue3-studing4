<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button>{{count}}</button>
  </div>
</template>
<script>
import {defineComponent, ref } from 'vue'
export default defineComponent({
  setup () {
    const count = ref(0)
    return {
      count
    }
    }
})
</script>
