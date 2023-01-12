<template>
  <div id="nav">
    <div class="appbar"></div>
    <div class="main">
      <div class="list" v-if="$route.path != '/'">
        <Sidebar />
      </div>
      <div class="content">
        <Appbar v-if="$route.path != '/'" />

        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Appbar from "./components/Appbar.vue";
import { onMounted } from "vue";
import Sidebar from "./components/Sidebar.vue";
import { useRouter } from "vue-router";

export default {
  components: {
    Appbar,
    Sidebar,
  },
  setup() {
    const router = useRouter();
    onMounted(() => {
      //清除token
      let lastime = localStorage.getItem("lastime");
      const interval = 3600000;
     
      if ((+new Date()) - lastime > interval) {
        localStorage.removeItem("token");
        router.push({ path: "/" });
        console.log("清除token");
      } else {
        console.log("时间过短不清除token");
      }
    });

  },
};
</script>
<style scoped>
.main {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.list {
  padding: 1%;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #3e3c49;
}
@media screen and (max-width: 1100px) {
  .list {
    display: none;
  }
}
.content {
  flex: 6;
  display: flex;
  flex-direction: column;
}
</style>
