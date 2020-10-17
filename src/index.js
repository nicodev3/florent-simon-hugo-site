// JS Goes here - ES6 supported

import "./css/main.css";

// Say hello
const nav = document.querySelector('.js-nav');
const navTrigger = document.querySelector('.js-nav-trigger');
navTrigger.addEventListener('click', function() {
  nav.classList.toggle('active');
}, false);