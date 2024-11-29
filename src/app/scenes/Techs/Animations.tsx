import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export let loopingTween: gsap.core.Tween | null = null;

export const Looping = (isLooping: boolean = false) => {
  const techs = document.querySelector<HTMLDivElement>("#techs");

  if (!techs) return;

  const containerWidth = techs.clientWidth;
  const itemWidth = techs.children[0].getBoundingClientRect().width;
  const duration = (containerWidth / itemWidth) * 10;

  if (loopingTween) loopingTween.kill();

  loopingTween = gsap.to(techs, {
    x: `-=${containerWidth}`,
    duration: duration,
    ease: "linear",
    repeat: -1,
    paused: !isLooping,
  });
};

export const UnmountAnimations = () => {
  const triggers = ScrollTrigger.getAll();
  triggers.forEach((trigger) => {
    if (trigger.vars.trigger === "#techs-section") {
      trigger.kill();
    }
  });


  if (loopingTween) {
    loopingTween.kill();
    loopingTween = null;
  }
};

export const ScrollAnimation = () => {
  const triggerSection: gsap.DOMTarget | ScrollTrigger.Vars = {
    trigger: "#techs-section",
    start: "-20% 40%",
    end: "110% 60%",
    scrub: 1.6,
    markers: false,
  };

  const techs = document.querySelector<HTMLDivElement>("#techs");

  if (!techs) return;

  const containerWidth = techs.clientWidth;
  const currentX = gsap.getProperty(techs, "x") as number;

  gsap.fromTo(
    "#techs-title",
    { x: "-20%", opacity: 0.6 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: triggerSection,
    }
  );

  gsap.to(techs, {
    x: () => (currentX - containerWidth) * 0.2,
    ease: "linear",
    scrollTrigger: {
      ...triggerSection,
      id: "techs-scroll",
      onUpdate: () => {
        if (loopingTween && loopingTween.isActive()) {
          loopingTween.pause();
        }
      },
      onEnter: () => {
        if (loopingTween) loopingTween.pause();
      },
      onLeave: () => {
        if (loopingTween) loopingTween.resume();
      },
      onEnterBack: () => {
        if (loopingTween) loopingTween.pause();
      },
      onLeaveBack: () => {
        if (loopingTween) loopingTween.resume();
      },
    },
  });
};
