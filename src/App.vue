<template>
  <div id="app">
    <!-- <Index msg="Welcome to Your Vue.js App"/> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">學生查詢系統</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">首頁</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Myperformance">個人表現</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Dynamic">動態更新系統</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Login" v-if="!this.$store.state.login">登入</router-link>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" @click="$store.commit('logOut')" v-if="this.$store.state.login">登出</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    </div>
  </nav>
    
    
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Footer from '@/components/Other/Footer'
export default {
  name: 'app',
  components:{
    Footer
  }
  ,created(){
    localStorage.getItem("userMsg") && this.$store.replaceState(JSON.parse(localStorage.getItem("userMsg"))); //暫存Vuex的資料
    window.addEventListener("beforeunload",()=>{
    localStorage.setItem("userMsg",JSON.stringify(this.$store.state))
})
  }
}
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
*,
*::after,
*::before{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
.footer{
  position:absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%,-50%);
}
</style>
