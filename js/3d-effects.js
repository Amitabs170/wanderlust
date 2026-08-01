/* ==========================================
   3D EFFECTS — 3d-effects.js
   ========================================== */

/* ---------- Card 3D Tilt ---------- */

function attachTilt(card) {
  if (card.dataset.tilt) return;
  card.dataset.tilt = '1';

  card.addEventListener('mousemove', e => {
    const r  = card.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width  - 0.5;   // -0.5 .. 0.5
    const ny = (e.clientY - r.top)  / r.height - 0.5;
    const rx = ny * -18;
    const ry = nx *  18;
    const lx = 50 + nx * 50;
    const ly = 50 + ny * 50;

    card.style.transform =
      `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(14px) scale(1.02)`;
    card.style.boxShadow =
      `${ry * -1.5}px ${rx * 1.5}px 40px rgba(108,99,255,0.25), 0 20px 40px rgba(0,0,0,0.12)`;

    // Moving glare layer
    let glare = card.querySelector('.tilt-glare');
    if (!glare) {
      glare = Object.assign(document.createElement('div'), { className: 'tilt-glare' });
      Object.assign(glare.style, {
        position:'absolute', inset:'0', borderRadius:'inherit',
        pointerEvents:'none', zIndex:'2', transition:'background 0.1s ease'
      });
      card.style.position = 'relative';
      card.appendChild(glare);
    }
    glare.style.background =
      `radial-gradient(ellipse at ${lx}% ${ly}%, rgba(255,255,255,0.22) 0%, transparent 65%)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.boxShadow = '';
    const glare = card.querySelector('.tilt-glare');
    if (glare) glare.style.background = 'none';
  });
}

function initTilt() {
  document.querySelectorAll('.destination-card, .feature-card, .category-card, .tip-card, .weather-card').forEach(attachTilt);
}

/* Watch for cards added dynamically (e.g. destinations.js renders them) */
new MutationObserver(() => initTilt())
  .observe(document.body, { childList: true, subtree: true });

initTilt();

/* ---------- Scroll-triggered 3D Reveal ---------- */

function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.feature-card, .category-card, .destination-card, .tip-card, .form-card, .booking-box, .weather-card, .description, .quick-info, .day-card'
  );

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach((el, i) => {
    el.style.setProperty('--delay', (i % 6) * 0.09 + 's');
    el.classList.add('reveal-3d');
    io.observe(el);
  });
}

/* ---------- Hero Parallax Depth ---------- */

function initHeroParallax() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  const layers = {
    content  : hero.querySelector('.hero-content'),
    showcase : hero.querySelector('.showcase-scene'),
    blobs    : hero.querySelectorAll('.blob'),
  };

  hero.addEventListener('mousemove', e => {
    const hw = hero.offsetWidth;
    const hh = hero.offsetHeight;
    const mx = (e.clientX / hw - 0.5);
    const my = (e.clientY / hh - 0.5);

    if (layers.content)
      layers.content.style.transform = `translate3d(${mx * 10}px, ${my * 6}px, 0)`;

    if (layers.showcase)
      layers.showcase.style.transform =
        `translate3d(${mx * -18}px, ${my * -10}px, 0) rotateY(${mx * 6}deg) rotateX(${my * -4}deg)`;

    layers.blobs.forEach((b, i) => {
      const d = (i + 1) * 0.4;
      b.style.transform = `translate(${mx * 30 * d}px, ${my * 20 * d}px)`;
    });
  });

  hero.addEventListener('mouseleave', () => {
    if (layers.content)  layers.content.style.transform  = '';
    if (layers.showcase) layers.showcase.style.transform = '';
    layers.blobs.forEach(b => b.style.transform = '');
  });
}

/* ---------- Banner Parallax (detail page) ---------- */

function initBannerParallax() {
  const banner = document.querySelector('.destination-banner');
  if (!banner) return;
  const img = banner.querySelector('img');
  if (!img) return;

  window.addEventListener('scroll', () => {
    const offset = banner.getBoundingClientRect().top;
    const shift  = offset * 0.25;
    img.style.transform = `translateY(${shift}px) scale(1.08)`;
  }, { passive: true });
}

/* ---------- 3D Counter number animation ---------- */

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current).toLocaleString();
    if (current >= target) clearInterval(timer);
  }, 16);
}

function initCounters() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { animateCounter(e.target); io.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-target]').forEach(el => io.observe(el));
}

/* ---------- Boot ---------- */

document.addEventListener('DOMContentLoaded', () => {
  initScrollReveal();
  initHeroParallax();
  initBannerParallax();
  initCounters();
});
