<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button>{{count}}</button>
  </div>
</template>
<script>
import {defineComponent, reactive } from 'vue'
export default defineComponent({
  setup () {
    const state = reactive({
      count: 0,
      todos:[{
        id: 1,
        task: '任务一'
      },{
        id:2,
        task:'任务二'
      }]
    })
return state
  }
})
</script>
