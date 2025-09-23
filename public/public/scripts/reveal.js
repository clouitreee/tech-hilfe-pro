// public/scripts/reveal.js
// Efecto reveal simple con IntersectionObserver

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  reveals.forEach((el) => {
    el.classList.add(
      "opacity-0",
      "translate-y-10",
      "transition",
      "duration-700",
      "ease-out"
    );
    observer.observe(el);
  });
});
