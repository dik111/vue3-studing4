<template>
  <h1>老爸</h1>
  <hr>
  <son></son>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Son from "@/components/Son.vue";
export default defineComponent({
  name: "Father",
  components:{
    Son
  }
})
</script>

<style scoped>

</style>
