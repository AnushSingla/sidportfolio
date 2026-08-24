/* ===================================================
   SIDDHARTHA HAVELIA — Portfolio JavaScript
=================================================== */

// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const current = window.scrollY;
  if (current > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  lastScroll = current;
}, { passive: true });

// ===== ACTIVE NAV LINKS =====
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-links a');

const activateLink = () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navLinkEls.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
};
window.addEventListener('scroll', activateLink, { passive: true });

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
let menuOpen = false;

hamburger.addEventListener('click', () => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    navLinks.style.cssText = `
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 64px; left: 0; right: 0;
      background: rgba(5,5,5,0.98);
      backdrop-filter: blur(20px);
      padding: 32px 24px;
      gap: 24px;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      z-index: 999;
    `;
    hamburger.children[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    hamburger.children[1].style.opacity = '0';
    hamburger.children[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    navLinks.style.cssText = '';
    hamburger.children[0].style.transform = '';
    hamburger.children[1].style.opacity = '';
    hamburger.children[2].style.transform = '';
  }
});

// Close menu on link click
navLinkEls.forEach(link => {
  link.addEventListener('click', () => {
    if (menuOpen) {
      menuOpen = false;
      navLinks.style.cssText = '';
      hamburger.children[0].style.transform = '';
      hamburger.children[1].style.opacity = '';
      hamburger.children[2].style.transform = '';
    }
  });
});

// ===== FADE-UP SCROLL OBSERVER =====
const fadeEls = document.querySelectorAll('.fade-up');
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.08,
  rootMargin: '0px 0px -60px 0px'
});
fadeEls.forEach(el => fadeObserver.observe(el));

// ===== ANIMATED COUNTER =====
const counters = document.querySelectorAll('.stat-num[data-target]');

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutCubic(progress);
    el.textContent = Math.round(eased * target);
    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target;
    }
  }
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      entry.target.dataset.animated = 'true';
      animateCounter(entry.target);
    }
  });
}, { threshold: 0.5 });
counters.forEach(el => counterObserver.observe(el));

// ===== CURSOR GLOW (desktop only) =====
if (window.matchMedia('(pointer: fine)').matches) {
  const glow = document.createElement('div');
  glow.style.cssText = `
    position: fixed;
    width: 300px; height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,200,150,0.04) 0%, transparent 70%);
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s;
    top: 0; left: 0;
  `;
  document.body.appendChild(glow);

  let mouseX = 0, mouseY = 0;
  let glowX = 0, glowY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  }, { passive: true });

  function animateGlow() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    glow.style.left = `${glowX}px`;
    glow.style.top  = `${glowY}px`;
    requestAnimationFrame(animateGlow);
  }
  animateGlow();
}

// ===== SMOOTH REVEAL ON PAGE LOAD =====
document.addEventListener('DOMContentLoaded', () => {
  // Trigger hero fade-in immediately
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      document.body.style.opacity = '1';
    });
  });
});

// ===== LESSON CARD — PARALLAX SUBTLE =====
const lessonCards = document.querySelectorAll('.lesson-card');
lessonCards.forEach((card, i) => {
  card.addEventListener('mouseenter', () => {
    card.style.transition = 'all 0.35s cubic-bezier(0.4,0,0.2,1)';
  });
});

// ===== CONSOLE SIGNATURE =====
console.log(
  '%c SIDDHARTHA HAVELIA ',
  'background: #00C896; color: #000; font-weight: 900; font-size: 14px; padding: 6px 16px; border-radius: 4px;'
);
console.log('%c Portfolio — Built with precision.', 'color: #00C896; font-size: 11px;');
