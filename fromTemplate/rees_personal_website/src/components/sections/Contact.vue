<template>
  <section
    class="section"
    :class="[
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
    ]"
  >
    <div class="container" id="contact-container">
      <div
        class="section-inner"
        :class="[
          topDivider && 'has-top-divider',
          bottomDivider && 'has-bottom-divider',
        ]"
      >
        <div class="container-s">
          <!-- <h2 class="mt-0 center-content rainbow-backed" style="border: 1px solid red">
                Let's Get In Touch!
          </h2> -->
          <sliding-gradient-header />

          <p class='center-content mt-16'>
            Brisbane based, open to anything, love a coffee.
            <br>
            <!-- <img
                        src="@/assets/images/icons/mail_icon.svg"
                        width="16"
                        height="16"   
                        class="flip-color display:inline"                     
                    > -->

          <p class='center-content'>
          <c-footer-social />
          <p class='center-content'>
          </p>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { SectionProps } from "@/utils/SectionProps.js";

import CFooterSocial from "@/components/layout/partials/FooterSocial.vue";
import SlidingGradientHeader from "@/components/elements/SlidingGradientHeader.vue";

export default {
  name: "CContact",
  components: {
    CFooterSocial,
    SlidingGradientHeader
  },
  mixins: [SectionProps],
};
</script>
