// alert("this is a clone of duo-studio.co")
let body = document.body;
let mouseChaser = document.querySelector(".mouseChaser");
// mouseChaser.style.left = "50%";
// mouseChaser.style.top = "10%";
document.addEventListener("mousemove", mouse);
function mouse() {
  mouseChaser.style.left = event.clientX - 7 + "px";
  mouseChaser.style.top = event.clientY - 7 + "px";
  mouseChaser.style.backgroundColor="#edbfff";
}
let navul = document.querySelector("nav ul");
navul.addEventListener("mouseenter", mouseChaserScaleUp);
navul.addEventListener("mouseleave", mouseChaserScaleDown);
function mouseChaserScaleUp() {
  mouseChaser.style.transform = "scale(2.53)";
}
function mouseChaserScaleDown() {
  mouseChaser.style.transform = "scale(1)";
}
let wobble = document.querySelectorAll(".wobble");
wobble[0].addEventListener("mouseenter", function () {
  mouseChaser.style.display = "none";
  wobble[0].style.backgroundColor = "white";
  wobble[0].style.color = "black";
});
wobble[0].addEventListener("mouseleave", function () {
  mouseChaser.style.display = "block";
  wobble[0].style.backgroundColor = "#edbfff";
  wobble[0].style.color = "black";
});
wobble[1].addEventListener("mouseenter", function () {
  mouseChaser.style.display = "none";
  wobble[1].style.backgroundColor = "black";
  wobble[1].style.color = "white";
});
wobble[1].addEventListener("mouseleave", function () {
  mouseChaser.style.display = "block";
  wobble[1].style.backgroundColor = "white";
  wobble[1].style.color = "black";
});

let page2sideimg = document.querySelector(".page2 .sideimg");
let card = document.querySelectorAll(".page2 .card");
document.addEventListener("DOMContentLoaded", function () {
  page2sideimg.style.background =
    "url(https://d33wubrfki0l68.cloudfront.net/20696575c48be579c70798eacdea1854f171b7cb/fda6d/assets/services/services__branding@1152.webp) ";
  page2sideimg.style.backgroundPosition = "center";
  page2sideimg.style.backgroundSize = "cover";
});
card[0].addEventListener("mouseover", function () {
  page2sideimg.style.background =
    "url(https://d33wubrfki0l68.cloudfront.net/20696575c48be579c70798eacdea1854f171b7cb/fda6d/assets/services/services__branding@1152.webp) ";
  page2sideimg.style.backgroundPosition = "center";
  page2sideimg.style.backgroundSize = "cover";
});
card[1].addEventListener("mouseover", function () {
  page2sideimg.style.background =
    "url(https://d33wubrfki0l68.cloudfront.net/976ade89631d7339ed7fb42512bb115d455ac9e3/0744c/assets/services/services__websites@1152.webp) ";
  page2sideimg.style.backgroundPosition = "center";
  page2sideimg.style.backgroundSize = "cover";
});
card[2].addEventListener("mouseover", function () {
  page2sideimg.style.background =
    "url(https://d33wubrfki0l68.cloudfront.net/d8139cdf83ac971c8cbd2a793ed4465ece04ea45/6aca7/assets/services/services__content@1152.webp) ";
  page2sideimg.style.backgroundPosition = "center";
  page2sideimg.style.backgroundSize = "cover";
});

// let tlPage1=gsap.timeline();
gsap.from(".page1 .line", {
  rotate: "50deg",
  duration: 1.8,
  opacity: 0,
  transformOrigin: "left"
});
gsap.from(".page1 p", {
  opacity: 0,
  duration: 3,
});
gsap.to(".page1 video", {
  scrollTrigger: {
    trigger: ".page1 video",
    start: "bottom bottom",
    end: "top top",
    scrub: true,
  },
  width: "90vw",
  height: "90vh",
  duration: 2,
});
gsap.to(".page1 h1,.page1 p", {
  scrollTrigger: {
    trigger: ".page1",
    start: "top -40vh",
    end: "top top",
    scrub: true,
  },
  filter: "blur(3px)",
  duration: 2,
});
gsap.to(".page1 #line1", {
  scrollTrigger: {
    trigger: ".page1",
    start: "top 20vh",
    end: "bottom top",
    scrub: true,
  },
  translateX: "-100px",
  duration: 2,
});
gsap.to(".page1 #line2", {
  scrollTrigger: {
    trigger: ".page1",
    start: "top 20vh  ",
    end: "bottom top",
    scrub: true,
  },
  translateX: "100px",
  duration: 2,
});

gsap.to(".page2", {
  scrollTrigger: {
    trigger: ".page2",
    start: "top top",
    end: "top top",
    scrub: 2,
  },
  backgroundColor: "white",
  color: "black",
});
gsap.from(".page2 .card",{scrollTrigger:{
    trigger:".page2 .card",
    scrub:3,
    start:"top center",
    end:"top center"
},
    opacity:0,
    duration:2,
    y:"50%"
});
// gsap.to(".page2 img", {
//     scrollTrigger: {
//       trigger:".page2 .cards",
//     //   start: "top 50%",
//     //   end: "top 50%",
//       scrub:1
//     }
//   });

gsap.to(".page3", {
  scrollTrigger: {
    trigger: ".page3",
    start: "center center",
    end: "center center",
    scrub: 1,
  },
  backgroundColor: "black",
  color: "white",
});
gsap.from(".page3 .card",{scrollTrigger:{
    trigger:".page3 .card",
    scrub:3,
    start:"top center",
    end:"top center"
},
    // rotate:"20deg",
    transform:"skew(2deg)",
    y:"-30%",
    opacity:0,
    duration:2,
    y:"50%"
});