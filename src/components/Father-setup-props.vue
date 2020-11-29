<template>
  <h1>老爸 -{{username}}</h1>
  <hr>

</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Son from "@/components/Son.vue";
export default defineComponent({
  name: "Father",
  props:['username'],
  components:{
    Son
  },
  setup(props){
    console.log('father-props',props)
  }
})
</script>

<style scoped>

</style>
