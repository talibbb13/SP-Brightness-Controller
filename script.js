var indicator = document.querySelector("#indicator");
var bar = document.querySelector("#bar");
var main = document.querySelector("#main");

bar.addEventListener("mouseenter", function () {
  var tymInt = setInterval(function () {
    adjs();
  }, 100);

  bar.addEventListener("mouseleave", function () {
    clearInterval(tymInt);
  });
});

function adjs() {
  var brt = gsap.utils.mapRange(0, 100, .3, 1, bar.value);
  var rot = gsap.utils.mapRange(0, 100, 0, 360, bar.value);

  console.log(brt, rot);
  main.style.filter = `brightness(${brt})`;
  indicator.style.transform = `rotate(${rot}deg)`;
}
