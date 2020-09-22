<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!--CONTAINER START-->
    <b-container>
      <!--HAEDER START-->
      <div class="header">
        <b-row class="subject">
          <b-col>Lead By Daylight</b-col>
        </b-row>
        <b-row class="menus">
          <b-col cols='2'></b-col>
          <b-col v-for="menu in menus" v-bind:id="'MN'+menu.id" v-bind:key="menu.id">{{menu.menu_nm}}</b-col>
          <b-col cols='2'></b-col>
        </b-row>
      </div>
      <!--HAEDER END-->
      <!--ARTICLE START-->
      <div class="article">
        <router-view/>
      </div>
      <!--ARTICLE END-->
    </b-container>
    <!--CONTAINER END-->
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
        menus: [],
    };
  },
  created(){
    this.$http.get('/api/menus')
    .then((res) => {
        this.menus = res.data;
    })
    .catch((err)=>{
        console.error(err);
    });
  }
}
</script>

<style>
html, body{
  height: 100%; margin: 0; padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:cornsilk;
  background-color:#2c3e50;
  min-height: 100%;
}

.header .col {
  padding: 20px;
}
</style>
