<template>
  <div id="header" :style="{ backgroundImage: `url('${image}')` }">
    <div class="jumbotron" id="top" :style="{ backgroundImage: `url('${image}')` }">
      <h1 class="display-4">Hello, world!</h1>
    </div>
  </div>
</template>


<script>
export default {
    data() {
        return {
            image: "../assets/img/igivethanks.png"
        }
    },
    

}
</script>



<style scoped>

</style>