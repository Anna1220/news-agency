let menuElem = document.getElementById('menu_header');
let titleElem = menuElem.querySelector('.title_nav');

titleElem.onclick = function() {
    menuElem.classList.toggle("open");
};