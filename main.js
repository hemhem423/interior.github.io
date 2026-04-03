// ── Scrolled nav ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

// ── Hero parallax ──
const heroBg = document.getElementById('heroBg');
window.addEventListener('scroll', () => {
  if (window.scrollY < window.innerHeight) {
    heroBg.style.transform = `scale(1.06) translateY(${window.scrollY * 0.18}px)`;
  }
});

// ── Marquee build ──
const words = [
  'Handcrafted','◆','Sustainable','◆','Timeless Design','◆',
  '職人仕上げ','◆','上質素材','◆','Made in Japan','◆'
];
const inner = document.getElementById('marqueeInner');
const all = [...words, ...words, ...words, ...words];
inner.innerHTML = all.map(w =>
  w === '◆'
    ? `<span class="marquee-item marquee-dot">${w}</span>`
    : `<span class="marquee-item">${w}</span>`
).join('');

// ── Scroll reveal ──
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
reveals.forEach(el => io.observe(el));