document.addEventListener('DOMContentLoaded', () => {
  // CV modal
  const openBtn  = document.getElementById('open-cv');
  const closeBtn = document.getElementById('close-cv');
  const modal    = document.getElementById('cv-modal');

  if (openBtn && closeBtn && modal) {
    openBtn.addEventListener('click', () => modal.classList.add('show'));
    closeBtn.addEventListener('click', () => modal.classList.remove('show'));
  }

  // Hero animations
  const homeElements = document.querySelectorAll('.home-text, .home-img');
  homeElements.forEach((el, index) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    setTimeout(() => {
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, index * 200);
  });
});
