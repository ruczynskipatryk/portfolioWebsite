// Script for navbar

hamburger = document.querySelector('.hamburger');

hamburger.onclick = function () {
  navBar = document.querySelector('.nav-bar');
  navBar.classList.toggle('active');
};

// Script for h3
const typed = new Typed('.pinput', {
  strings: ['Frontend Developer', 'Freelancer', 'Programist in Your Company'],
  typeSpeed: 200,
  backSpeed: 150,
  loop: true,
});
