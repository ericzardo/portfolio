import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ScrollAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    "#projects-title",
    { x: -150, opacity: 0.6 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#projects-section",
        start: "-150 40%",
        end: "bottom 60%",
        scrub: 1.6,
        markers: false,
      },
    }
  );

  gsap.fromTo(
    "#projects",
    { x: -200, opacity: 0.6 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#projects-section",
        start: "-100 40%",
        end: "110% 60%",
        scrub: 1.6,
        markers: false,
      },
    }
  );
};

export const UnmountAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};