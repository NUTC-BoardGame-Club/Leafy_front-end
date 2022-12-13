<template>
  <div class="editbar">
    <el-button-group>
      <el-button >
        <img src="https://i.imgur.com/rowfrXL.png" />
      </el-button>
      <el-button>
        <img src="https://i.imgur.com/d1BdvJm.png" />
      </el-button>
    </el-button-group>

    <el-button-group>
      <el-button @click="$emit('next', 'bold')">
        <img src="https://i.imgur.com/TCcox0l.png" />
      </el-button>
      <el-button @click="$emit('next', 'slash')">
        <img src="https://i.imgur.com/GEgwJU1.png" />
      </el-button>
      <el-button>
        <img src="https://i.imgur.com/5qwxXcV.png" />
      </el-button>
      <el-button>
        <img src="https://i.imgur.com/XUBejUc.png" />
      </el-button>
      <el-button>
        <img src="https://i.imgur.com/V16UgYV.png" />
      </el-button>

      <el-button>
        <img src="https://i.imgur.com/BCwrrGU.png" />
      </el-button>
      <el-button>
        <img src="https://i.imgur.com/aG773Sx.png" />
      </el-button>
      <el-button>
        <img src="https://i.imgur.com/JUHQgBG.png" />
      </el-button>
    </el-button-group>

    <el-button-group>
      <el-button>
        <img src="https://i.imgur.com/8pbD9GQ.png" />
      </el-button>

      <el-button>
        <img src="https://i.imgur.com/Cnx2Xpc.png" />
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
  width: 45px;
  height: 45px;
}

.editbar .el-button-group .el-button:before {
    background-color: #9ef7c8;
}
.editbar .el-button-group .el-button:hover {
    background-color: #9ef7c8;
    
    
}
/* @media screen and (max-width: 1324px) {
  .editbar .el-button-group .el-button  {
    width: 35px;
    height: 35px;
  }
} */

</style>
