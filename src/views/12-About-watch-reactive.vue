<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ count }}
    <hr>
  </div>
</template>
<script>
import {defineComponent, reactive, watch} from 'vue'

export default defineComponent({
  setup() {
    const state = reactive({count: 0})
    state.count++
    watch(
        () => state.count,
        () => {
          console.log('改变了')
        }
    )
    setInterval(() => {
      state.count++
    }, 1000)
    return state
  }
})
</script>
