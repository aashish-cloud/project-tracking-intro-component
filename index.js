const hamburger = document.querySelector('.hamburger');
const close = document.querySelector('.close');
const menu = document.querySelector('.menu-content');
const dot = document.querySelector('.dot');
const line = document.querySelector('.line');

function menuChanges() {
  menu.classList.toggle('show');
  hamburger.classList.toggle('show');
  close.classList.toggle('show');
  dot.classList.toggle('show');
  line.classList.toggle('show');
}

hamburger.addEventListener('click', menuChanges)

close.addEventListener('click', menuChanges)
