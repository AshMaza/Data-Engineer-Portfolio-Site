// Current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile drawer toggle
const burger = document.getElementById("hamburger");
const drawer = document.getElementById("mobileDrawer");
burger?.addEventListener("click", () => {
  const open = drawer.classList.toggle("open");
  burger.setAttribute("aria-expanded", open ? "true" : "false");
});
// Close drawer when a link is clicked
document.querySelectorAll(".mobile-link").forEach(a =>
  a.addEventListener("click", () => drawer.classList.remove("open"))
);

// Highlight active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");
const setActive = () => {
  let current = "";
  sections.forEach(sec => {
    const top = window.scrollY + (window.innerHeight * 0.25);
    if (top >= sec.offsetTop) current = sec.id;
  });
  navLinks.forEach(l => {
    l.classList.toggle("active", l.getAttribute("href") === `#${current}`);
  });
};
window.addEventListener("scroll", setActive);
setActive();

// Scroll-reveal with IntersectionObserver
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("reveal-visible");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Back-to-top button
const toTop = document.getElementById("toTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) toTop.classList.add("show");
  else toTop.classList.remove("show");
});
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
