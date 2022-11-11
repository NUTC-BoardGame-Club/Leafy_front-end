<template>
  <div id="nav">
    <div class="appbar"></div>
    <div class="main">
      <div class="list">
        <Sidebar/>
      </div>
      <div class="content">
        <Appbar/>
      
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Appbar from './components/Appbar.vue'
import Sidebar from './components/Sidebar.vue'
export default {
  components:{
    Appbar,
    Sidebar
  }
}
</script>
<style scoped>
.main {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.list {
  padding: 12px;
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #3e3c49;
}
@media screen and (max-width: 780px) {
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
