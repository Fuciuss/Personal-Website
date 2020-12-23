<template>
  <div class="container-xs">
    <ul class="dropdown list-reset mb-0">
      <c-drop-down-item>
        {{ dropDownData }}
      </c-drop-down-item>
    </ul>
  </div>
</template>


<script>
import CDropDownItem from "@/components/elements/DropDownItem.vue";

export default {
  props: {
    dropDownData: {
      type: String,
      default: ""
    },
  },
  components: {
    CDropDownItem,
  },
};
</script>