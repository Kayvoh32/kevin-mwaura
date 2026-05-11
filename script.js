/* ─────────────────────────
   Scroll navbar state
───────────────────────── */
const nav = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});


/* ─────────────────────────
   Reveal on scroll
───────────────────────── */
const revealEls = document.querySelectorAll('.reveal');

const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }

  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
});

revealEls.forEach(el => revealObs.observe(el));


/* ─────────────────────────
   Stagger animations
───────────────────────── */

/* Skills */
document.querySelectorAll('.skills-grid .skill-card')
.forEach((el, i) => {
  el.style.transitionDelay = `${0.06 * i}s`;
});

/* Projects */
document.querySelectorAll('.projects-grid .project-card')
.forEach((el, i) => {
  el.style.transitionDelay = `${0.08 * i}s`;
});

/* Vision cards */
document.querySelectorAll('.vision-grid .vision-card')
.forEach((el, i) => {
  el.style.transitionDelay = `${0.08 * i}s`;
});


/* ─────────────────────────
   Active nav link
───────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const activeObs = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      navLinks.forEach(link => {

        link.style.color =
          link.getAttribute('href') === `#${entry.target.id}`
            ? 'var(--gold)'
            : '';

      });

    }

  });

}, {
  threshold: 0.5
});

sections.forEach(section => activeObs.observe(section));


/* ─────────────────────────
   Smooth scroll offset
───────────────────────── */
navLinks.forEach(link => {

  link.addEventListener('click', (e) => {

    const targetId = link.getAttribute('href');

    if (targetId.startsWith('#')) {

      e.preventDefault();

      const target = document.querySelector(targetId);

      if (target) {

        const offset = 80;

        const top =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          offset;

        window.scrollTo({
          top,
          behavior: 'smooth'
        });

      }

    }

  });

});
