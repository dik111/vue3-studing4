import { createStore } from 'vuex'
import count from "@/store/count";
export default createStore({
  modules: {
    count
  }
})
