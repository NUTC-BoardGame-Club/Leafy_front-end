<template>
  <div id="nav">
    <div class="appbar">

    </div>
    <div class="main">
      <div class="list">
      
      </div> 
      <div class="content">
        <router-view/>
        
          
        </div>
    </div>

  </div>

</template>

<style scoped>
.main {
  display: flex;
  flex-direction: row;
  height: 100vh;
}

.list{

  flex:1;
  display:flex;
  flex-direction: column;
  background-color: #3E3C49;
  
}
@media screen and (max-width: 780px) {
  .list{
    display:none;
  }
}
.content{
  flex: 5;
  display: flex;
  flex-direction: column;

}

</style>
