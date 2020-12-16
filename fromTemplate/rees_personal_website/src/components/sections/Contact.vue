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
    <div class="container">
      <div
        class="section-inner"
        :class="[
          topDivider && 'has-top-divider',
          bottomDivider && 'has-bottom-divider',
        ]"
      >
        <div class="container-xs">
          <h2 class="mt-0">
                Let's Get In Touch!
          </h2>
          <p>
            Lorem ipsum dolor sit amet,
            <a href="#">consectetur adipiscing elit</a>, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { SectionProps } from "@/utils/SectionProps.js";

export default {
  name: "CContact",
  mixins: [SectionProps],
};
</script>