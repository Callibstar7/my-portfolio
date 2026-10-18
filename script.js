(() => {
  const doc = document;
  doc.documentElement.classList.add('js');
 
  /* Sticky header state */
  const header = doc.querySelector('.site-header');
  const onHeaderScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
  onHeaderScroll();
  window.addEventListener('scroll', onHeaderScroll, { passive: true });
 
  /* Mobile navigation */
  const toggle = doc.querySelector('.nav-toggle');
  const menu = doc.getElementById('nav-menu');
  const setMenu = (open) => {
    doc.body.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };
  toggle.addEventListener('click', () => setMenu(!doc.body.classList.contains('nav-open')));
  menu.addEventListener('click', (e) => {
    if (e.target.closest('a')) setMenu(false);
  });
  doc.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && doc.body.classList.contains('nav-open')) {
      setMenu(false);
      toggle.focus();
    }
  });
  window.matchMedia('(min-width: 881px)').addEventListener('change', () => setMenu(false));
 
  /* Reveal on scroll */
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealEls = [...doc.querySelectorAll('.reveal')];
  if (!prefersReduced && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          io.unobserve(el);
          el.classList.add('visible');
          const cleanup = () => {
            el.classList.remove('reveal', 'visible');
            el.style.transitionDelay = '';
          };
          el.addEventListener('transitionend', cleanup, { once: true });
          setTimeout(cleanup, 1800);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => {
      const group = el.parentElement
        ? [...el.parentElement.children].filter((c) => c.classList.contains('reveal'))
        : [];
      const idx = Math.max(group.indexOf(el), 0);
      el.style.transitionDelay = `${Math.min(idx, 5) * 80}ms`;
      io.observe(el);
    });
  } else {
    revealEls.forEach((el) => el.classList.remove('reveal'));
  }
 
  /* Active nav link while scrolling */
  const sections = [...doc.querySelectorAll('main section[id]')];
  const navLinks = [...doc.querySelectorAll('.nav-link')];
  const setActive = () => {
    const pos = window.scrollY + 140;
    let current = sections.length ? sections[0].id : null;
    sections.forEach((s) => {
      if (s.offsetTop <= pos) current = s.id;
    });
    navLinks.forEach((l) =>
      l.classList.toggle('active', l.getAttribute('href') === `#${current}`)
    );
  };
  setActive();
  window.addEventListener('scroll', setActive, { passive: true });
 
  /* Footer year */
  const year = doc.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
 