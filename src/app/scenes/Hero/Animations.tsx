import gsap from "gsap";

export const ScrollAnimation = () => {
  gsap.fromTo(
    "#hero-status",
    { x: 0 },
    {
      x: "5%",
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "bottom 60%",
        scrub: 1.6,
        markers: false,
      },
    }
  );

  gsap.fromTo(
    "#hero-apresentation",
    { x: 0 },
    {
      x: "10%",
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "110% 60%",
        scrub: 1.6,
        markers: false,
      },
    }
  );

  gsap.fromTo(
    "#hero-role",
    { x: 0 },
    {
      x: "15%",
      scrollTrigger: {
        trigger: "#hero-section",
        start: "top top",
        end: "115% 60%",
        scrub: 1.6,
        markers: false,
      },
    }
  );
};