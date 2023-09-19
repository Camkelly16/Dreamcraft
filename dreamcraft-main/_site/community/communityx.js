document.addEventListener('DOMContentLoaded', function () {
    const hamburgerBtn = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
  
    // Toggle mobile navigation menu
    hamburgerBtn.addEventListener('click', function () {
      this.classList.toggle('is-active');
      mobileNav.classList.toggle('is-active');
    });
  
    // Toggle text box visibility
    const toggleBtns = document.querySelectorAll('.toggle-button');
    toggleBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const textBox = this.nextElementSibling;
        textBox.classList.toggle('content');
      });
    });
  });
  