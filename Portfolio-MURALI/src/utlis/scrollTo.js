import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export const scrollToSection = (selector) => {
  ScrollTrigger.getAll().forEach(trigger => trigger.refresh());

  gsap.to(window, {
    duration: 1,
    scrollTo: { y: selector, autoKill: true },
    ease: "power2.out"
  });
};