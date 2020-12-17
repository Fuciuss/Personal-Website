<template>
  <section
    class="features-tiles section"
    :class="[
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
    ]"
  >
    <div class="container">
      <div
        class="features-tiles-inner section-inner"
        :class="[
          topDivider && 'has-top-divider',
          bottomDivider && 'has-bottom-divider',
        ]"
      >
        <c-section-header :data="sectionHeader" />
        <div class="tiles-wrap" :class="[pushLeft && 'push-left']">
          <div class="tiles-item reveal-from-right">
            <div class="tiles-item-inner">
              <div class="features-tiles-item-header">
                <div class="features-tiles-item-image mb-16">
                  <c-image
                    :src="require('@/assets/images/icons/html_icon.svg')"
                    alt="html5"
                    :width="72"
                    :height="72"
                  />

                  <c-image
                    :src="require('@/assets/images/icons/sass_icon.svg')"
                    alt="sass"
                    :width="72"
                    :height="72"
                  />

                  <c-image
                    :src="require('@/assets/images/icons/javascript_icon.svg')"
                    alt="js6"
                    :width="72"
                    :height="72"
                  />

                  <c-image
                    :src="require('@/assets/images/icons/vue_icon.svg')"
                    alt="vue"
                    :width="72"
                    :height="72"
                  />
                </div>
              </div>
              <div class="features-tiles-item-content">
                <h4 class="mt-0 mb-8">Web Development</h4>
                <p class="m-0 text-sm">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
              </div>
            </div>
          </div>

          <div class="tiles-item reveal-from-left">
            <div class="tiles-item-inner">
              <div class="features-tiles-item-header">
                <div class="features-tiles-item-image mb-16">
                  <c-image
                    :src="require('@/assets/images/icons/pytorch_icon.svg')"
                    alt="Pytorch"
                    :width="72"
                    :height="72"
                  />
                  <c-image
                    :src="require('@/assets/images/icons/tensorflow_icon.svg')"
                    alt="Tensorflow"
                    :width="72"
                    :height="72"
                  />
                </div>
              </div>
              <div class="features-tiles-item-content">
                <h4 class="mt-0 mb-8">Artificial Intelligence</h4>
                <p class="m-0 text-sm" v-if="readMore">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
                <p class v-if="!readMore">
                </p>
              </div>
              <!-- <i-arrow-down  @click="readMore =! readMore" href="#"></i-arrow-down> -->
              <p @click="activateReadMore">click me</p>
              <!-- <i-arrow-down  @click="activateReadMore" href="#"></i-arrow-down> -->
                <i-arrow-down />
              
            </div>
          </div>

          <div class="tiles-item reveal-from-right">
            <div class="tiles-item-inner">
              <div class="features-tiles-item-header">
                <div class="features-tiles-item-image mb-16">
                  <c-image
                    :src="require('@/assets/images/feature-tile-icon-03.svg')"
                    alt="Feature tile icon 03"
                    :width="72"
                    :height="72"
                  />
                </div>
              </div>
              <div class="features-tiles-item-content">
                <h4 class="mt-0 mb-8">Music</h4>
                <p class="m-0 text-sm">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
              </div>
            </div>
          </div>

          <div class="tiles-item reveal-from-left">
            <div class="tiles-item-inner">
              <div class="features-tiles-item-header">
                <div class="features-tiles-item-image mb-16">
                  <c-image
                    :src="require('@/assets/images/feature-tile-icon-04.svg')"
                    alt="Feature tile icon 04"
                    :width="72"
                    :height="72"
                  />
                </div>
              </div>
              <div class="features-tiles-item-content">
                <h4 class="mt-0 mb-8">Me</h4>
                <p class="m-0 text-sm">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
              </div>
            </div>
          </div>

          <div class="tiles-item reveal-from-right">
            <div class="tiles-item-inner">
              <div class="features-tiles-item-header">
                <div class="features-tiles-item-image mb-16">
                  <c-image
                    :src="require('@/assets/images/feature-tile-icon-05.svg')"
                    alt="Feature tile icon 05"
                    :width="72"
                    :height="72"
                  />
                </div>
              </div>
              <div class="features-tiles-item-content">
                <h4 class="mt-0 mb-8">Generate Leads</h4>
                <p class="m-0 text-sm">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { SectionTilesProps } from "@/utils/SectionProps.js";
import CSectionHeader from "@/components/sections/partials/SectionHeader.vue";
import CImage from "@/components/elements/Image.vue";
import IArrowDown from "@/components/elements/ArrowDown.vue";

export default {
  name: "CFeaturesTiles",
  components: {
    CSectionHeader,
    CImage,
    IArrowDown,
  },
  mixins: [SectionTilesProps],
  data() {
    return {
      sectionHeader: {
        title: "At a Glance",
        paragraph: "",
      },
    //   readMore: false
    };
  },
  methods: {
      activateReadMore: function () {
          alert('gonna show more')
        //   readMore = !readMore
      }
  }
};
</script>