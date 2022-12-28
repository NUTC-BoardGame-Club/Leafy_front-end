<template>
  <Editbar @next="editBtn" />

  <div id="editor">
    <textarea
      v-model="input"
      debounce="300"
      id
      @mouseup="logSelectionWithinInput($event)"
    ></textarea>
    <div v-html="output"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, computed, onMounted } from "vue";
import { debounce } from "lodash-es";
import markd from "../tools/markd";
import Editbar from "../components/Editbar.vue";
export default {
  name: "Home",
  components: {
    Editbar,
  },
  setup() {
    const input = ref("");
    onMounted(() => {});
    const editBtn = (event) => {
      const textarea = document.querySelector("textarea");
      console.log(event);
      if (event == "bold") {
        textarea.addEventListener("select", boldSelection, true);
        return () => textarea.removeEventListener("select", boldSelection);
      }
      if (event == "slash") {
        textarea.addEventListener("select", slashSelection, false);
      }
    };
    const logSelectionWithinInput = (e) => {
      var selection = e.target.value.substring(
        e.target.selectionStart,
        e.target.selectionEnd
      );
      console.log(selection);
      if (input.value === selection) {
        input.value === "*" + selection + "*";
      }
    };

    const boldSelection = (event) => {
      const selection = event.target.value.substring(
        event.target.selectionStart,
        event.target.selectionEnd
      );
      if (selection.charAt(0) != "#" && selection.charAt(0) != "*") {
        input.value = "**" + selection + "**";
      }
    };
    const slashSelection = (event) => {
      const selection = event.target.value.substring(
        event.target.selectionStart,
        event.target.selectionEnd
      );
      if (selection.charAt(0) != "#" && selection.charAt(0) != "*") {
        input.value = "*" + selection + "*";
      }
    };
    const output = computed(() => markd.cs(input.value));
    const update = debounce((e) => {
      input.value = e.target.value;
    }, 100);
    return {
      input,
      output,
      update,
      editBtn,
      logSelectionWithinInput,
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
  overflow:auto
  
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
  overflow:auto

}
textarea,
#editor div .pre {
  background-color: darkgray;
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
