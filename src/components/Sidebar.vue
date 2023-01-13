<template>
  <div class="sidebar">

    <el-row>
      <!-- 頭像 -->
      <el-col :span="8">
        <el-avatar :size="60" src="https://empty">
          <img src="https://i.imgur.com/MIGAE6r.png" />
        </el-avatar>
      </el-col>

      <el-col :span="12">
        <p style="color: #9ef7c8; font-size: 20px">{{ username }}</p>
  

        <div class="setting">
          <el-button @click="setting">
            <el-icon><Setting /></el-icon>
            <a :span="2" style="color: #fff; font-size: 14px"> Setting </a>
          </el-button>
        </div>

        <div class="setting">
          <el-button @click="signout">
            <el-icon><CaretLeft /></el-icon>
            <a :span="2" style="color: #fff; font-size: 14px"> Sign out </a>
          </el-button>
        </div>
      </el-col>

    </el-row>

    <!-- Tree -->
    <el-tree
      v-if="($route.path = '/index/:id')"
      :data="data.tree"
      :props="defaultProps"
      @mouseover="treeElementHover"
      default-expand-all="true"
      node-key="id"
      highlight-current 
    >
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <div style="display : inline-block; width:20px;height: 20px; margin-right: 5px;" @click="AddNewPage(data)" >
            <img  src="https://i.imgur.com/XGtmPyB.png" 
                  style="width:15px;height: 15px; margin-right: 10px;" 
                  alt="新增子頁面"/>
          </div>
          <span @click="handleNodeClick(data)" >{{ node.label }}</span>
        </span>
      </template>

    </el-tree>

    <div class="sidebar-bottom">

      <el-button v-if="tab === '1'" @click="mdstyle" class="mdstyleBtn">
        <el-icon><EditPen /></el-icon>
        Markdown Style Design
      </el-button>

      <el-divider></el-divider>
      
      <el-col style="color: #d6dbd9">Designed by Leafy </el-col>
    </div>

    <el-dialog
      v-model="dialogVisible"
      width="40%"
      height="40%"
      :before-close="handleClose"
      style="background-color: #2f2f3c; color: #ffffff; border-radius: 5%;">

      <div class="styleCard">
        <el-row>
          <el-col>
            <el-avatar :size="100" src="https://empty" style="margin-left: 38%; background-color: #2f2f3c;">
              <img src="https://i.imgur.com/9uAcjfV.png" />
            </el-avatar>
          </el-col>

          <el-col>
            <div style="color: white; font-size: 40px; text-align:center; margin-right: 28px;">是否要新增?</div>
          </el-col>

          <el-col>
            <div style="text-align:center; margin-right: 28px; margin-top: 5px; margin-bottom: 10px;">
              <input autocomplete="false" type="text" placeholder="輸入題目標籤" v-model="Label_Name"/>
            </div>
          </el-col>

        </el-row>

        <!-- 確認取消按鈕 -->
        <el-row>
          <el-col :span="11">
            <el-button style="float:right; margin-right:10px; 
                              background-color: #9ef7c0; border: #9ef7c0;
                              color: #3e3c49;" @click="AddPage">確定</el-button>
          </el-col>
          <el-col :span="9">
            <el-button style="float:left; margin-left:10px; 
                              background-color: red; border: red;
                              color: white;" @click="dialogVisible = false">取消</el-button>
          </el-col>
        </el-row>

      </div>
    </el-dialog>
  
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { onMounted, ref, reactive } from "vue";
import axios from "axios";
import config from "../../config";

export default {
  name: "Sidebar",
  data() {
    return {
      EMast: '',
      Label_Name: ''
    };
  },
  setup() {
    const router = useRouter();
    const username = ref("");
    const data = reactive({ tree: [] });

    
    const dialogVisible = ref(false);

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
      console.log(row);
      router.push({ path: `/index/${row.Pageid}` }); 
    }
    
    const setting =()=>{    
      router.push({ path: "/setting" });
    };

    const signout = () => {
      localStorage.clear();
      router.push({ path: "/" });
    };

    const mdstyle = () => {
      router.push({ path: "/styleEditor" });
    };

    const renderContent = (h,data) => {
      return h('span',{},[
          h("el-button",{
                        class:'floatSpan',
                        props:{
                            type:'danger'
                        }
                    },'删除'),
          h('span',data.data.label)
      ])
    };

    return {
      username,
      handleNodeClick,
      setting,
      signout,
      mdstyle,
      tab,
      data,
      defaultProps,
      renderContent,
      dialogVisible
      // PageLists
    };
  },
  methods : {
    AddNewPage(row) {
      // Add new Page Parent Page id
      this.EMast = row.Pageid;
      this.Label_Name = "";
      this.dialogVisible = true;
    },
    AddPage() {

      let NewPage = {
        Title: "",
        Content: "",
        Style: "",
      };

      let AddChild = {
        label: this.Label_Name,
        Parent: this.EMast,
        Collaborator: [],
        Index : 0,
        Pageid: ""
      };

      axios.post(`${config.api}/api/page`, NewPage, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if(res.data.data.Status == "Successed"){
          console.log(res);
          AddChild.Pageid = res.data.data.Data;
          // add page 
          axios.put(`${config.api}/api/writer`, AddChild, {
            headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
          })
          .then((res) => {
            if(res.data.data.Status == "Successed"){
              console.log(res);
              axios.get(`${config.api}/api/member`, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              })
              .then((res) => {
                console.log(res);
                this.data.tree = [res.data.data.Data[0].PageLists[0]];
              });
              
              this.dialogVisible = false;
            }
              
          });
        }
      });
    }
  }
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

.sidebar-bottom {
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
