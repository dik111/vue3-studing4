<template>
  <h1>儿子
  <button @click="send">发红包</button>
  </h1>
</template>

<script lang="ts">
import {defineComponent, reactive} from 'vue'

export default defineComponent({
  name: "Son",
  setup (props,ctx){
    const state = reactive({
      hongbao:20000
    })
    function send () {
      ctx.emit('get',state.hongbao)
    }
    return{
      send
    }
  }
})
</script>

<style scoped>

</style>
