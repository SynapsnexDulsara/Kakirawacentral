gsap.registerPlugin(ScrollTrigger);

gsap.to(".text h1", {
  y: "50%",
  ease: "none",
  scrollTrigger: {
    trigger: ".text",
    start: "top bottom", 
    end: "bottom top",
    scrub: true
  }
});

  
gsap.from(".text h1", {
  duration: 2,
  y: -100,
  opacity: 0,
  ease: "power4.out",
  delay: 0.5
});

gsap.from(".text h3", {
  duration: 2,
  x: -200,
  opacity: 0,
  ease: "power4.out",
  delay: 1
});