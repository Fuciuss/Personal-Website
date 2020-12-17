              
<template>
  <c-image
    :src="require('@/assets/images/icons/arrow_down.svg')"
    alt="arrow_down"
    :width="32"
    :height="32"
  />
</template>


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