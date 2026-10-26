import { useEffect, useRef, useState } from "react";

const pairs = [
  { problem: "People don’t get it.", answer: "Make it clear." },
  { problem: "Your content blends in.", answer: "Find a fresh angle." },
  { problem: "The audience feels far away.", answer: "Make it human." },
];

/**
 * Compact scroll moment between the founder intro and the offer list.
 * Desktop: the pairs swap one at a time as the panel travels through the
 * viewport (plain scroll listening, no scroll hijacking) and replay when
 * you scroll back up. Small screens and reduced motion: the pairs stack
 * vertically and reveal one by one.
 */
export function ScrollPairs() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [stacked, setStacked] = useState(true);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const pairEls = Array.from(root.querySelectorAll<HTMLElement>(".pair"));
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 767px)");

    let observer: IntersectionObserver | null = null;
    let frame = 0;
    let onScroll: (() => void) | null = null;

    const clearDriver = () => {
      if (onScroll) {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        onScroll = null;
      }
      window.cancelAnimationFrame(frame);
      frame = 0;
    };
    const clearObserver = () => {
      observer?.disconnect();
      observer = null;
    };

    const applyMode = () => {
      const stackedMode = reduceQuery.matches || mobileQuery.matches;
      setStacked(stackedMode);
      clearDriver();
      clearObserver();
      if (stackedMode) {
        setActive(0);
        setProgress(0);
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.setAttribute("data-visible", "true");
                observer?.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.35 },
        );
        pairEls.forEach((el) => observer?.observe(el));
        return;
      }
      const update = () => {
        frame = 0;
        const rect = root.getBoundingClientRect();
        const marker = window.innerHeight * 0.55;
        const span = rect.height + window.innerHeight * 0.25;
        const t = Math.min(1, Math.max(0, (marker - rect.top) / span));
        setProgress(t);
        setActive(Math.min(pairs.length - 1, Math.floor(t * pairs.length)));
      };
      onScroll = () => {
        if (!frame) frame = window.requestAnimationFrame(update);
      };
      update();
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll);
    };

    applyMode();
    const onChange = () => applyMode();
    reduceQuery.addEventListener("change", onChange);
    mobileQuery.addEventListener("change", onChange);
    return () => {
      clearDriver();
      clearObserver();
      reduceQuery.removeEventListener("change", onChange);
      mobileQuery.removeEventListener("change", onChange);
    };
  }, []);

  return (
    <div ref={rootRef} className="pairs" data-mode={stacked ? "stacked" : "driver"}>
      <div className="pairs-track">
        {pairs.map((pair, i) => (
          <div key={pair.problem} className="pair" data-active={i === active ? "true" : undefined}>
            <div className="pair-line">
              <span className="pairs-problem">{pair.problem}</span>
            </div>
            <div className="pair-line">
              <span aria-hidden="true" className="pairs-arrow">→</span>
            </div>
            <div className="pair-line pair-answer">
              <span className="pairs-answer">{pair.answer}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="pairs-meta">
        <span className="meta shrink-0 text-primary">0{active + 1} / 03</span>
        <span aria-hidden="true" className="pairs-progress">
          <span style={{ width: `${Math.round(progress * 100)}%` }} />
        </span>
      </div>
    </div>
  );
}
