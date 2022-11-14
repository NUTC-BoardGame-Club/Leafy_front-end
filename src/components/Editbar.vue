<template>
  <div class="editbar">
    <el-button-group>
      <el-button>
        <el-image src="https://i.imgur.com/rowfrXL.png"></el-image>
      </el-button>
      <el-button>
        <el-image src="https://i.imgur.com/d1BdvJm.png"></el-image>
      </el-button>
    </el-button-group>

    <el-button-group>
      <el-button>
        <el-image src="https://i.imgur.com/TCcox0l.png"></el-image>
      </el-button>
      <el-button>
        <el-image src="https://i.imgur.com/GEgwJU1.png"></el-image>
      </el-button>
      <el-button>
        <el-image src="https://i.imgur.com/5qwxXcV.png"></el-image>
      </el-button>
      <el-button>
        <el-image src="https://i.imgur.com/XUBejUc.png"></el-image>
      </el-button>
      <el-button>
        <el-image src="https://i.imgur.com/V16UgYV.png"></el-image>
      </el-button>

      <el-button>
        <el-image src="https://i.imgur.com/BCwrrGU.png"></el-image>
      </el-button>
      <el-button>
        <el-image src="https://i.imgur.com/aG773Sx.png"></el-image>
      </el-button>
      <el-button>
        <el-image src="https://i.imgur.com/JUHQgBG.png"></el-image>
      </el-button>
    </el-button-group>

    <el-button-group>
      <el-button>
        <el-image src="https://i.imgur.com/8pbD9GQ.png"></el-image>
      </el-button>
      <el-button>
        <el-image src="https://i.imgur.com/G8CJlZ5.png"></el-image>
      </el-button>
      <el-button>
        <el-image src="https://i.imgur.com/Cnx2Xpc.png"></el-image>
      </el-button>
    </el-button-group>
    <!-- implicit style (fas is assumed) -->
    <!-- <el-icon><RefreshLeft /></el-icon> -->
  </div>
</template>
<script>
export default {
  name: "Editbar",
};
</script>
<style scoped>
.editbar {
  background-color: #2f2f3c;

  width: 49%;
  border-color: #6f6f6f;
  color: #ffff;
}
.editbar .el-button-group {
  border-right-color: #ffff;
}
.editbar .el-button-group .el-button {
  background: rgba(0, 0, 0, 0);
  align-items: center; /* 垂直居中 */
  justify-content: center; /* 水平居中 */
  border-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  width: 45px;
}
.editbar .el-button-group .el-image {
  width: 15px;
  height: 15px;
}

.editbar .el-button-group .el-button:hover {
  background-color: #9ef7c8;
}
</style>
