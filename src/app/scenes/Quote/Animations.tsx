import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ScrollAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  // gsap.fromTo(
  //   "#quote-icon",
  //   { x: 0, y:0 },
  //   {
  //     x: -10,
  //     y: -20,
  //     scrollTrigger: {
  //       trigger: "#quote-section",
  //       start: "40% 40%",
  //       end: "110% 70%",
  //       scrub: 2,
  //       markers: false,
  //     },
  //   }
  // );

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#quote-section",
      start: "-10% 40%",
      end: "70% 60%",
      scrub: 1.6,
      markers: false,
    },
  });

  timeline
    .fromTo(
      "#quote-icon",
      { x: -150, opacity: 0.1, filter: "blur(30px)", },
      { x: 0, opacity: 1, filter: "blur(2px)" }
    )
    .fromTo(
      "#quote-one",
      { x: -200, opacity: 0.2 },
      { x: 0, opacity: 1 }
    )
    .fromTo(
      "#quote-two",
      { x: -250, opacity: 0.3 },
      { x: 0, opacity: 1 }
    )
    .fromTo(
      "#quote-author",
      { x: -300, opacity: 0.4 },
      { x: 0, opacity: 1 },
      "-=0.6"
    );
};

export const UnmountAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};