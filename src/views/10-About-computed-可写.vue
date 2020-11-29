<template>
  <div class="about">
    <h1>This is an about page</h1>
    计算属性
   <div>
     姓 <input type="text" v-model="firstName">
   </div>
    <div>
      名 <input type="text" v-model="lastName">
    </div>
    <div>
      全名 <input type="text" v-model="fullName">
    </div>
    <hr>
  </div>
</template>
<script>
import {defineComponent, computed ,ref } from 'vue'
export default defineComponent({
  setup () {
    const firstName = ref('')
    const lastName = ref('')
    const fullName = computed({
      get(){
        return firstName.value + lastName.value
      },
      set(val){
        // console.log('val',val);
        firstName.value = val.slice(0,1)
        lastName.value = val.slice(1)
      }
    })
    return {
      firstName,
      lastName,
      fullName
    }
  }
})
</script>
