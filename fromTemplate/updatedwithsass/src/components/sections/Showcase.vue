<template>
    <section
        class="features-split section"
        :class="[
            topOuterDivider && 'has-top-divider',
            bottomOuterDivider && 'has-bottom-divider',
            hasBgColor && 'has-bg-color',
            invertColor && 'invert-color'
        ]">
        <div class="container">
            <div
                class="features-split-inner section-inner"
                :class="[
                    topDivider && 'has-top-divider',
                    bottomDivider && 'has-bottom-divider'
                ]">
                <c-section-header :data="sectionHeader" class="center-content" />
                <div
                    class="split-wrap"
                    :class="[
                        invertMobile && 'invert-mobile',
                        invertDesktop && 'invert-desktop',
                        alignTop && 'align-top'
                    ]">
                    <div class="split-item">
                        <div class="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                            <h3 class="mt-0 mb-12">
                                Botanical Gardens Augmented Reality
                            </h3>
                            <p class="m-0">
                                Educational Augmented Reality Application developed as part of QUT 'Augmented Sociality' research
                            </p>
                            <ul>

                                <li>
                                    <svg fill="none" height="16" stroke="currentColor" stroke-linecap="square" stroke-linejoin="arcs" stroke-width="1" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h13M12 5l7 7-7 7"></path></svg>
                                    Developed in Unity</li>
                            </ul>
                        </div>
                        <div
                            class="split-item-image reveal-from-left" data-reveal-container=".split-item"
                            :class="imageFill && 'split-item-image-fill'">
                            <c-image
                                :src="require('@/assets/images/features-split-image-01.svg')"
                                alt="Features split image 01"
                                :width="528"
                                :height="396" />
                        </div>
                    </div>

                    <div class="split-item">
                        <div class="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                            <h3 class="mt-0 mb-12">
                                iGiveThanks
                            </h3>
                            <p class="m-0">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <div
                            class="split-item-image reveal-from-right" data-reveal-container=".split-item"
                            :class="imageFill && 'split-item-image-fill'">
                            <c-image
                                :src="require('@/assets/images/igivethanks.png')"
                                alt="Features split image 02"
                                :width="528"
                                :height="396" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { SectionSplitProps } from '@/utils/SectionProps.js'
import CSectionHeader from '@/components/sections/partials/SectionHeader.vue'
import CImage from '@/components/elements/Image.vue'

export default {
  name: 'CFeaturesSplit',
  components: {
    CSectionHeader,
    CImage
  },
  mixins: [SectionSplitProps],
  data() {
    return {
      sectionHeader: {
        title: 'Recent Projects',
        paragraph: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint — occaecat cupidatat non proident, sunt in culpa qui.'
      }
    }
  }
}
</script>