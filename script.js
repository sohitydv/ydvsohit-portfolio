// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Highlight active section link while scrolling
const links = Array.from(document.querySelectorAll('.nav-link'));
const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);

function onScroll() {
  let idx = 0;
  const pos = window.scrollY + 120; // offset for header
  sections.forEach((sec, i) => {
    if (pos >= sec.offsetTop) idx = i;
  });
  links.forEach((l, i) => l.classList.toggle('active', i === idx));
}
document.addEventListener('scroll', onScroll, { passive: true });
onScroll();
