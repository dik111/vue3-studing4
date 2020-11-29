<template>
  <h1>儿子</h1>
</template>

<script lang="ts">
import {defineComponent, inject} from 'vue'

export default defineComponent({
  name: "Son",
  setup (){
    const money =  inject('money')
    console.log(money)
  }
})
</script>

<style scoped>

</style>
