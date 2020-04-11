const menuBtn = document.getElementById('menuBtn');
const menuOverlay = document.querySelector('.menu-overlay'); 

menuBtn.addEventListener('click', () => {
  menuOverlay.classList.remove('d-none');
  menuOverlay.classList.add('show');
});