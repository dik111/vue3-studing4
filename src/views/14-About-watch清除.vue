<template>
  <div class="about">
    <h1>This is an about page</h1>
    watch
    <button @click="add">+</button>
    <button @click="removeWatch">清除监听</button>
    <hr>
  </div>
</template>
<script>
import {defineComponent, reactive, ref, watch} from 'vue'

export default defineComponent({
  setup() {
    const count = ref(0)
    const stop = watch(count,()=>{
      console.log('count发生改变了')
    })
    function add() {
      count.value++
    }
    function removeWatch(){
      stop()
    }
    return {
      count,add,removeWatch
    }
  }
})
</script>
