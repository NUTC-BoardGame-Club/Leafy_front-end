<template>
  <div class="login">
    <el-alert
      title="帳號或密碼錯誤請重新登錄!!!"
      type="error"
      show-icon
      v-if="data.alert"
    />
    <div class="login-form1" v-if="data.loginForm === 1">
      <div class="logo">
        <img src="https://i.imgur.com/tA0ViM6.png" />
        <h1>LEAFY</h1>
      </div>
      <div class="text">
        <p>Your best markdown online editor.</p>
      </div>
      <button class="lbtn" @click="loginCutover">Join Us!</button>
      <button class="aboutbtn" @click="aboutusCutover">Learn about us~</button>
    </div>
    <div class="login-form2" v-if="data.loginForm === 2">
      <div class="logo">
        <img src="https://i.imgur.com/DSzhvYW.png" />
      </div>
      <br />
      <div class="user-box">
        <input type="text" name="" v-model="data.account" />
        <label>Account</label>
      </div>
      <div class="user-box">
        <input type="password" name="" v-model="data.password" />
        <label>Password</label>
      </div>
      <el-button class="signin-btn" @click="login">Sign In</el-button>
      
      <br />
      <br />
      <img src="https://i.imgur.com/Sk0CChC.png" alt="or" />
      <br />
      <br />
      <el-button class="signup-btn" @click="registerCutover">Sign Up</el-button>
    </div>
    <div class="login-form2" v-if="data.loginForm === 3">
      <div class="logo">
        <img src="https://i.imgur.com/DSzhvYW.png" />
      </div>
      <br />
      <div class="user-box">
        <input type="text" name="" v-model="data.rusername" />
        <label>Name</label>
      </div>
      <div class="user-box">
        <input type="text" name="" v-model="data.raccount" />
        <label>Account</label>
      </div>
      <div class="user-box">
        <input type="password" name="" v-model="data.rpassword" />
        <label>Password</label>
      </div>
      <div class="user-box">
        <input type="password" name="" v-model="data.rconfirmPassword" />
        <label>Confirm Password</label>
      </div>
      <el-button class="signin-btn" @click="register">Register</el-button>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import config from "../../config";

export default {
  setup() {
    const router = useRouter();
    onMounted(() => {
      if (localStorage.getItem("token")) {
        router.push({ path: "/index/63a86f15e1d4bfda050d2ae2" });
      }
    });

    const data = reactive({
      account: "",
      password: "",
      loginForm: 1,
      rusername: "",
      raccount: "",
      rpassword: "",
      rconfirmPassword: "",
      alert: false,
    });
    const loginCutover = () => {
      data.loginForm = 2;
    };
    const login = () => {
      let LoginData = {
        email: data.account,
        password: data.password,
      };
      axios.post(`${config.api}/api/auth/login`, LoginData).then((res) => {
        if (res) {
          if (res.data.data.Status == "Successed") {
            localStorage.setItem("token", res.data.data.Data.access_token);
            localStorage.setItem("lastime", +new Date());
            router.push({ path: "/index/63a86f15e1d4bfda050d2ae2" });
          }
        } else {
          data.alert = true;
        }
      });
    };
    const registerCutover = () => {
      data.loginForm = 3;
      // router.push({ path: "/register" });
    };
    const register = () => {
      let registerData = {
        Name: data.rusername,
        email: data.raccount,
        password: data.rpassword,
      };

      if (data.rconfirmPassword === data.rpassword) {
        axios.post(`${config.api}/api/member`, registerData).then((res) => {
          if (res) {
            if (res.data.data.Status == "Successed") {
              alert("註冊成功");
              data.loginForm = 2;
            }
          } else {
            alert("註冊失敗");
          }
        });
      } else {
        alert("第二次密碼錯誤");
        data.rconfirmPassword === null;
      }
    };
    const aboutusCutover = () =>{
      window.location.href = "https://aboutleafy.louischiang.com/aboutus.html";
    }

    return {
      data,
      loginCutover,
      login,
      registerCutover,
      register,
      aboutusCutover,
    };
  },
};
</script>
<style scoped>
.login {
  background-color: #000026;
  height: 100%;
}
.login-form1 {
  position: absolute;
  top: 50%;
  left: 50%;
  color: #ffff;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  text-align: center;
}
.login-form1 .logo {
  padding-top: 7%;
}
.login-form1 .text {
  padding-top: 10%;
  font-weight: 300;
  line-height: 30px;
  font-size: 25px;
}
.login-form1 .lbtn {
  margin-top: 2%;
  background-color: #ead58c;
  border-radius: 10px;
  width: 210px;
  height: 40px;
  color: #000026;
  font-size: 20px;
}

.login-form1 .aboutbtn {
  margin-top: 2%;
  background-color: #000026;
  border-radius: 10px;
  width: 210px;
  height: 40px;
  color: #ffffff;
  font-size: 20px;
}

.login-form2 {
  position: absolute;
  top: 50%;
  left: 50%;
  color: #ffff;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  text-align: center;
}

.login-form2 .text {
  padding-top: 10%;
  font-weight: 300;
  line-height: 30px;
  font-size: 25px;
}
.login-form2 .lbtn {
  margin-top: 2%;
  background-color: #ead58c;
  border-radius: 10px;
  width: 210px;
  height: 40px;
  color: #000026;
  font-size: 20px;
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
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}
.login-form2 .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
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
  top: -300px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.login-form2 .signin-btn {
  color: #76fcf1;
  border-color: #76fcf1;
  background-color: rgba(0, 0, 0, 0);
  width: 258px;
  height: 36px;
}
.login-form2 .signup-btn {
  color: #a1fc76;
  border-color: #a1fc76;
  background-color: rgba(0, 0, 0, 0);
  width: 258px;
  height: 36px;
}
@media screen and (max-width: 780px) {
  .login-form .lbtn {
    margin-top: 100px;
  }
}
</style>
