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
      <div style="color: #c8c8c8; margin-left: 10px" v-if="this.$store.state.saving">Saving...</div>
      <div style="color: #c8c8c8; margin-left: 10px" v-else>Saved</div>
      <div class="flex-grow" />

      <el-button class="share">
        <el-icon><Share /></el-icon>Share</el-button
      >

      <el-menu-item index="2">
        <el-icon style="color: #9ef7c8"><MoreFilled /></el-icon>
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
  border-radius: 8px;
}
.appbar .el-button-group .el-button {
    
  background: rgba(181, 176, 176, 0.2);
  border-color: black;
  color: black;
  font-size: 20px;
}
.appbar .el-button-group .el-button:hover {
  background-color: #9ef7c8;
  border-color: black;
  color: black;
  font-size: 20px;
}

.share {
  background-color: #9ef7c8;
  border-color: #9ef7c8;
  height: 29px;
}
.share:hover {
  background-color: #f7de9e;
  color: #333;
  border-color: #f7de9e;
}
.share::before {
  background-color: #f7de9e;
  color: #333;
  border-color: #f7de9e;
}

.flex-grow {
  flex-grow: 1;
}
</style>
