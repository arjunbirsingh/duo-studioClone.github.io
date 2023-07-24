let body = document.body;

// let tlPage1=gsap.timeline();
gsap.from(".page1 .line", {
  rotate: "5deg",
  duration: 1.5,
  opacity: 0,
  transformOrigin: "left",
});
gsap.from(".page1 p", {
  opacity: 0,
  duration: 3
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
  duration: 2
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
    trigger:".page2",
    start: "top center",
    end: "top center",
    scrub:2
  },
  backgroundColor: "white",
  color:"black"
});

gsap.to(".page2 img", {
    scrollTrigger: {
      trigger:".page2 .cards",
    //   start: "top 50%",
    //   end: "top 50%",
      scrub:1
    },
    scale:"1.1"
  });
  
gsap.to(".page3", {
    scrollTrigger: {
      trigger:".page3",
      start: "top center",
      end: "top center",
      scrub:1
    },
    backgroundColor: "black",
    color:"white"
  });
  