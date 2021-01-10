import anime from 'animejs';


var sampleTexts = ["hello world", "this is not a drill"]

console.log(sampleTexts);

export function translate(element) {
    var changeBegan = 0;
    // var changeCompleted = 0;

  anime({
    targets: element,
    translateX: 500,
    loop: true,
    changeBegin: function(anim) {
        changeBegan++;
        console.log(changeBegan);
        console.log(anim);
      },
  });
}


export function textAnimate(element) {
    // var textWrapper = document.querySelector(element);
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");



anime.timeline({loop: true})
  .add({
    targets: element,
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i
  })


//     anime.timeline({loop: true})
//   .add({
//     targets: element,
//     translateY: [100,0],
//     translateZ: 0,
//     opacity: [0,1],
//     easing: "easeOutExpo",
//     duration: 1400,
//     delay: (el, i) => 300 + 30 * i
//   }).add({
//     targets: '.ml13 .letter',
//     translateY: [0,-100],
//     opacity: [1,0],
//     easing: "easeInExpo",
//     duration: 1200,
//     delay: (el, i) => 100 + 30 * i
//   });
}