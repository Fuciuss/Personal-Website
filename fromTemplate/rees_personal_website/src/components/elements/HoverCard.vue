<template>
  <section>
    <!-- <p>{{info.tech[0]}}</p> -->
    <div class="complete-holder">
      <div class="card-hand">
        <div
          class="card-holder"
          v-for="(tech, idx) in info.tech"
          v-bind:key="idx"
        >
          <a
            href="#"
            class="card"
            @click="DoNothing(tech, title, idx)"
            @mouseover="displayText = tech"
            @mouseleave="displayText = info.name"
            :style="{ backgroundImage: 'url(' + info.images[idx] + ')'}"
            v-bind:class="info.name.replace(/\s+/g, '').toLowerCase() + 'card'"
          >
          </a>
        </div>
      </div>
    </div>

    <h3 class="mt-0 mb-8">{{ displayText }}</h3>
  </section>
</template>


<script>
import anime from "animejs";
import $ from "jquery";

export default {
  data() {
    return {
      displayText: this.info.name,
      required: require("@/assets/images/icons/python_icon.svg"),
      imageTest: { backgroundImage: this.required },
      startAnimation: true,
    };
  },
  props: {
    info: {},
  },
  methods: {
    DoNothing() {},
    StartAnimation() {
      let thisClass = this.info.name.replace(/\s+/g, "").toLowerCase() + "card";

      var animation = anime({
        targets: "." + thisClass,

        translateY: {value: -15, delay: anime.stagger(400, { direction: "normal" })},
        // delay: anime.stagger(400, { direction: "normal" }),
        endDelay: 200,
        direction: "alternate",
        easing: "linear",
        loop: true,
      });

      $("." + thisClass).hover(
        function () {
          animation.reset();
          animation.pause();

          let bounce = anime({
            targets: this,
            translateY: -10,
            direction: "alternate",
            loop: true,
          });

          $(this).data("bounce-animation", bounce);
          // $(this).data('bounce-animation').reset();
        },
        function (bounce = bounce) {
          $(this).data("bounce-animation").reset();
          // $(this).data('bounce-animation', null)
          $(this).data("bounce-animation").pause();
          animation.play();
        }
      );
    },
  },
  mounted() {
    if (this.startAnimation) {
      this.StartAnimation();
      this.startAnimation = false;
    }
  },
};
</script>