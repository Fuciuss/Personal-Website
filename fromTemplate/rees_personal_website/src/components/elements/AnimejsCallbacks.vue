<template>
  <div id="animediv">
    <h1>ANIME</h1>
    <button @click="go">Click Here to Animate</button>

    <div class="redsquare" ref="square"></div>

    <div>
      <h1 id="animateMe" ref="animateText">Text Animation</h1>
    </div>

    <div>
      <button @click="animashion">Animashion</button>
      <h1 class="direct">Direct From The Sauce</h1>
    </div>

    <div class="text-animation">
      <span class="one">Ready</span>
      <span class="two">Steady</span>
      <span class="three">Go!</span>
    </div>
  </div>
</template>


<script>
import { translate, textAnimate } from "@/utils/AnimateText.js";

import anime from "animejs";

export default {
  methods: {
    go() {
      translate(this.$refs.square);
      document.querySelector("#animateMe").innerHTML = "changed";
    },

    animashion() {
      var check = anime.timeline({ loop: true });

      var classes = ["one", "two", "three"];

      for (var i = 0; i < 3; i++) {
        check
          .add({
            targets: `.text-animation .${classes[i]}`,
            scale: [0.3, 1],
            translateX: -150,
            translateY: [100, 0],
            opacity: [0, 1],
            translateZ: 0,
            easing: "easeOutExpo",
            duration: 600,
            delay: (el, i) => 70 * (i + 1),
          })
          .add({
            targets: `.text-animation .${classes[i]}`,
            opacity: 0,
            duration: 1000,
            easing: "easeOutExpo",
            delay: 1000,
          });
      }
    },
  },
  mounted() {
    //   translate(this.$refs.square);
    textAnimate(this.$refs.animateText);
  },
};
</script>

<style scoped>
#animediv {
  width: 100%;
  border: 2px solid red;
}
.redsquare {
  height: 200px;
  width: 200px;
  background-color: red;
}


.text-animation {
  border: 1px solid red;
  position:relative;
  font-size:80px;
  font-weight:600;
  color:#eee;
  width:100vw;
  height:200px;
  text-align:center;
  line-height:200px;
  overflow:hidden;
}
.text-animation span {
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  opacity:0;
  text-transform:uppercase;
  letter-spacing:5px;
}
</style>