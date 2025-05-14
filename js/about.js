// about.js

document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".story-section");

  // staggered IntersectionObserver
  sections.forEach((section, i) => {
    section.setAttribute("data-index", i);
  });

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const idx = entry.target.getAttribute("data-index");
        entry.target.classList.add("visible");
        // apply transition-delay via inline style
        entry.target.style.transitionDelay = `${0.2 * idx}s`;
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(s => observer.observe(s));
});
