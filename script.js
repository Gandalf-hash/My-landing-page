const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');


function toggleMenu() {
  return document.body.classList.toggle('show-nav')
}
//toggle nav
toggle.addEventListener('click', toggleMenu)

//show modal

open.addEventListener('click', () => modal.classList.add('show-modal'));

//hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// hide modal
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false);


//functions
