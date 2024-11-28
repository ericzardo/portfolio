import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ScrollAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    "#footer-section",
    { y: 100, opacity: 0, filter: "blur(10px)", scale: 0.9 },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      scrollTrigger: {
        trigger: "#footer-section",
        start: "-350px 90%",
        end: "50px 100%",
        scrub: 1.6,
        markers: false,
      },
    }
  );
};

export const UnmountAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};