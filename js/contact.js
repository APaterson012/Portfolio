document.addEventListener('DOMContentLoaded', () => {
  const form        = document.getElementById('contact-form');
  const thankModal  = document.getElementById('thankyou-modal');
  const closeBtn    = document.getElementById('close-modal');

  if (form && thankModal && closeBtn) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      // honeypot check
      if (form._honey.value) return;
      // show thank-you
      thankModal.classList.add('show');
      // reset
      form.reset();
      // fire off submission
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).catch(console.error);
    });

    closeBtn.addEventListener('click', () => {
      thankModal.classList.remove('show');
    });
  }
});
