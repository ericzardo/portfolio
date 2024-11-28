import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let loopingTween: gsap.core.Tween | null = null;


export const Looping = () => {
  const techs = document.querySelector<HTMLDivElement>("#techs");

  if (!techs) return;

  const containerWidth = techs.clientWidth;
  const itemWidth = techs.children[0].getBoundingClientRect().width;
  const duration = (containerWidth / itemWidth) * 10;

  if (loopingTween) loopingTween.kill();

  const currentX = gsap.getProperty(techs, "x") as number;

  loopingTween = gsap.to(techs, {
    x: currentX - containerWidth,
    duration: duration,
    ease: "linear",
    repeat: -1,
    onRepeat: () => {
      techs.style.transition = "none";
      techs.style.transform = "translateX(0)";
      requestAnimationFrame(() => {
        techs.style.transition = "transform 0s linear";
      });
    },
  });
};

export const UnmountAnimations = () => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
};

export const KillAnimations = () => {
  gsap.killTweensOf("#techs");
};

export const ScrollAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const techs = document.querySelector<HTMLDivElement>("#techs");

  if (!techs) return;

  const containerWidth = techs.clientWidth;
  const currentX = gsap.getProperty(techs, "x") as number;

  gsap.fromTo(
    "#techs-title",
    { x: -150, opacity: 0.6 },
    {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: "#techs-section",
        start: "-20% 40%",
        end: "110% 60%",
        scrub: 1.6,
        markers: false,
      },
    }
  );

  gsap.to(techs, {
    x: () => (currentX - containerWidth) * 0.5,
    ease: "linear",
    scrollTrigger: {
      trigger: "#techs-section",
      start: "-20% 40%",
      end: "110% 60%",
      scrub: 1.6,
      markers: false,
      onUpdate: (self) => {
        const progress = self.progress;
        const newX = (currentX - containerWidth) * progress * 0.5;
        gsap.set(techs, { x: newX });
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