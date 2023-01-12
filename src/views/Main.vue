<template>
  <Editbar @next="editBtn" />
  <el-dialog
    v-model="dialogVisible"
    width="40%"
    height="40%"
    :before-close="handleClose"
    style="background-color: #2f2f3c; color: #ffffff"
  >
    <h5>選擇要套用的樣式</h5>
    <div class="styleCard">
      <el-row>
        <el-col :span="5">
          <el-avatar :size="50" src="https://empty">
            <img src="https://i.imgur.com/UQxBRVg.png" />
          </el-avatar>
        </el-col>
        <el-col :span="15">
          <span>我的樣式01</span>
          <br />
          <span>我的樣式01的陳述，哈哈哈！</span>
        </el-col>
        <el-col :span="4">
          <el-button @click="(styleValue = true), (dialogVisible = false)"
            >套用</el-button
          >
        </el-col>
      </el-row>
    </div>
  </el-dialog>
  <div id="editor">
    <textarea v-model="input" id @mouseup="logSelectionWithinInput($event)"></textarea>
    <div id="outputPanel" v-html="output"></div>
  </div>
</template>

<script>

import { ref, computed, onMounted,watch} from "vue";
import { debounce } from "lodash-es";
import markd from "../tools/markd";
import Editbar from "../components/Editbar.vue";
// import { useRoute } from "vue-router";
import axios from "axios";
import config from "../../config";
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

import store from '@/store';


export default {
  name: "Main",
  components: {
    Editbar,
  },
  beforeRouteUpdate(to, from) {
    // 在原組件路徑改變時被調用，可以獲取組件的this，能拿到帶進路由的參數
    console.log("beforeRouteUpdate");
    console.log("to: ", to);
    console.log("from: ", from);
    console.log("=====================");
    this.id = to.params.id
    NProgress.start();
    
    axios
      .get(`${config.api}/api/page/${to.params.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        this.input = res.data.data.Data[0].Content;
        console.log('Get page api:');
        console.log(res.data.data.Data[0].Content);
        console.log(this.$store.state.saving);
      });
      NProgress.done();
      // NProgress.remove();
  },
  

  setup() {
    const input = ref("");
    const id = ref("");
    const loading = ref(true);
    const styleValue = ref(false);
    const dialogVisible = ref(false);

    watch(
      input,
      (newValue) => {
        const pageData = {
          _id: id.value,
          Title: "測試標題",
          Content:input.value,
          Style: "63ad976d15d0d8f8b50aea73",
        };
        console.log(pageData)
        store.commit('saving')
        axios
          .put(`${config.api}/api/page`,pageData, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            console.log(res);
          });
        console.log(newValue);
        // compare objects
        // Todo: 用於展示saving，實作的時候砍掉
        var t;
        clearTimeout(t)
        t = setTimeout(function (){
            console.log('saved');
            store.commit('saved')
        }, 500);
        // store.commit('saved')
      },
      { deep: true, immediate: false }
    );

    onMounted( () => {
      console.log(window.location.href)
      var www = window.location.href;
      www = www.substring(www.lastIndexOf('/') + 1)
      
      // BUG 這裡Router都取不到值

    let self_route = `${config.api}/api/page/${www}`;
    // Todo: undo
    axios
      .get(self_route, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        input.value = res.data.data.Data[0].Content;
        console.log('Get page api:');
        console.log(res.data.data.Data[0].Content);
        console.log(this.$store.state.saving);
      });
      NProgress.done();
    });
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
      if (event == "styleChoosing") {
        dialogVisible.value = true;
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
    const output = computed(() => markd.cs(input.value, styleValue.value));
    const update = debounce((e) => {
      input.value = e.target.value;
    }, 100);
    return {
      input,
      id,
      loading,
      styleValue,
      dialogVisible,
      output,
      update,
      editBtn,
      logSelectionWithinInput,
    };
  },
};
</script>

<style scoped>


.styleCard {
  width: 100%;
  height: 100%;
  border-color: #ffffff;
  color: #ffffff;
  border-style: solid;
  padding-top: 10px;
}
.styleCard .el-button {
  background-color: #b099f3;
  border-color: #b099f3;
  width: 80px;
  height: 30px;
  color: #ffffff;
}
html,
body,
#editor {
  margin: 0;
  height: 100%;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333;
  overflow: auto;
}

textarea,
#editor div {
  display: inline-block;
  width: 49%;
  /* width: 100%; */
  height: 100%;
  vertical-align: top;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 20px;
  overflow-y: auto;
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
