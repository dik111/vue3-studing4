<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="add">{{count}}</button>
  </div>
</template>
<script>
import {defineComponent, reactive } from 'vue'
export default defineComponent({
  setup () {
    const state = reactive({
      count : 0
    })
    function add() {
      state.count ++
    }

    return {
      add,
      ...state
    }
    }
})
</script>
