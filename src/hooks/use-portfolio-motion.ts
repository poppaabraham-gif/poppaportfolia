import { useEffect, useState } from "react";

export function usePortfolioMotion() {
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-visible", "true");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    if (!reducedMotion) {
      elements.forEach((element) => {
        element.setAttribute("data-motion", "true");
        revealObserver.observe(element);
      });
    }

    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
    let frame = 0;
    const updateActive = () => {
      frame = 0;
      const marker = Math.min(window.innerHeight * 0.35, 280);
      let current = "top";
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= marker) current = section.id;
      });
      setActiveSection(current);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateActive);
    };
    updateActive();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      revealObserver.disconnect();
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return activeSection;
}