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

    <div>
      <el-button class="createPageBtn"  @click="CreateRootPage">
        <el-icon style="margin-right: 5px;" ><Plus/></el-icon>
        Create Root Pages
      </el-button>
    </div>

    <hr style="color: #fff;">

    <!-- Tree -->
    <el-tree
      v-if="($route.path = '/index/:id')"
      :data="data.tree"
      :props="defaultProps"
      @mouseover="treeElementHover"
      default-expand-all="true"
      node-key="id"
      highlight-current 
      expand-on-click-node="true"
    >
      <template #default="{ node, data }">
        <span class="custom-tree-node">
          <div style="display : inline-block; width:20px;height: 20px; margin-right: 5px;" 
                @click="AddNewPage(data)" v-if="data.Index != 3">
            <!-- 圖 -->
            <img  src="https://i.imgur.com/XGtmPyB.png" 
                  style="width:15px;height: 15px;margin-right: 5px;" 
                  alt="新增子頁面"/>
          </div>
          <div style="display : inline-block; width:10px;" v-else></div>
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
      style="background-color: #2f2f3c; color: #ffffff; border-radius: 5%; border-color: #9ef7c0;">

      <div class="styleCard">
        <el-row>
          <el-col>
            <el-avatar :size="100" style="margin-left: 40%; background-color: #2f2f3c;">
              <img src="https://i.imgur.com/9uAcjfV.png" />
              <!-- <el-icon><QuestionFilled/></el-icon> -->
            </el-avatar>
          </el-col>

          <el-col>
            <div style="color: white; font-size: 40px; text-align:center;">是否要新增?</div>
          </el-col>

          <el-col>
            <div style="text-align:center; margin-top: 5px; margin-bottom: 10px;">
              <input autocomplete="false" type="text" placeholder="輸入題目標籤" v-model="AddChild.label"/>
            </div>
          </el-col>

        </el-row>

        <!-- 確認取消按鈕 -->
        <el-row>
          <el-col :span="12">
            <el-button style="float:right; margin-right:10px; 
                              background-color: #9ef7c0; border: #9ef7c0;
                              color: #3e3c49;" @click="AddPage">確定</el-button>
          </el-col>
          <el-col :span="8">
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
import {  onMounted, ref, reactive } from "vue";
import axios from "axios";
import config from "../../config";

export default {
  name: "Sidebar",
  data() {
    return {
      EMast: '',
      Index: '',
      Label_Name: '',
      // Page Model
      NewPage : {
        Title: "",
        Content: "",
        Style: "",
      },
      // Control_Block Model
      AddChild : {
        label: '',
        Parent: '',
        Collaborator: [],
        Index : 0,
        Pageid: ""
      }
    };
  },
  methods : {
    AddNewPage(row) {
      // Add new Page Parent Page id
      this.AddChild.Parent = row.Pageid;
      this.AddChild.label = "";
      this.Index = parseInt(row.Index,10);
      this.dialogVisible = true;
    },
    AddPage() {
      if(this.AddChild.label == "")
        return;

      axios.post(`${config.api}/api/page`, this.NewPage, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if(res.data.data.Status == "Successed"){
          //Control_Block Model Page id
          this.AddChild.Pageid = res.data.data.Data;
          // add page 
          axios.put(`${config.api}/api/writer`, this.AddChild, {
            headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
          })
          .then((res) => {
            if(res.data.data.Status == "Successed"){
              // 更新 tree
              this.GetMembers();           
              this.dialogVisible = false;
            }
          });
        }
      });
    },
    GetMembers() {
      axios.get(`${config.api}/api/member`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        this.data.tree = [];
        res.data.data.Data[0].PageLists.forEach(root => this.data.tree.push(root));
      });
    },
    CreateRootPage(){
      // Add new Page Parent Page id
      this.AddChild.Parent = "";
      this.AddChild.label = "";
      this.Index = 1;
      this.dialogVisible = true;
    },
    AutoCreateRoot() {
      this.AddChild.Parent = "";
      this.AddChild.label = "Root001";
      this.Index = 1;
    }
  },
  setup() {
    const tab = "1";
    const router = useRouter();
    const username = ref("");
    const data = reactive({ tree: [] });
    const dialogVisible = ref(false);

    onMounted(() => {
      axios.get(`${config.api}/api/member`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          data.tree = [];
          username.value = res.data.data.Data[0].Name;
          if(res.data.data.Data[0].PageLists != null)
            res.data.data.Data[0].PageLists.forEach(root => data.tree.push(root));
          if(data.tree.length  != 0 )
            router.push({ path: `/index/${res.data.data.Data[0].PageLists[0].Pageid}` });
          else {
            console.log("Create Root1");
            // 建立第一頁
            let n_Pages = {
              Title : '測試範例',
              Content : "# 範例",
              Style : ""
            };

            let n_Child = {
              Parent : "",
              Index : 1,
              label : "Root01",
              Collaborator : []
            };

            axios.post(`${config.api}/api/page`, n_Pages, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then((res) => {
              if(res.data.data.Status == "Successed"){
                //Control_Block Model Page id
                n_Child.Pageid = res.data.data.Data;
                // add page 
                axios.put(`${config.api}/api/writer`, n_Child, {
                  headers: {Authorization: `Bearer ${localStorage.getItem("token")}`},
                })
                .then((res) => {
                  if(res.data.data.Status == "Successed"){
                    // 更新 tree
                    axios.get(`${config.api}/api/member`, {
                      headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                      },
                    })
                    .then((res) => {
                      data.tree = [];
                      res.data.data.Data[0].PageLists.forEach(root => data.tree.push(root));
                      router.push({ path: `/index/${n_Child.Pageid}` });
                    });
                  }
                });
              }
            });
          }           
        });
    });

    const defaultProps = {
      children: "children",
      label: "label",
    };

    function handleNodeClick(row) { 
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

    return {
      username,
      handleNodeClick,
      setting,
      signout,
      mdstyle,
      tab,
      data,
      defaultProps,
      dialogVisible
    };
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
.createPageBtn {
  background-color: transparent;
  color: #fff;
  border: none;
  /* border-style: dashed; */
  font-size: 14px;
  width: 100%;
  text-align: center;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23FF000066' stroke-width='4' stroke-dasharray='10%2c 11' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
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
