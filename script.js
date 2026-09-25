const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu a');
const glow = document.querySelector('.cursor-glow');

menuBtn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuBtn.classList.toggle('active', open);
  menuBtn.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

menuLinks.forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuBtn.classList.remove('active');
  menuBtn.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}));

window.addEventListener('mousemove', (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

const video = document.querySelector('.hero-video');
video.addEventListener('error', () => {
  video.style.display = 'none';
});

// Smooth reveal for sections as they enter the viewport.
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.event-card, .person, .leader-row, .stats > div')
        .forEach((el, i) => {
          el.animate(
            [{opacity:0, transform:'translateY(20px)'}, {opacity:1, transform:'translateY(0)'}],
            {duration:550, delay:i*80, fill:'forwards', easing:'cubic-bezier(.2,.7,.2,1)'}
          );
        });
    }
  });
}, {threshold:0.18});

document.querySelectorAll('.section').forEach(s => observer.observe(s));
