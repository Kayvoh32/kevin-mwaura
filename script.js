
/* GöÇGöÇ Scroll-spy nav GöÇGöÇ */
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

/* GöÇGöÇ Reveal on scroll GöÇGöÇ */
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObs.observe(el));

/* GöÇGöÇ Stagger children in grids GöÇGöÇ */
document.querySelectorAll('.skills-grid .skill-card').forEach((el, i) => {
  el.style.transitionDelay = `${0.06 * i}s`;
});
document.querySelectorAll('.projects-grid .project-card').forEach((el, i) => {
  el.style.transitionDelay = `${0.08 * i}s`;
});

/* GöÇGöÇ Smooth active nav link GöÇGöÇ */
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');
const activeObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAs.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${e.target.id}`
          ? 'var(--gold)' : '';
      });
    }
  });
}, { threshold: 0.5 });
sections.forEach(s => activeObs.observe(s));

