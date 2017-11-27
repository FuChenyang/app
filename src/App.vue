<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
   <!--  <Navbar></Navbar> -->
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/navbar.vue'
export default {
  name: 'app',
  components:{
   /*  Navbar */
  },
  methods: {

  }
}
</script>

<style>
body{
  background: #F7F7F7;
}
  *{
    margin: 0;
    padding: 0;
  }
</style>
