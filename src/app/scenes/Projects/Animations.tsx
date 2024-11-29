import { MouseEvent } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export const ScrollAnimation = () => {
  const triggerSection: gsap.DOMTarget | ScrollTrigger.Vars = {
    trigger: "#projects-section",
    start: "-150 40%",
    end: "bottom 60%",
    scrub: 1.6,
    markers: false,
  };

  gsap.fromTo(
    "#projects-title",
    { x: "-30%", opacity: 0.6 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: triggerSection
    }
  );

  gsap.fromTo(
    "#projects",
    { x: "-20%", opacity: 0.6 },
    {
      x: "-10%",
      opacity: 1,
      scrollTrigger: triggerSection
    }
  );

  gsap.timeline({
    scrollTrigger: {
      id: "project-cards-trigger",
      ...triggerSection
    }
  })
  .fromTo(".project-card", 
    { rotateX: 10, rotateY: 50 },
    { rotateX: 0, rotateY: 0, duration: 0.8 }
  )
  .to(".project-card", 
    { rotateX: 10, rotateY: -50, duration: 0.8 }
  );
};

export const UnmountAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};

export const onHover = (e: MouseEvent<HTMLDivElement>) => {
  const card = e.currentTarget;

  if (!card) return;

  const scrollTrigger = ScrollTrigger.getById('project-cards-trigger');
  if (scrollTrigger) scrollTrigger.getTween().pause();

  const tl = gsap.timeline();

  tl.to(card, {
    scale: 1.1,
    duration: 0.1
  })
  .to(card, {
    rotationY: 180,
    duration: 0.8,
  });
};

export const onHoverOut = (e: MouseEvent<HTMLDivElement>) => {
  const card = e.currentTarget;

  if (!card) return;

  const tl = gsap.timeline();

  tl.to(card, {
    scale: 1,
    duration: 0.4,
  })
  .to(card, {
    rotationY: 0,
    duration: 0.8,
  });

  const scrollTrigger = ScrollTrigger.getById('project-cards-trigger');
  if (scrollTrigger) scrollTrigger.getTween().resume();
};