              
<template>
  <!-- <div class="arrow bounce"> -->

  <c-image
    class="bounce"
    :src="require('@/assets/images/icons/arrow_down_grey_long.svg')"
    alt="arrow_down"
    :width="64"
    :height="32"
  />

  <!-- <a class="fa fa-arrow-down fa-2x" href="#"></a> -->
<!-- </div> -->

</template>

<style scoped>



.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(0px);
  }
  60% {
    transform: translateY(-15px);
  }
}
</style>


<script>

// import { SectionTilesProps } from '@/utils/SectionProps.js'

import CImage from "@/components/elements/Image.vue";

export default {
  name: "IArrowDown",
  components: {
    CImage
  }
  // mixins: [SectionTilesProps],
};
</script>