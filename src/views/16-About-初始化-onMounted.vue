<template>
  <div class="about">
    <h1>This is an about page</h1>
    生命周期-初始化
    <p></p>
    <hr>
  </div>
</template>
<script>
import {defineComponent, onBeforeMount,onMounted,ref,reactive} from 'vue'

export default defineComponent({
  setup() {
    console.log('setup')
    onBeforeMount(() =>{
      console.log('onBeforeMount')})

  onMounted(()=>{
    document.querySelector('p').innerHTML = 'Hello Vue3'
    document.querySelector('p').style.background = 'red'
  })
  }
})
</script>
