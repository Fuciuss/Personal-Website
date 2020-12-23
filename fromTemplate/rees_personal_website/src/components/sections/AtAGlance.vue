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
    <div class="container" id="at-a-glance-container">
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

                <c-drop-down :dropDownData=meString :title=sectionHeader.title>
                </c-drop-down>
                <p class="m-0 text-sm" v-if="readMoreWebDev" >
                  Web development is an excellent way to give ideas and problem solutions a face.
                  It may not be pretty, but god dammit it gets the job done.
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.Duis aute irure dolor in reprehenderit in voluptate velit esse
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
                    :src="require('@/assets/images/icons/python_icon.svg')"
                    alt="Python for machine learning"
                    :width="72"
                    :height="72"
                    />
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
                  This is where I will be writing a bunch of nonsense about artificial intelligence
                </p>

              </div>
                <c-drop-down :dropDownData=meString :title=sectionHeader.title>
                </c-drop-down>
              
            </div>
          </div>

          <div class="tiles-item reveal-from-right">
            <div class="tiles-item-inner">
              <div class="features-tiles-item-header">
                <div class="features-tiles-item-image mb-16">
                  <c-image
                    :src="require('@/assets/images/icons/rocket_monitor_icon.svg')"
                    alt="Feature tile icon 03"
                    :width="72"
                    :height="72"
                  />
                  <c-image
                    :src="require('@/assets/images/icons/rocket_ship_icon.svg')"
                    alt="Feature tile icon 03"
                    :width="72"
                    :height="72"
                  />
                </div>
              </div>
              <div class="features-tiles-item-content">
                <h4 class="mt-0 mb-8">Entrepreneurship</h4>
                <p class="m-0 text-sm" v-if="readMore">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p>
                <c-drop-down :dropDownData=meString :title=sectionHeader.title>
                </c-drop-down>
              </div>
            </div>
          </div>

          <div class="tiles-item reveal-from-left">
            <div class="tiles-item-inner">
              <div class="features-tiles-item-header">
                <div class="features-tiles-item-image mb-16">
                  <c-image
                    :src="require('@/assets/images/icons/mandala_icon.svg')"
                    alt="Feature tile icon 04"
                    :width="72"
                    :height="72"
                  />
                  <c-image
                    :src="require('@/assets/images/icons/mixer_icon.svg')"
                    alt = "Fl Studio, Ableton"
                    :width="72"
                    :height="72"
                    />
                    <c-image
                    :src="require('@/assets/images/icons/fl_studio_icon.png')"
                    alt = "FL Studio"
                    :width="72"
                    :height="72"
                    />
                    
                </div>
              </div>
              <div class="features-tiles-item-content">
                <h4 class="mt-0 mb-0">Me</h4>
                <c-drop-down :dropDownData=meString :title=sectionHeader.title>
                </c-drop-down>
<!--          
                <p class="m-0 text-sm" v-if="readMore">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat.
                </p> -->
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

import CDropDown from '@/components/elements/DropDown.vue';

export default {
  name: "CFeaturesTiles",
  components: {
    CSectionHeader,
    CImage,
    CDropDown
  },
  mixins: [SectionTilesProps],
  data() {
    return {
      sectionHeader: {
        title: "At a Glance",
        paragraph: "We can cut to the chase... ",
      },
      meString:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint",
      readMore: false,
      readMoreWebDev: false,
    };
  },
  methods: {
    // activateReadMore: function () {
    //     // alert('gonna show more')
    //     readMore = !readMore
    // }
  },
};
</script>