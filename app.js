// Script for navbar

hamburger = document.querySelector('.hamburger');

hamburger.onclick = function () {
  navBar = document.querySelector('.nav-bar');
  navBar.classList.toggle('active');
};

// Script for hero typing text
const typed = new Typed('.pinput', {
  strings: ['Frontend Developer', 'Programist in Your Company 😉'],
  typeSpeed: 70,
  backSpeed: 70,
  loop: true,
});

// Redirecting to projects

const redirect1 = document.querySelector('#trainer');
const redirect2 = document.querySelector('#darcy');
const redirect3 = document.querySelector('#challange');

redirect1.addEventListener('click', () => {
  window.location.href = 'https://ruczynskipatryk.pl';
});

redirect2.addEventListener('click', () => {
  window.location.href = 'https://minikoparka-argon.pl';
});

redirect3.addEventListener('click', () => {
  window.location.href = 'https://zmianana100.pl';
});
