'use strict'

const menuEl = document.querySelector('.menu');
menuEl.addEventListener('click', event => {
  document.querySelector('.active').classList.remove('active');
  event.target.classList.add('active')
  event.preventDefault();
})