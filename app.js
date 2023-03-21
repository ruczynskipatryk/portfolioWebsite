// Script for navbar

hamburger = document.querySelector('.hamburger');

hamburger.onclick = function () {
  navBar = document.querySelector('.nav-bar');
  navBar.classList.toggle('active');
};

// Script for hero typing text
const typed = new Typed('.pinput', {
  strings: ['Frontend Developer', 'Freelancer', 'Programist in Your Company'],
  typeSpeed: 220,
  backSpeed: 170,
  loop: true,
});
