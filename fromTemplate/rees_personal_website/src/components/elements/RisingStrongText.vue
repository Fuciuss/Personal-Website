<template>
<div id="animatedText">
    <!-- <button @click="animateTwo"/> -->
    <!-- <h1 style="visibility:hidden;display:inline">a</h1> -->
    <h3 v-for="text in texts" v-bind:key="text.id" v-bind:class="text.id"  style="display: none">
      {{ text.title }}
    </h3>
    <h3 style="visibility:hidden;display:inline">a</h3>
    </div>
</template>

<style lang="scss" scoped>
#animatedText {
    // border: 1px solid red;
}
</style>




<script>
import anime from "animejs";

export default {
  data() {
    return {
      // texts: ["hello world", "get it rolling", "making it happen"]
      texts: [
        { id: "text-id-0", title: "Developing for the web"},
        { id: "text-id-1", title: "Maintaining ontological equipment" },
        { id: "text-id-2", title: "Why Vue is so fun" },
        
      ],
      // bindClass = "texting",
      bindColor: "red",
    };
  },
  methods: {
    // animateText() {
    //   console.log(this.texts);

    //   var textWrapper = document.querySelector(".ml13");
    //   textWrapper.innerHTML = textWrapper.textContent.replace(
    //     /\S/g,
    //     "<span class='letter'>$&</span>"
    //   );
    //   var textWrapper2 = document.querySelector(".ml14");
    //   textWrapper2.innerHTML = textWrapper2.textContent.replace(
    //     /\S/g,
    //     "<span class='letter'>$&</span>"
    //   );

    //   anime
    //     .timeline({ loop: true })
    //     .add({
    //       targets: ".ml13 .letter",
    //       translateY: [100, 0],
    //       translateZ: 0,
    //       opacity: [0, 1],
    //       easing: "easeOutExpo",
    //       duration: 1400,
    //       delay: (el, i) => 300 + 30 * i,
    //     })
    //     .add({
    //       targets: ".ml13 .letter",
    //       translateY: [0, -100],
    //       opacity: [1, 0],
    //       easing: "easeInExpo",
    //       duration: 1200,
    //       delay: (el, i) => 100 + 30 * i,
    //       complete: function () {
    //         var change = document.querySelector(".ml13");
    //         change.style.display = "none";
    //         // alert('complete');
    //       },
    //     })
    //     .add({
    //       targets: ".ml14 .letter",
    //       translateY: [100, 0],
    //       translateZ: 0,
    //       opacity: [0, 1],
    //       easing: "easeOutExpo",
    //       duration: 1400,
    //       delay: (el, i) => 300 + 30 * i,
    //     })
    //     .add({
    //       targets: ".ml14 .letter",
    //       translateY: [0, -100],
    //       opacity: [1, 0],
    //       easing: "easeInExpo",
    //       duration: 1200,
    //       delay: (el, i) => 100 + 30 * i,
    //     });
    // },
    // animateArray() {
    //   // checker = document.querySelector()

    //   for (var i = 0; i < this.texts.length; i++) {
    //     console.log(`text-id-${i}`);
    //     var textWrapper = document.querySelector(`#text-id-${i}`);
    //     //  textWrapper.style.color = "red"
    //     textWrapper.innerHTML = textWrapper.textContent.replace(
    //       /\S/g,
    //       "<span class='letter'>$&</span>"
    //     );
    //   }

    //   var timeline = anime.timeline({ loop: true });

    //   for (var j = 0; j < this.texts.length; j++) {
    //     var k = j;
    //     console.log("k: " + k);

    //     var currentSelector = `#text-id-${k}`;
    //     console.log("currentSelector: " + currentSelector);
    //     timeline
    //       .add({
    //         loopBegin: function () {
    //           //   var currentHeader = document.querySelector(`#text-id-${j}`);
    //           //   currentHeader.style.display = "inline";
    //           var begin = document.querySelector(`#text-id-${k}`);
    //           // alert('beginning: ' + `#text-id-${k}`)
    //           console.log("begin: " + begin);
    //           console.log("got: " + `#text-id-${k}`);
    //           begin.style.color = "blue";
    //         },
    //         targets: `#text-id-${j} .letter`,
    //         translateY: [100, 0],
    //         translateZ: 0,
    //         opacity: [0, 1],
    //         easing: "easeOutExpo",
    //         duration: 1400,
    //         delay: (el, i) => 300 + 30 * i,
    //       })
    //       .add({
    //         targets: `#text-id-${j} .letter`,
    //         translateY: [0, -100],
    //         opacity: [1, 0],
    //         easing: "easeInExpo",
    //         duration: 1200,
    //         delay: (el, i) => 100 + 30 * i,
    //         complete: function () {
    //           var change = document.querySelector(`#text-id-${k}`);
    //           console.log("log: " + change);
    //           console.log("completed: " + `#text-id-${k}`);
    //           change.style.color = "red";
    //           //   alert('complete');
    //         },
    //       });
    //   }
    // },
    animateTwo() {
      for (var i = 0; i < this.texts.length; i++) {
        console.log(`text-id-${i}`);
        var textWrapper = document.querySelector(`.text-id-${i}`);
        //  textWrapper.style.color = "red"
        textWrapper.innerHTML = textWrapper.textContent.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        );
      }
      var timeline = anime.timeline({ loop: true });

      timeline
        .add({
          changeBegin: function () {
            //   var currentHeader = document.querySelector(`#text-id-${j}`);
            //   currentHeader.style.display = "inline";
            var begin = document.querySelector(`.text-id-0`);
            // alert('beginning: ' + `#text-id-${k}`)
            console.log("begin: " + begin);
            console.log("got: " + `.text-id-0`);
            begin.style.display = "inline";
          },
          targets: `.text-id-0 .letter`,
          translateY: [100, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1400,
          delay: (el, i) => 300 + 30 * i,
        })
        .add({
          targets: `.text-id-0 .letter`,
          translateY: [0, -100],
          opacity: [1, 0],
          easing: "easeInExpo",
          duration: 1200,
          delay: (el, i) => 100 + 30 * i,
          changeComplete: function () {
            var completed = document.querySelector(`.text-id-0`);
            console.log("log: " + completed);
            console.log("completed: " + `.text-id-0`);
            completed.style.display = "none";
            //   alert('complete');
          },
        });

      timeline
        .add({
          changeBegin: function () {

            var begin_2 = document.querySelector(`.text-id-1`);
            console.log("begin: " + begin_2);
            console.log("got: " + `.text-id-1`);
            begin_2.style.display = "inline";
          },
          targets: `.text-id-1 .letter`,
          translateY: [100, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: "easeOutExpo",
          duration: 1400,
          delay: (el, i) => 300 + 30 * i,
        })
        .add({
          targets: `.text-id-1 .letter`,
          translateY: [0, -100],
          opacity: [1, 0],
          easing: "easeInExpo",
          duration: 1200,
          delay: (el, i) => 100 + 30 * i,
          changeComplete: function () {
            var change = document.querySelector(`.text-id-1`);
            console.log("log: " + change);
            console.log("completed: " + `.text-id-1`);
            change.style.display = "none";
            //   alert('complete');
          },
        });
    },
  },
  mounted() {
      this.animateTwo();
  }
};
</script>