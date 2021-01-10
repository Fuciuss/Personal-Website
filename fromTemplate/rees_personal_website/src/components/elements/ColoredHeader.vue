<template>
  <div class="scrolling-gradient-background">
    
    <div class="flag-container">{{ headerMessage }}</div>
  </div>  


</template>






<script>

export default {
  props: {
    headerMessage: {
      type: String,
    },
  },
};
</script>


<style scoped>


h2 {
    margin: auto;
}


</style>