import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

export const scrollToSection = (selector) => {
  const isMobile = window.innerWidth <= 768;
  const section = document.querySelector(selector);

  if (!section) return;

  // ✅ MOBILE → NORMAL VERTICAL SCROLL
  if (isMobile) {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: section, autoKill: true },
      ease: "power2.out"
    });
  }

  // ✅ DESKTOP → GSAP CONTROLLED SCROLL
  else {
    ScrollTrigger.refresh();

    const scrollX =
      section.offsetLeft;

    gsap.to(window, {
      duration: 1,
      scrollTo: { y: scrollX },
      ease: "power2.out"
    });
  }
};
