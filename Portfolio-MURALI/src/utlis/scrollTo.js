import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export const scrollToSection = (selector) => {
  const section = document.querySelector(selector);
  if (!section) return;

  gsap.to(window, {
    duration: 1,
    scrollTo: { y: section },
    ease: "power2.out"
  });
};