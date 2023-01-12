<template>
  <div class="StyleMain">
    <div class="StyleContent1">
      <p style="color: #ffffff; font-size: 24px">Profile</p>

      <el-divider></el-divider>
      <el-row>
        <el-col :span="8">
          <el-avatar :size="80" src="https://empty">
            <img src="https://i.imgur.com/MIGAE6r.png" />
          </el-avatar>
        </el-col>
        <el-col :span="8">
          <p style="color: #9ef7c8; font-size: 30px">{{ data.username }}</p>
        </el-col>
        <!-- <el-col :span="2">
            <img src="https://i.imgur.com/BAJZcn1.png" />
          </el-col> -->
      </el-row>
      <div class="login-form2">
        <br />
        <div class="user-box">
          <input type="text" name="" v-model="data.account" />
          <label>Account</label>
        </div>
        <div class="user-box">
          <input type="password" name="" v-model="data.password" />
          <label>Password</label>
        </div>
        <div class="StyleBottom">
          <el-divider></el-divider>

          <br />
          <br />

          <div class="title">
            <el-button type="primary" plain @click="accountUpdate">Save</el-button>
          </div>
          <!-- 
            <p style="color: #f66060">ERROR：不能重複儲存</p> -->
        </div>
      </div>
    </div>
    <div class="StyleContent2">
      <div class="main">
        <h1>h1</h1>
        <el-divider></el-divider>
        <h2>h2</h2>
        <el-divider></el-divider>
        <h3>h3</h3>
        <el-divider></el-divider>
        <h4>h4</h4>
        <el-divider></el-divider>
        <h5>h5</h5>
        <el-divider></el-divider>
        <li>ltem1</li>
        <li>ltem2</li>
        <li>ltem3</li>
        <el-divider></el-divider>
        <li>ltem1</li>
        <li>ltem2</li>
        <li>ltem3</li>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import config from "../../config";
import { onMounted, reactive } from "vue";

// import { ref, reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      account: "",
      password: "",
      username: "",
      id: "",
    });
    onMounted(() => {
      axios
        .get(`${config.api}/api/member`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((res) => {
          data.username = res.data.data.Data[0].Name;
          data.account = res.data.data.Data[0].email;
          console.log("Get member api:");
        });
    });
    const accountUpdate = () => {};
    return {
      data,
      accountUpdate,
    };
  },
};
</script>

<style scoped>
.StyleMain {
  display: flex;
  flex-direction: row;
  height: 100vh;
  overflow-y: auto;
}

.StyleContent1 {
  padding: 60px;
  width: 50%;
  background-color: #3e3c49;
}
.StyleContent1 .select {
  display: flex;
}
.StyleContent1 .select .s2 {
  width: 15%;
  margin-left: 10px;
}
.login-form2 .user-box {
  position: relative;
}
.login-form2 .user-box input {
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  width: 100%;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login-form2 .user-box label {
  position: absolute;
  top: -10px;
  left: -50px;
  padding: 10px 0;
  font-size: 14px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}
.login-form2 .user-box input:focus ~ label {
  top: -20px;
  left: 0;
  color: #76fcf1;
  font-size: 12px;
}
.login-box .user-box input:valid ~ label {
  top: -200px;
  left: -100p;
  color: #03e9f4;
  font-size: 12px;
}

.StyleBottom {
  margin-top: 120px;
}
.StyleBottom .el-input {
  width: 70%;
}
.StyleBottom .title {
  display: flex;
}
.StyleBottom .title .el-input {
  width: 50%;
}
.StyleBottom .title .el-button {
  margin-left: 10px;
}

.StyleContent2 {
  width: 50%;
}
.StyleContent2 .main {
  padding: 30px;
}

@media screen and (max-width: 1150px) {
  .StyleInput {
    width: 100%;
  }
  .StyleInput .el-input {
    width: 100%;
    margin-right: 10px;
    margin-bottom: 10px;
  }
}
</style>

<style>
/* .el-input__wrapper {
        background-color: #8888A4;
        color: #ffffff;
      }
      .el-input__inner {
        background-color: #8888A4;
        color: #ffffff;
      } */
</style>
