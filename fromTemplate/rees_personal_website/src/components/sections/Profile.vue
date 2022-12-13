<template>
  <section
    class="hero section"
    :class="[
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
    ]"
  >
    <div class="profile-container">
      <div class="hero-inner section-inner">
        <div class="split-wrap">
          <div class="split-item">
            <div style="display: none">
              <c-image
                :src="require('@/assets/images/profile_pic.jpg')"
                alt="Profile Pic Reesy P"
                :width="500"
                :height="500"
              />
            </div>
            <div
              class="hero-content split-item-content center-content-mobile"
              id="main-profile"
            >
              <h1 class="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="150">
                Hi... I'm Rees.
              </h1>
              <p
                class="mt-0 mb-32 ml-20 reveal-from-bottom"
                data-reveal-delay="1000"
              >
                You'll find me:
              </p>
              <!-- <p class="mt-0 ml-40 reveal-from-bottom" style="display: inline" data-reveal-delay="2000">
                You can find me...
              </p> -->
              <c-animated-text class="reveal-from-bottom" data-reveal-delay="1500" style="display: inline" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import { SectionSplitProps } from "@/utils/SectionProps.js";

import CImage from "@/components/elements/Image.vue";

import CAnimatedText from "@/components/elements/AnimatedText.vue";

export default {
  name: "Profile",
  components: {
    CImage,
    CAnimatedText,
  },
  mixins: [SectionSplitProps],
};
</script>


<style scoped>
@media (min-width: 641px) {
  .split-wrap .split-item {
    min-height: 492px;
  }
}
</style>