<template>
  <div class="sidebar">
    <el-row>
      <el-col :span="8">
        <el-avatar :size="60" src="https://empty">
          <img src="https://i.imgur.com/MIGAE6r.png" />
        </el-avatar>
      </el-col>
      <el-col :span="12">
        <p style="color: #9ef7c8; font-size: 20px">Name</p>

        <div class="setting">
          <el-button>
            <el-icon><Setting /></el-icon>
            <a :span="2" style="color: #fff; font-size: 14px"> Setting </a>
          </el-button>
        </div>
      </el-col>
      <el-col :span="2">
        <img src="https://i.imgur.com/BAJZcn1.png" />
      </el-col>
    </el-row>
    <el-tree
      :data="tree"
      :props="defaultProps"
      default-expand-all="true"
      node-key="id"
      highlight-current
      @node-click="handleNodeClick"
    >
    </el-tree>
    <!-- <div class="sidebar-bottom">
      <el-button>
        <el-icon><EditPen /></el-icon>
        Markdown Style Design</el-button
      >
      <el-divider></el-divider>
      <el-row>
       
        <el-col style="color: #d6dbd9">Designed by Leafy </el-col>
      </el-row>
    </div> -->
  </div>
</template>

<script>
import { useRouter } from "vue-router";
// import { reactive,onMounted } from "vue";
// import axios from "axios";
// import config from "../../config";

export default {
  name: "Sidebar",
  setup() {
    const router = useRouter();
    // const PageLists = reactive(

    //   {
    //     "Index": 10,
    //     "ChildPages": [
    //      "100000","100001"
    //   ]
    //   },{
    //     "Index": 10,
    //     "ChildPages": [
    //      "100000","100001"
    //   ]
    //   }
    // )

    // onMounted(() => {

    //    const temp_list = [];
    //    for( var i = 0 ; this.PageLists.length ; i++){
    //       const obj = {
    //          label:this.PageLists[i].Index,
    //          id:i+1,
    //          children:[]
    //       }
    //       if(this.PageLists[i].ChildPages.length>=1){
    //          let temp =this.PageLists[i].length
    //          while(temp>0){
    //            const obj_child = {
    //             label:this.PageLists[i].ChildPages[this.PageLists[i].ChildPages.length -temp],
    //             id:(i+1)*100 +this.PageLists[i].ChildPages.length-temp
    //            }
    //            obj.children.push(obj_child)

    //          }
    //       }
    //       temp_list.push(obj)
    //    }
    //    this.tree = temp_list
    //    console.log(temp_list)

    // });

    const tree = [
      {
        label: "Page01",

        children: [{ label: "InerPage01" }, { label: "InerPage02" }],
      },
      {
        label: "Page02",
        children: [{ label: "InerPage01" }, { label: "InerPage02" }],
      },
      {
        label: "Page03",
        children: [{ label: "InerPage01" }, { label: "InerPage02" }],
      },
    ];
    const defaultProps = {
      children: "children",
      label: "label",
    };
    async function handleNodeClick(row) {
      console.log(row);
      router.push({ path: `/index/${row.label}` });
    }

    return {
      handleNodeClick,
      tree,
      defaultProps,
      // PageLists
    };
  },
};
</script>

<style scoped>
.sidebar {
  height: 100vh;
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
  margin-top: 350px;
  text-align: center;
}
.sidebar-bottom .el-button {
  background-color: #daaddd;
  color: #fff;
  border-color: #daaddd;
  font-size: 14px;
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
