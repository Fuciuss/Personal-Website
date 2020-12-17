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
                <div class="features-tiles-item-image mb-16" style= "border: 1px solid red;">
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
                    :src="require('@/assets/images/feature-tile-icon-02.svg')"
                    alt="Feature tile icon 02"
                    :width="72"
                    :height="72"
                  />
                </div>
              </div>
              <div class="features-tiles-item-content">
                <h4 class="mt-0 mb-8">Artificial Intelligence</h4>
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
                <h4 class="mt-0 mb-8">Generate Leads</h4>
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

export default {
  name: "CFeaturesTiles",
  components: {
    CSectionHeader,
    CImage,
  },
  mixins: [SectionTilesProps],
  data() {
    return {
      sectionHeader: {
        title: "At a Glance",
        paragraph:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint — occaecat cupidatat non proident, sunt in culpa qui.",
      },
    };
  },
};
</script>