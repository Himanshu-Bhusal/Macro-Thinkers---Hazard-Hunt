/* =========================================================
   MACRO THINKER — HAZARD HUNT SITE SCRIPT
   1. Mobile nav toggle
   2. Demo video autoplay on scroll
   3. Contact form client-side validation
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1. Mobile nav toggle ---------- */
  var navToggle = document.getElementById('nav-toggle');
  var mainNav = document.getElementById('main-nav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close the mobile menu when a nav link is clicked
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- 2. Play the demo video while it is in view ---------- */
  var demoVideo = document.querySelector('.demo-video');
  if (demoVideo && 'IntersectionObserver' in window) {
    var videoObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var playPromise = demoVideo.play();
          if (playPromise) {
            playPromise.catch(function (error) {
              if (error.name !== 'AbortError') {
                console.error('Unable to autoplay the demo video:', error);
              }
            });
          }
        } else {
          demoVideo.pause();
        }
      });
    }, { threshold: 0.25 });

    videoObserver.observe(demoVideo);
  } else if (demoVideo) {
    var playPromise = demoVideo.play();
    if (playPromise) {
      playPromise.catch(function (error) {
        if (error.name !== 'AbortError') {
          console.error('Unable to autoplay the demo video:', error);
        }
      });
    }
  }

  /* ---------- 3. Contact form validation ---------- */
  var form = document.getElementById('contact-form');
  if (!form) {
    return;
  }

  var statusEl = form.querySelector('.form-status');
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function fieldWrapper(input) {
    return input.closest('.form-field');
  }

  function showError(input, show) {
    var wrapper = fieldWrapper(input);
    if (!wrapper) return;
    wrapper.classList.toggle('field-error', show);
  }

  function validateField(input) {
    if (input.type === 'email') {
      var valid = input.value.trim() !== '' && emailPattern.test(input.value.trim());
      showError(input, !valid);
      return valid;
    }
    if (input.hasAttribute('required')) {
      var filled = input.value.trim() !== '';
      showError(input, !filled);
      return filled;
    }
    return true;
  }

  var validatedFields = form.querySelectorAll('input[required], textarea[required], input[type="email"]');

  validatedFields.forEach(function (input) {
    input.addEventListener('blur', function () {
      validateField(input);
    });
    input.addEventListener('input', function () {
      if (fieldWrapper(input) && fieldWrapper(input).classList.contains('field-error')) {
        validateField(input);
      }
    });
  });

  form.addEventListener('submit', function (event) {
    var allValid = true;

    validatedFields.forEach(function (input) {
      if (!validateField(input)) {
        allValid = false;
      }
    });

    if (!allValid) {
      event.preventDefault();
      if (statusEl) {
        statusEl.textContent = 'Please fix the highlighted fields before sending.';
        statusEl.style.color = '#c0392b';
      }
      var firstError = form.querySelector('.field-error input, .field-error textarea');
      if (firstError) {
        firstError.focus();
      }
      return;
    }

    if (statusEl) {
      statusEl.textContent = 'Sending your request...';
      statusEl.style.color = '';
    }
    // Form submits normally to the Formspree endpoint from here.
  });

});
