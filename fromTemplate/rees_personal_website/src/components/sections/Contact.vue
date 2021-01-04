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
          <c-colored-header headerMessage="Let's Get In Touch!" class="center-content">
                      </c-colored-header>

          <p class='center-content mt-16'>
            I'm based in Brisbane, love a fresh perspective, and can't say no to coffee.
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
import CColoredHeader from "@/components/elements/ColoredHeader.vue";

export default {
  name: "CContact",
  components: {
    CFooterSocial,
    CColoredHeader
  },
  mixins: [SectionProps],
};
</script>
