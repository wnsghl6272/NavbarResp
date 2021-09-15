const toogleBtn = document.querySelector(".toogleBtn");
const nav_menus = document.querySelector(".nav_menus");
const nav_icons = document.querySelector(".nav_icons");

toogleBtn.addEventListener('click', function () {
    nav_menus.classList.toggle('active');
    nav_icons.classList.toggle('active');
})