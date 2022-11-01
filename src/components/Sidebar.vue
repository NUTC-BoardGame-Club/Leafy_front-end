<template>
  <div class="sidebar">
    <el-row>
      <el-col :span="8">
        <el-avatar :size="60" src="https://empty">
          <img src="https://i.imgur.com/MIGAE6r.png" /> </el-avatar
      ></el-col>
      <el-col :span="12">
        <p style="color: #9ef7c8; font-size: 20px">Name</p>
        <el-row>
          <el-col :span="4">
            <el-icon class="setting"><Setting /></el-icon>
          </el-col>
          <el-col :span="3" style="color: #fff"> Setting </el-col>
        </el-row>
      </el-col>
      <el-col :span="2">
        <el-icon class="arrowLeft"><DArrowLeft /></el-icon>
      </el-col> 
    </el-row>
    <el-tree :data="tree" :props="defaultProps" default-expand-all="true"> </el-tree>
    <div class="sidebar-bottom">
      <el-button>
        <el-icon><EditPen /></el-icon>
        Markdown Style Design</el-button
      >
      <el-divider></el-divider>
      <el-row>
        <el-col :span="2">
          <!-- <el-icon><Star /></el-icon> -->
        </el-col>
        <el-col :span="20" style="color:#D6DBD9">Designed by Leafy </el-col>
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
.setting{
  color: #9ef7c8;
  font-size: 20px;
}
.arrowLeft{
  color: #FFFFFF;
  font-size: 20px;
}
.el-tree {
  background: rgba(0, 0, 0, 0);
  color: #FFFFFF;
  
}
.el-tree .el-icon-caret-right:before {
  background: url('https://i.imgur.com/VwcZSCj.png') no-repeat 0 3px;
  content: '';
  display: block;
  width: 16px;
  height: 16px;
  font-size: 16px;
  background-size: 16px;
}


.sidebar-bottom {
  position: absolute;
  bottom: 10px;
}
.sidebar-bottom .el-button {
  background-color: #daaddd;
  color: #fff;
  border-color: #daaddd;
  font-size: 14px;
}
</style>
