<template>
  <fragment>

    <c-profile class="illustration-section-01" />

        <c-profile-splash style="display: none" />

<!-- <c-profile-splash /> -->
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

export default {
  name: "Home",
  components: {
    CProfile,
    CShowcase,
    CContact,
    CAtAGlance,
    CProfileSplash
  },
  data() {
    return {};
  },
  created() {
    this.$emit("update:layout", CLayout);
  },
};
</script>
