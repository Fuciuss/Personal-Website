<template>
    <h2 class="rainbow-backed">{{ headerMessage }}</h2>
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