document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
  const prime = (el: HTMLElement) =>
    el.classList.add("opacity-0", "translate-y-6", "transition-all", "duration-700");
  els.forEach(prime);

  const onScroll = () => {
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.9) {
        el.classList.remove("opacity-0", "translate-y-6");
        el.classList.add("opacity-100", "translate-y-0");
      }
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
});
