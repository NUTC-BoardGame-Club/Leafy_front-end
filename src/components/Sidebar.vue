<template>
  <div class="sidebar">
    <el-row>
      <el-col :span="8">
        <el-avatar :size="60" src="https://empty">
          <img src="https://i.imgur.com/MIGAE6r.png" />
        </el-avatar>
      </el-col>
      <el-col :span="12">
        <p style="color: #9ef7c8; font-size: 20px">{{ username }}</p>

        <div class="setting">
          <el-button>
            <el-icon><Setting /></el-icon>
            <a :span="2" style="color: #fff; font-size: 14px"> Setting </a>
          </el-button>
        </div>
      </el-col>
      <!-- <el-col :span="2">
        <img src="https://i.imgur.com/BAJZcn1.png" />
      </el-col> -->
    </el-row>

    <el-tree
      v-if="($route.path = '/index/:id')"
      :data="data.tree"
      :props="defaultProps"
      default-expand-all="true"
      node-key="id"
      highlight-current
      @node-click="handleNodeClick"
    >
    </el-tree>
    <br />
    <br />

    <div class="sidebar-bottom">

  

    <el-button v-if="tab === '1'" @click="mdstyle" class="mdstyleBtn">
      <el-icon><EditPen /></el-icon>
      Markdown Style Design</el-button
    >
    <el-divider></el-divider>
    
    <el-col style="color: #d6dbd9">Designed by Leafy </el-col>
  </div>
    <!-- <br />
    <br />
    <el-button @click="mdstyle" class="loginoutBtn">登出 </el-button> -->

    <!-- <el-button  v-if="this.$route.name != '/styleEditor'" >
        <el-icon><EditPen /></el-icon>
        Back to Markdown Editor</el-button
      > -->

      
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { onMounted, ref, reactive } from "vue";

// import { reactive,onMounted } from "vue";
import axios from "axios";
import config from "../../config";

export default {
  name: "Sidebar",
  setup() {
    const router = useRouter();
    const username = ref("");
    const data = reactive({ tree: [] });
    onMounted(() => {
      axios
        .get(`${config.api}/api/member`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          username.value = res.data.data.Data[0].Name;
          console.log("Get member api:");
          console.log(res.data.data.Data[0].PageLists[0]);
          data.tree = [res.data.data.Data[0].PageLists[0]];
        });
    });

    const tab = "1";

    const defaultProps = {
      children: "children",
      label: "label",
    };
    function handleNodeClick(row) {
     
      router.push({ path: `/index/${row.Pageid}` });
    
    }
    const mdstyle = () => {
      router.push({ path: "/styleEditor" });
    };
    return {
      username,
      handleNodeClick,
      mdstyle,
      tab,
      data,
      defaultProps,
      // PageLists
    };
  },
};
</script>

<style scoped>
.sidebar {
  height: 100vh;
  position: relative;
}
.setting .el-icon {
  color: #9ef7c8;
  font-size: 20px;
}
.setting .el-button {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
}
.setting {
  margin-left: -2%;
  margin-top: -2%;
}
.setting:hover {
  background-color: #d9d9d9 !important;
  opacity: 0.8;
}
.arrowLeft {
  color: #ffffff;
  font-size: 20px;
}
.el-tree {
  background: rgba(0, 0, 0, 0);
  color: #ffffff;
}

.sidebar-bottom{
  position: absolute;
  bottom: 0;
  left: 0;
}
.mdstyleBtn {
  background-color: #daaddd;
  color: #fff;
  border-color: #daaddd;
  font-size: 14px;
  width: 100%;
  text-align: center;
}
.loginoutBtn {
  background-color: #eb455f;
  color: #fff;
  border-color: #eb455f;
  font-size: 14px;
  width: 50%;
  
}
</style>

<style>
.el-tree-node:focus > .el-tree-node__content {
  background-color: #d9d9d9;
  height: 40px;
  opacity: 0.9;
  color: #000;
}
.el-tree-node__content:active {
  background-color: #d9d9d9;
  opacity: 0.9;
  height: 40px;
  color: #000;
}
.el-tree-node__content:hover {
  background-color: #d9d9d9;
  opacity: 0.9;
  height: 40px;
  color: #000;
}
</style>
