import { createStore } from 'vuex'





export default createStore({
    state () {
      return {
        saving: false
      }
    },
    mutations: {
      saving (state) {
        state.saving=true;
      },
      saved (state){
        state.saving=false;
      }
    }
  })