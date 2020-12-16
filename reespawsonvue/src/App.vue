<template>
  <div id="app">
    <h2>Hello</h2>
    <Header/>
    <Profile/>
    <Passions/>
    <!-- <About/> -->
    <Projects/>
    <Contact/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Profile from './components/Profile.vue'
import Passions from './components/Passions.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'



export default {
  name: 'App',
  components: {
    Header,
    Profile,
    Animation,
    Passions,
    About,
    Projects,
    Contact
  }
}
</script>

<style>
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  font-family: Helvetica;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

hr {
    border-color: #727878;
    opacity: 0.2;
    display: block;
    unicode-bidi: isolate;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: auto;
    margin-inline-end: auto;
    overflow: hidden;
}
</style>
