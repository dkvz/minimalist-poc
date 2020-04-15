const menuBtn = document.getElementById('menuBtn');
const closeMenuBtn = document.getElementById('closeMenuBtn');
const menuDynamic = document.querySelector('.menu-dynamic'); 

menuBtn.addEventListener('click', () => {
  document.body.setAttribute('data-overlay', 'true');
  menuDynamic.classList.remove('d-none');
  setTimeout(() => {
    menuDynamic.classList.add('show');
  }, 10);
});

closeMenuBtn.addEventListener('click', () => {
  menuDynamic.classList.remove('show');
  setTimeout(() => {
    document.body.removeAttribute('data-overlay');
    menuDynamic.classList.add('d-none');
  }, 1000);
});