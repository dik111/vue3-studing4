<template>
  <div class="about">
    <h1>This is an about page</h1>
    跨组件通信
    <father></father>
    <hr>
  </div>
</template>
<script>
import {defineComponent, ref, provide } from 'vue'
import Father from "@/components/Father";
export default defineComponent({
  components: {Father},
  setup() {
    const money = ref(20000000)
    provide('money',money.value)
  }
})
</script>
