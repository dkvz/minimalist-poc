const menuBtn = document.getElementById('menuBtn');
const menuDynamic = document.querySelector('.menu-dynamic'); 

menuBtn.addEventListener('click', () => {
  document.body.setAttribute('data-overlay', 'true');
  menuDynamic.classList.remove('d-none');
  menuDynamic.classList.add('show');
});