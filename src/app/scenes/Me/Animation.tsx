import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ScrollAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    "#me-title",
    { x: 150, opacity: 0.6 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#me-section",
        start: "-30% 40%",
        end: "bottom 60%",
        scrub: 1.6,
        markers: false,
      },
    }
  );

  gsap.fromTo(
    "#me-modal",
    { x: 200, scale: 1.1 },
    {
      x: 0,
      scale: 1,
      scrollTrigger: {
        trigger: "#me-section",
        start: "-20% 40%",
        end: "110% 60%",
        scrub: 1.6,
        markers: false,
      },
    }
  );

  gsap.fromTo(
    "#me-image",
    { scale: 1.20 },
    {
      scale: 1,
      scrollTrigger: {
        trigger: "#me-section",
        start: "-20% 40%",
        end: "110% 60%",
        scrub: 1.6,
        markers: false,
      },
    }
  );
};

export const GalleryAnimation = () => {
  gsap.fromTo(
    "#me-gallery",
    { scale: 0.2 },
    { scale: 1 }
  );
};

export const onHover = () => {
  gsap.to("#me-image", {
    scale: 1.12,
  });

  gsap.to("#me-modal", {
    scale: 1.05,
  });
};

export const onHoverOut = () => {
  gsap.to("#me-image", {
    scale: 1,
  });

  gsap.to("#me-modal", {
    scale: 1,
  });
};

export const UnmountAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};