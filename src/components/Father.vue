<template>
  <h1>老爸 -{{username}}</h1>
  有{{sfq}}私房钱
  <hr>
  <son @get="changeSfq"></son>

</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import Son from "@/components/Son.vue";
export default defineComponent({
  name: "Father",
  props:['username'],
  components:{
    Son
  },
  setup(props){
    const sfq = ref(500)
    function changeSfq(hongbao){
      sfq.value += hongbao
    }
    return{
      sfq,changeSfq
    }
  }
})
</script>

<style scoped>

</style>
