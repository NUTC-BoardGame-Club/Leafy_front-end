<template>
  <!-- <Editbar/> -->

  <div id="editor">
    <textarea v-model="input" debounce="300"> </textarea>

    <div v-html="output"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, computed } from "vue";
import { debounce } from "lodash-es";
import markd from "../tools/markd";
// import Editbar from "../components/Editbar.vue";
export default {
  name: "Home",
  // components:{
  //   Editbar
  // },
  setup() {
    const input = ref("");
    const output = computed(() => markd.cs(input.value));
    const update = debounce((e) => {
      input.value = e.target.value;
    }, 100);
    return {
      input,
      output,
      update,
    };
  },
};
</script>

<style scoped>
html,
body,
#editor {
  margin: 0;
  height: 100%;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
}

textarea,
#editor div {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  resize: none;
  outline: none;
  background-color: #2f2f3c;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
  color: #ffff;
}
@media screen and (max-width: 780px) {
  html,
  body,
  #editor {
    display: none;
  }
  .editbar {
    display: none;
  }
}
code {
  color: #f66;
}
</style>
