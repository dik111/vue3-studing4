<template>
  <div class="about">
    <h1>This is an about page</h1>
    watch
    <button @click="add">+{{ count }}</button>
    <hr>
  </div>
</template>
<script>
import {defineComponent, ref, watch,reactive} from 'vue'

export default defineComponent({
  setup() {
    const count = ref(0)
    const state = reactive({
      msg: 'Hello Vue3'
    })
    state.msg = state.msg.split('').reverse().join()
    watch([count,state],() => {
      console.log('数据改变了')
    })

    function add() {
      count.value++
    }

    return {
      count,add
    }
  }
})
</script>
