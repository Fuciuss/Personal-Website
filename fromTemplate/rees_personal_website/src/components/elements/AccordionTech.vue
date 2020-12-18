<template>
  <div class="container-xs">
      <h3> Accordian Tech </h3>
    <c-accordion>
      <c-accordion-item title="Nisi porta lorem mollis aliquam ut." active>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </c-accordion-item>
      <c-accordion-item title="Nisi porta lorem mollis aliquam ut.">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </c-accordion-item>
      <c-accordion-item title="Nisi porta lorem mollis aliquam ut.">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </c-accordion-item>
      <c-accordion-item title="Nisi porta lorem mollis aliquam ut.">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </c-accordion-item>
      <c-accordion-item title="Nisi porta lorem mollis aliquam ut.">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </c-accordion-item>
    </c-accordion>
  </div>
</template>


<script>
import CAccordion from '@/components/elements/Accordion.vue'
import CAccordionItem from '@/components/elements/AccordionItem.vue'

export default {
    components: {
        CAccordion,
        CAccordionItem
    }
};
</script>