<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ count }}</p>
    <p>{{n}}</p>
    <hr>
  </div>
</template>
<script>
import {defineComponent, reactive, ref, watch} from 'vue'

export default defineComponent({
  setup() {
    const count = ref(0)
    const state = reactive({n:0})

    watch([count,() => state.n],() =>{
      console.log('执行了')
    })
    setInterval( () =>{
      // count.value++
      state.n++
    },1000)
    return {
      count,
      ...state
    }
  }
})
</script>
