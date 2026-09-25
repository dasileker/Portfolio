"use client";

import { useEffect, useRef } from "react";

export function ClientEffects() {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (!reducedMotion) {
      document.documentElement.classList.add("motion-ready");
    }
    const revealElements = document.querySelectorAll<HTMLElement>(".reveal");
    let observer: IntersectionObserver | undefined;
    if (reducedMotion || !("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -8%", threshold: 0.08 },
      );
      revealElements.forEach((element) => observer?.observe(element));
    }

    let lenis: import("lenis").default | undefined;
    let frame = 0;
    let cancelled = false;
    let startLenis: (() => Promise<void>) | undefined;

    if (!reducedMotion && finePointer) {
      startLenis = async () => {
        const { default: Lenis } = await import("lenis");
        if (cancelled) return;
        lenis = new Lenis({
          duration: 0.85,
          smoothWheel: true,
          syncTouch: false,
        });
        const raf = (time: number) => {
          lenis?.raf(time);
          frame = requestAnimationFrame(raf);
        };
        frame = requestAnimationFrame(raf);
      };
      window.addEventListener("wheel", startLenis, { once: true, passive: true });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      document.documentElement.classList.remove("motion-ready");
      observer?.disconnect();
      if (startLenis) window.removeEventListener("wheel", startLenis);
      cancelAnimationFrame(frame);
      lenis?.destroy();
    };
  }, []);

  return <div ref={progressRef} className="scroll-progress" aria-hidden="true" />;
}
