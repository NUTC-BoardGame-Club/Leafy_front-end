<template>
  <div class="sidebar">
    <el-row>
      <el-col :span="8">
        <el-avatar :size="60" src="https://empty">
          <img src="https://i.imgur.com/MIGAE6r.png" /> </el-avatar
      ></el-col>
      <el-col :span="12">
        <p style="color: #9ef7c8; font-size: 20px">Name</p>

        <div class="setting">
          <el-button >
            <el-icon><Setting /></el-icon>
            <a :span="2" style="color: #fff; font-size: 14px"> Setting </a>
          </el-button>
        </div>
      </el-col>
      <el-col :span="2">
        <img src="https://i.imgur.com/BAJZcn1.png"/>
      </el-col>
    </el-row>
    <el-tree
      :data="tree"
      :props="defaultProps"
      default-expand-all="true"
      node-key="id"
      highlight-current
   
    >
    </el-tree>
    <div class="sidebar-bottom">
      <el-button>
        <el-icon><EditPen /></el-icon>
        Markdown Style Design</el-button
      >
      <el-divider></el-divider>
      <el-row>
        <el-col :span="2">

        </el-col>
        <el-col :span="20" style="color: #d6dbd9">Designed by Leafy </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  setup() {
    const tree = [
      {
        label: "Page01",
        children: [
          { label: "InerPage01", url: "/" },
          { label: "InerPage02", url: "/" },
        ],
      },
      {
        label: "Page02",
        children: [
          { label: "InerPage01", url: "/" },
          { label: "InerPage02", url: "/" },
        ],
      },
      {
        label: "Page03",
        children: [
          { label: "InerPage01", url: "/" },
          { label: "InerPage02", url: "/" },
        ],
      },
    ];
    const defaultProps = {
      children: "children",
      label: "label",
    };
    return {
      tree,
      defaultProps,
    };
  },
};
</script>

<style scoped>
.setting .el-icon {
  color: #9ef7c8;
  font-size: 20px;
}
.setting .el-button{
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);
}
.setting {
  margin-left: -20px;
  margin-top: -20px;
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
  top: 700px;
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
  background-color: #D9D9D9;
  height: 40px;
  opacity: 0.9;
  color: #000;
}
.el-tree-node__content:active  {
  background-color: #D9D9D9;
  opacity: 0.9;
  height: 40px;
  color: #000;

}
.el-tree-node__content:hover  {
  background-color:#D9D9D9;
  opacity: 0.9;
  height: 40px;
  color: #000;
}
</style>
