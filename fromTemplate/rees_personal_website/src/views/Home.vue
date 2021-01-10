<template>
  <fragment>



    <c-profile class="illustration-section-01" />
        <c-anime style="display: none"/>



    <!-- <rising-strong-text /> -->

        <!-- <c-profile-splash class="illustration-section-03" style="border: 1px solid red" /> -->

<c-profile-splash style="display:none;position: absolute"/>


    <c-at-a-glance top-divider class = "center-content" />

    <c-showcase invert-mobile top-divider image-fill />
    

    <c-contact class="reveal-from-top"/>
  </fragment>
</template>


<script>


import CLayout from '@/layouts/LayoutDefault.vue'


import CProfile from "@/components/sections/Profile.vue";
import CShowcase from "@/components/sections/Showcase.vue";
import CContact from "@/components/sections/Contact.vue";
import CAtAGlance from "@/components/sections/AtAGlance.vue";
import CProfileSplash from "@/components/sections/ProfileSplash.vue";

import CAnime from "@/components/elements/AnimejsCallbacks.vue";
// import RisingStrongText from "@/components/elements/RisingStrongText.vue";

export default {
  name: "Home",
  components: {
    CProfile,
    CShowcase,
    CContact,
    CAtAGlance,
    CProfileSplash,
    CAnime
      },
  data() {
    return {}
  },
  created() {
    this.$emit("update:layout", CLayout);
  },
};
</script>
