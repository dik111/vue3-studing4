<template>
  <div class="about">
    <h1>This is an about page</h1>
    refs绑定获取元素或者组件
    <p ref="text"></p>
    <hr>
  </div>
</template>
<script>
import {defineComponent, onMounted, ref} from 'vue'

export default defineComponent({

  setup() {
    const text = ref(null)
    onMounted(()=>{
      text.value.innerHTML = 'Hello Vue3'
      text.value.style.color = 'red'
    })
    return {text}
  }
})
</script>
