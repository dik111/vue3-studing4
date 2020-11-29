<template>
  <div class="about">
    <h1>This is an about page</h1>
    setup参数
    <father :username="username"></father>
    <hr>
  </div>
</template>
<script>
import {defineComponent, onMounted, ref} from 'vue'
import Father from "@/components/Father";
export default defineComponent({
  components:{Father},
  setup(props,ctx) {
    const username = ref('123')
    return {
      username
    }
  }
})
</script>
