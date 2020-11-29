<template>
  <div class="about">
    <h1>This is an about page</h1>
    生命周期-初始化
    <button @click="add">+</button>
    <p>{{count}}</p>
    <hr>
  </div>
</template>
<script>
import {defineComponent, ref, onBeforeUpdate,onUpdated,reactive } from 'vue'

export default defineComponent({
  setup() {
    const count = ref(0)
    function add() {
      count.value ++
    }
    onBeforeUpdate(() =>{
      console.log('onBeforeUpdate')
    })
    onUpdated(() =>{
      console.log('onUpdated')
    })
    return {
      add,count
    }
  }
})
</script>
