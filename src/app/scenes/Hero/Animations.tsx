import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ScrollAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    "#hero-status",
    { x: 0 },
    {
      x: 75,
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
      x: 85,
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
      x: 95,
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