<template>
  <div class="appbar">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      text-color="#C8C8C8"
      background-color="#3E3C49"
    >
      <el-button-group>
        <el-button type="primary">
          <el-icon><EditPen /></el-icon>
        </el-button>
        <el-button type="primary">
          <el-icon><Reading /></el-icon>
        </el-button>
        <el-button type="primary">
          <el-icon><View /></el-icon>
        </el-button>
      </el-button-group>
      <div style="color:#C8C8C8;margin-left:10px;">
        Saving...
      </div>
      <div class="flex-grow" />

      <el-button class="share">
        <el-icon><Share /></el-icon>Share</el-button
      >

      <el-menu-item index="2">
        <div>
          <el-icon><MoreFilled /></el-icon>
        </div>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Appbar",
};
</script>
<style scoped>
.el-menu {
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  height: 60px;
}
.appbar .el-button-group {
  height: 32px;
  border-radius: 15px;
}
.appbar .el-button-group .el-button {
  background-color: #b5b0b0;
  border-color: black;
  color: black;
  font-size: 20px;
}
.appbar .el-button-group .el-button:hover {
  background-color: #9EF7C8;
  border-color: black;
  color: black;
  font-size: 20px;
}
.share{
  background-color:#9EF7C8 ;
  border-color: #9EF7C8;
  height: 29px;

}
.flex-grow {
  flex-grow: 1;
}
</style>
