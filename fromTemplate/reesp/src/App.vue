<template>
  <!-- <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div> -->

  <component :is="layout">
    <h1> Hello World </h1>
    <router-view :layout.sync="layout" />
  </component>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      layout: 'div'
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
