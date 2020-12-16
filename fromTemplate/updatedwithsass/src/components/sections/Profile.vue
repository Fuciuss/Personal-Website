<template>
    <section>
        <div class = "container">

            <div class = "hero-inner section-inner">
                <div class="split-wrap">
                    <div class="split-item">
                        <div class="hero-content split-item-content center-content-mobile">
                            <h1 class="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="150">
                                Hi... I'm Rees.
                            </h1>
                            <p class="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="1000">
                                I've just graduated...
                            </p>
                            <div class="reveal-from-bottom" data-reveal-delay="450">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </section>
</template>


<script>

import { SectionSplitProps } from '@/utils/SectionProps.js'



export default {
    name: 'Profile',
    mixins: [SectionSplitProps]
}
</script>


<style scoped>
@media (min-width: 641px) {
  .split-wrap .split-item {
    min-height: 492px;
  }
}
</style>