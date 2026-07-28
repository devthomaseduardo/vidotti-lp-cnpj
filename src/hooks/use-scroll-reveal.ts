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

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const target = e.target as HTMLElement;
            const delay = Number(target.dataset.revealDelay ?? 0);
            window.setTimeout(() => target.classList.add("reveal-visible"), delay);
            io.unobserve(target);
          }
        });
      },
      { threshold: 0, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((n) => io.observe(n));

    // Safety net: elements that resize late (images) can miss the observer.
    const fallback = window.setTimeout(() => {
      items.forEach((n) => {
        const r = n.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) n.classList.add("reveal-visible");
      });
    }, 1200);

    return () => {
      window.clearTimeout(fallback);
      io.disconnect();
    };
  }, []);
  return ref;
}

/** Extremely subtle parallax applied to decorative background curves. */
export function useParallax<T extends HTMLElement = HTMLDivElement>(strength = 0.06) {
  const ref = useRef<T | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        raf = 0;
        const rect = el.getBoundingClientRect();
        const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * -strength;
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [strength]);
  return ref;
}

/** Animated number counter that starts when the element enters the viewport. */
export function useCountUp(target: number, duration = 1600) {
  const ref = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const format = (n: number) => n.toLocaleString("pt-BR");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = format(target);
      return;
    }
    el.textContent = "0";
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = format(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);
  return ref;
}
