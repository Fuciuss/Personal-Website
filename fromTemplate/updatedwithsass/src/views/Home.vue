<template>
  <fragment>
    <c-profile class="illustration-section-01" />

    <c-showcase invert-mobile top-divider image-fill />

    <c-contact />
  </fragment>
</template>


<script>
import CLayout from '@/layouts/LayoutDefault.vue'


import CProfile from "@/components/sections/Profile.vue";
import CShowcase from "@/components/sections/Showcase.vue";
import CContact from "@/components/sections/Contact.vue";

export default {
  name: "Home",
  components: {
    CProfile,
    CShowcase,
    CContact
  },
  data() {
    return {};
  },
  created() {
    this.$emit("update:layout", CLayout);
  },
};
</script>
