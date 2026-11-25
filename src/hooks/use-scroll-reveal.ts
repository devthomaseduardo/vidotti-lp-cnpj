import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const items = Array.from(el.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (reduced) {
      items.forEach((n) => n.classList.add("reveal-visible"));
      return;
    }
    items.forEach((n) => {
      n.classList.add(n.dataset.reveal === "mask" ? "reveal-mask" : "reveal");
    });

    const timers = new WeakMap<HTMLElement, number>();
    const clearPending = (target: HTMLElement) => {
      const pending = timers.get(target);
      if (pending) window.clearTimeout(pending);
    };
    const scheduleReveal = (target: HTMLElement) => {
      clearPending(target);
      const delay = Number(target.dataset.revealDelay ?? 0);
      const timer = window.setTimeout(() => target.classList.add("reveal-visible"), delay);
      timers.set(target, timer);
    };
    const syncVisibleItems = () => {
      items.forEach((target) => {
        const rect = target.getBoundingClientRect();
        const visible =
          rect.top < window.innerHeight * 0.92 && rect.bottom > window.innerHeight * 0.08;
        if (visible) scheduleReveal(target);
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const target = e.target as HTMLElement;

          if (e.isIntersecting) {
            scheduleReveal(target);
          } else {
            clearPending(target);
            target.classList.remove("reveal-visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -12% 0px" },
    );
    items.forEach((n) => io.observe(n));

    const initialFrame = window.requestAnimationFrame(syncVisibleItems);
    const anchorSync = window.setTimeout(syncVisibleItems, 450);
    const fallback = window.setTimeout(syncVisibleItems, 1200);
    let hashTimer = 0;
    const onHashChange = () => {
      if (hashTimer) window.clearTimeout(hashTimer);
      hashTimer = window.setTimeout(syncVisibleItems, 650);
    };
    window.addEventListener("hashchange", onHashChange);

    return () => {
      window.cancelAnimationFrame(initialFrame);
      window.clearTimeout(anchorSync);
      window.clearTimeout(fallback);
      if (hashTimer) window.clearTimeout(hashTimer);
      window.removeEventListener("hashchange", onHashChange);
      items.forEach((n) => {
        const pending = timers.get(n);
        if (pending) window.clearTimeout(pending);
      });
      io.disconnect();
    };
  }, []);
  return ref;
}
