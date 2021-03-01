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
        <c-section-header :data="sectionHeader" style="padding-bottom: 20px"/>
        <div>
          <p>
            Code for this web element is available on
            <a href="https://codepen.io/kidcon/pen/GRNZVjJ" target="_blank"> CodePen </a>
          </p>
          <br>
        </div>
        <div class="tiles-wrap" :class="[pushLeft && 'push-left']">
          <div class="tiles-item reveal-from-left">
            <div class="tiles-item-inner">
              <div class="features-tiles-item-content">
                <c-hover-card v-bind:info="webDevelopment"> </c-hover-card>
              </div>
            </div>
          </div>

          <div class="tiles-item reveal-from-right">
            <div class="tiles-item-inner">
              <div class="features-tiles-item-content">
                <c-hover-card v-bind:info="artificialIntelligence">
                </c-hover-card>
              </div>
            </div>
          </div>

          <!-- <div class="tiles-item reveal-from-left">
            <div class="tiles-item-inner">
              <div class="features-tiles-item-content">
                <c-hover-card v-bind:info="software">
                  </c-hover-card>
              </div>
            </div>
          </div>

          <div class="tiles-item reveal-from-right">
            <div class="tiles-item-inner">
              <div class="features-tiles-item-content">
                <c-hover-card v-bind:info="me">
                  </c-hover-card>
              </div>

            </div>
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { SectionTilesProps } from "@/utils/SectionProps.js";
import CSectionHeader from "@/components/sections/partials/SectionHeader.vue";
import CHoverCard from "@/components/elements/HoverCard.vue";

export default {
  name: "CFeaturesTiles",
  components: {
    CSectionHeader,
    CHoverCard,
  },
  mixins: [SectionTilesProps],
  data() {
    return {
      sectionHeader: {
        title: "At a Glance",
        paragraph: "",
      },
      webDevelopment: {
        name: "Web Development",
        tech: ["HTML5", "Sass", "Javascript", "Vue.js"],
        colors: ["#f85700", "#43d1e6", "#603195", "#dfd626"],
        images: [
          require("@/assets/images/icons/html_icon.svg"),
          require("@/assets/images/icons/sass_icon.svg"),
          require("@/assets/images/icons/javascript_icon.svg"),
          require("@/assets/images/icons/vue_icon.svg"),
        ],
        styleObject: {
          backgroundColor: "green",
        },
      },
      artificialIntelligence: {
        name: "Artificial Intelligence",
        tech: [
          "Python",
          "Tensorfow",
          "Amazon Web Services",
          "Google Cloud Platform",
        ],
        colors: ["#f85700", "#43d1e6", "#603195", "#dfd626"],
        images: [
          require("@/assets/images/icons/python_icon.svg"),
          require("@/assets/images/icons/tensorflow_icon.svg"),
          require("@/assets/images/icons/aws_icon.svg"),
          require("@/assets/images/icons/google_cloud_icon.svg"),
        ],
        styleObject: {
          backgroundColor: "green",
        },
      },
      software: {
        name: "Software",
      },

      me: {
        name: "Me",
      },
    };
  },
  mounted() {},
};
</script>