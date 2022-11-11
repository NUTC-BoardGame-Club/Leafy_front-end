<template>
  <div class="editbar">
<!-- implicit style (fas is assumed) -->
<!-- <el-icon><RefreshLeft /></el-icon> -->
  </div>
  <div id="editor">
    <textarea v-model="input" debounce="300"> </textarea>

    <div v-html="output"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, computed } from "vue";
import { debounce } from "lodash-es";
import markd from "../tools/markd"
export default {
  name: "Home",
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
.editbar {
  background-color: #2F2F3C;
  height: 39px;
  width: 49%;
  border-color: #6F6F6F;
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  font-size: 30px;
  color: #ffff;
}

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
  background-color: #2F2F3C;
  font-size: 14px;
  font-family: "Monaco", courier, monospace;
  padding: 20px;
  color:#ffff
}

code {
  color: #f66;
}
</style>
