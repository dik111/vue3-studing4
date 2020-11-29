<template>
  <div class="about">
    <h1>This is an about page</h1>
    Vuex
    <button @click="add">+</button>
    <p>{{n}}</p>
  </div>
</template>
<script>
import {computed, defineComponent, onMounted, ref} from 'vue'
import {useStore} from 'vuex'
export default defineComponent({
  setup() {
    const store = useStore()
    console.log(store)
    const n = computed(()=>
      store.state.count.n
    )
    function add (){
      store.dispatch('count/increment',20)
    }
    return{
      n,add
    }
  }
})
</script>
