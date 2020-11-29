<template>
  <div class="about">
    <h1>This is an about page</h1>
    计算属性
    {{msg}}
    {{arr}}
    <hr>
  </div>
</template>
<script>
import {defineComponent, computed,  reactive } from 'vue'
export default defineComponent({
  setup () {
    const state = reactive({
      msg:'Hello vue3'
    })

    const arr =  computed(() => {
      return state.msg.split('')
    })
    return {
      ...state,arr
    }
  }
})
</script>
