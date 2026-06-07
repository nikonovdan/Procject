const burger = document.getElementById('burger');
const navList = document.querySelector('.navbar__list');

burger.addEventListener('click', () => {
    navList.classList.toggle('navbar__list--open');
    burger.classList.toggle('navbar__burger--active');
})